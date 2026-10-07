import { createWriteStream } from "node:fs";
import {
  copyFile,
  mkdir,
  readFile,
  rm,
  stat,
  writeFile,
} from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { ZipArchive } from "archiver";
import { build, transform } from "esbuild";
import JavaScriptObfuscator from "javascript-obfuscator";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const releaseRoot = path.join(projectRoot, "release");
const unpackedRoot = path.join(releaseRoot, "unpacked");

const runtimeFiles = [
  "manifest.json",
  "THIRD_PARTY_LICENSES.txt",
  "fonts/PretendardVariable.woff2",
  "fonts/Jua-Regular.woff2",
  "fonts/NanumSquareRoundR.woff2",
  "fonts/NanumSquareRoundB.woff2",
  "icons/fab.webp",
  "icons/icon16.png",
  "icons/icon48.png",
  "icons/icon128.png",
];

const javascriptEntries = ["theme.js", "viewer.js"];

const obfuscationOptions = {
  compact: true,
  controlFlowFlattening: false,
  deadCodeInjection: false,
  debugProtection: false,
  disableConsoleOutput: false,
  identifierNamesGenerator: "hexadecimal",
  numbersToExpressions: false,
  renameGlobals: false,
  renameProperties: false,
  selfDefending: false,
  simplify: true,
  splitStrings: false,
  stringArray: true,
  stringArrayCallsTransform: false,
  stringArrayEncoding: [],
  stringArrayIndexShift: true,
  stringArrayRotate: true,
  stringArrayShuffle: true,
  stringArrayThreshold: 0.5,
  transformObjectKeys: false,
  unicodeEscapeSequence: false,
};

async function ensureParent(filePath) {
  await mkdir(path.dirname(filePath), { recursive: true });
}

async function copyRuntimeFile(relativePath) {
  const sourcePath = path.join(projectRoot, relativePath);
  const targetPath = path.join(unpackedRoot, relativePath);
  await ensureParent(targetPath);
  await copyFile(sourcePath, targetPath);
}

async function buildJavascript(relativePath) {
  const sourcePath = path.join(projectRoot, relativePath);
  const targetPath = path.join(unpackedRoot, relativePath);
  const result = await build({
    entryPoints: [sourcePath],
    bundle: true,
    format: "iife",
    legalComments: "none",
    minify: true,
    platform: "browser",
    sourcemap: false,
    target: ["chrome110", "edge110"],
    write: false,
  });

  const bundledCode = result.outputFiles[0].text;
  const obfuscatedCode = JavaScriptObfuscator
    .obfuscate(bundledCode, obfuscationOptions)
    .getObfuscatedCode();

  await ensureParent(targetPath);
  await writeFile(targetPath, `${obfuscatedCode}\n`, "utf8");
}

async function buildCss() {
  const source = await readFile(path.join(projectRoot, "theme.css"), "utf8");
  const result = await transform(source, {
    loader: "css",
    legalComments: "none",
    minify: true,
    target: ["chrome110", "edge110"],
  });
  await writeFile(path.join(unpackedRoot, "theme.css"), result.code, "utf8");
}

async function validatePackage() {
  const manifest = JSON.parse(
    await readFile(path.join(unpackedRoot, "manifest.json"), "utf8"),
  );
  const requiredPaths = new Set();

  for (const script of manifest.content_scripts ?? []) {
    for (const file of script.js ?? []) requiredPaths.add(file);
    for (const file of script.css ?? []) requiredPaths.add(file);
  }
  for (const resourceGroup of manifest.web_accessible_resources ?? []) {
    for (const file of resourceGroup.resources ?? []) requiredPaths.add(file);
  }
  for (const file of Object.values(manifest.icons ?? {})) requiredPaths.add(file);

  for (const relativePath of requiredPaths) {
    await stat(path.join(unpackedRoot, relativePath));
  }
}

async function createZip(version) {
  const zipPath = path.join(releaseRoot, `hsu-palette-${version}.zip`);
  await rm(zipPath, { force: true });

  await new Promise((resolve, reject) => {
    const output = createWriteStream(zipPath);
    const archive = new ZipArchive({ zlib: { level: 9 } });

    output.on("close", resolve);
    output.on("error", reject);
    archive.on("error", reject);
    archive.pipe(output);
    archive.directory(unpackedRoot, false);
    archive.finalize();
  });

  return zipPath;
}

await rm(unpackedRoot, { recursive: true, force: true });
await mkdir(unpackedRoot, { recursive: true });
await Promise.all(runtimeFiles.map(copyRuntimeFile));
await Promise.all(javascriptEntries.map(buildJavascript));
await buildCss();
await validatePackage();

const manifest = JSON.parse(
  await readFile(path.join(unpackedRoot, "manifest.json"), "utf8"),
);
const zipPath = await createZip(manifest.version);
const zipInfo = await stat(zipPath);

console.log(`Built ${path.relative(projectRoot, unpackedRoot)}`);
console.log(`Packed ${path.relative(projectRoot, zipPath)} (${zipInfo.size} bytes)`);
