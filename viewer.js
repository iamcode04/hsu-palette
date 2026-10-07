const LIGHT_TEXT = "#ffffff";
const DARK_TEXT = "#222222";

function isLight(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return r * 0.299 + g * 0.587 + b * 0.114 > 150;
}

function applyViewerColor(themes) {
  let style = document.getElementById("tc-style");
  if (!style) {
    style = document.createElement("style");
    style.id = "tc-style";
    document.documentElement.appendChild(style);
  }

  const course = themes?.course || {};
  const bg = course.colors?.topbar;
  if (!bg) {
    style.textContent = "";
    return;
  }

  const text = course.textColors?.topbar || (isLight(bg) ? DARK_TEXT : LIGHT_TEXT);
  const icon = isLight(text) ? "none" : "brightness(0)";
  const divider = text === DARK_TEXT ? "brightness(0)" : "none";
  style.textContent = `
    #vod_header { background-color: ${bg} !important; }
    #vod_header h1, #vod_header h1 span { color: ${text} !important; }
    #vod_header .vod_close_button img { filter: ${icon} !important; }
    #vod_header h1 span { filter: ${divider} !important; }`;
}

chrome.storage.sync.get("themes", (result) => applyViewerColor(result.themes));

chrome.storage.onChanged.addListener((changes) => {
  if (changes.themes) applyViewerColor(changes.themes.newValue);
});
