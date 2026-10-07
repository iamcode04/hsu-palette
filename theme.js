const PANELS = ".course_box, .well, .tab-content, .thumbnail, .ubboard_container, .filemanager-container, .fp-navbar";
const PANELS_ALL = ".course_box, .course_box *, .well, .well *, .tab-content, .tab-content *, .thumbnail, .thumbnail *, .ubboard_container, .ubboard_container *, .filemanager-container, .filemanager-container *, .fp-navbar, .fp-navbar *";
const TABS = ".nav-tabs > li > a:not(.site_notices *)";
const KEEP_OWN_COLOR = ".btn, .btn *, .label:not(li), .label:not(li) *, .alert, .alert *, .pagination, .pagination *, select, option, input, textarea";

const REGIONS = [
  {
    key: "topbar",
    label: "상단바",
    selector: "nav.navbar, nav.navbar .navbar-brand",
    text: "nav.navbar .coursename h1, nav.navbar .coursename a, nav.navbar .user_department, #tb-memo-btn",
    icons: "nav.navbar a.icon-a .icon, nav.navbar a.logo",
    align: "center",
  },
  {
    key: "leftbar",
    label: "아이콘바",
    selector: "#page",
    text: "#page-lnb .left-menus > li:not(.active) > a.left-menu-link:not(:hover)",
    icons: "#page-lnb .left-menus > li:not(.active) > a.left-menu-link:not(:hover)",
    anchor: "#page-lnb",
    below: true,
  },
  {
    key: "banner",
    label: "강의 배너",
    selector: ".course-header",
    text: ".course-header .media-heading, .course-header .media-heading *",
    extra: "background-image: none !important; border-bottom-color: rgba(0, 0, 0, 0.15) !important;",
  },
  {
    key: "sidemenu",
    label: "메뉴 상자",
    selector: ".block, .block .header",
    text: ":where(.block *:not(li.expand, li.expand *, .btn, .btn *))",
    lines: ":where(.block, .block *)",
  },
  {
    key: "menuopen",
    label: "펼친 메뉴",
    selector: ".block li.expand",
    text: ".block li.expand a",
    align: "right",
  },
  {
    key: "background",
    label: "배경",
    selector: "#page-container",
    text: `:where(#page-container *:not(${PANELS_ALL}, .block, .block *, .course-header, .course-header *, .dropdown-menu, .dropdown-menu *, .modal, .modal *, ${KEEP_OWN_COLOR}))`,
    lines: ":where(#page-container, #page-container *)",
    divider: "#page-container",
    darkTab: "#page-container .btn-course-menu",
    hover: "#page-container .nav > li > a:hover, #page-container .nav > li > a:focus",
    anchor: "#page-content-wrap",
  },
  {
    key: "card",
    label: "카드",
    selector: `${PANELS}, #page .course_box li.attendance_section, .my-course-lists > li, ${TABS}`,
    text: `:where(:is(${PANELS}) *:not(.course_box:not(.course_box0) h2.main, .course_box:not(.course_box0) h2.main *, p.sname, ${KEEP_OWN_COLOR})), ${TABS}`,
    lines: `:where(${PANELS_ALL}, .my-course-lists, .my-course-lists > li)`,
    cells: `:is(${PANELS}) :is(table, thead, tbody, tfoot, tr, td)`,
    headCells: `:is(${PANELS}) :is(th, .footer)`,
    hover: ".course_box li.activity:hover",
    dim: "#page .course_box li.attendance_section.inactive",
    align: "right",
  },
  {
    key: "cardtitle",
    label: "카드 제목",
    selector: ".course_box h2.main",
    text: ".course_box h2.main",
    extra: "margin: 0 !important; padding-left: 28px !important; padding-right: 28px !important;",
  },
  {
    key: "button",
    label: "버튼",
    selector: ".btn-primary, .btn-person",
    text: ".btn-primary, .btn-person",
    anchor: ".btn-person",
    below: true,
    align: "right",
  },
  {
    key: "courselabel",
    label: "강좌 라벨",
    selector: ".label-course:not(.label-under)",
    text: ".label-course:not(.label-under)",
    outline: ".label-course.label-under",
    below: true,
  },
  {
    key: "progress",
    label: "진도 번호",
    selector: "#page li.name_text1 p.sname",
    text: "#page li.name_text1 p.sname",
    extra: "border-color: transparent !important;",
    below: true,
  },
];

const NAVBAR_HEIGHT = 68;
const MAX_FAVORITES = 10;
const LIGHT_TEXT = "#ffffff";
const DARK_TEXT = "#222222";
const GRAY_ON_LIGHT = "#5f5f68";
const GRAY_ON_DARK = "#a8a8b0";
const MY_PRESET_SLOTS = 5;

const PRESETS = [
  {
    name: "미드나잇",
    colors: {
      topbar: "#1b2333",
      leftbar: "#141a26",
      banner: "#24304a",
      sidemenu: "#1f2838",
      menuopen: "#2a3549",
      background: "#111723",
      card: "#1c2433",
      cardtitle: "#2b3a55",
      button: "#4c7dff",
      courselabel: "#3d6fd9",
      progress: "#4c7dff",
    },
  },
  {
    name: "포레스트",
    colors: {
      topbar: "#1e3a2f",
      leftbar: "#16291f",
      banner: "#2d5a45",
      sidemenu: "#1f3329",
      menuopen: "#29443a",
      background: "#142019",
      card: "#1d2e25",
      cardtitle: "#2f5242",
      button: "#3fa66b",
      courselabel: "#3a8f62",
      progress: "#3fa66b",
    },
  },
  {
    name: "와인",
    colors: {
      topbar: "#3b1f3f",
      leftbar: "#2a1530",
      banner: "#5b2a5f",
      sidemenu: "#2e1c33",
      menuopen: "#3d2645",
      background: "#1e1322",
      card: "#2b1b30",
      cardtitle: "#4e2d55",
      button: "#c2498d",
      courselabel: "#a3427c",
      progress: "#c2498d",
    },
  },
  {
    name: "차콜",
    colors: {
      topbar: "#1f1f22",
      leftbar: "#161618",
      banner: "#2a2a2e",
      sidemenu: "#222225",
      menuopen: "#2c2c30",
      background: "#141416",
      card: "#1c1c1f",
      cardtitle: "#2e2e33",
      button: "#d4a24c",
      courselabel: "#a87d34",
      progress: "#d4a24c",
    },
  },
  {
    name: "오션",
    colors: {
      topbar: "#0f2e3a",
      leftbar: "#0b222b",
      banner: "#144050",
      sidemenu: "#11303c",
      menuopen: "#173a48",
      background: "#0a1c24",
      card: "#102a35",
      cardtitle: "#19414f",
      button: "#2fa3b8",
      courselabel: "#24889a",
      progress: "#2fa3b8",
    },
  },
  {
    name: "에스프레소",
    colors: {
      topbar: "#2a211c",
      leftbar: "#1d1714",
      banner: "#3e3029",
      sidemenu: "#251d19",
      menuopen: "#32271f",
      background: "#18130f",
      card: "#221b16",
      cardtitle: "#3b2e25",
      button: "#c8915a",
      courselabel: "#a8764a",
      progress: "#c8915a",
    },
  },
  {
    name: "인디고",
    colors: {
      topbar: "#1f1c3d",
      leftbar: "#16142d",
      banner: "#2e2a5c",
      sidemenu: "#1c1a37",
      menuopen: "#28244a",
      background: "#13112a",
      card: "#1b1935",
      cardtitle: "#2e2b58",
      button: "#8b7cf6",
      courselabel: "#6d60d6",
      progress: "#8b7cf6",
    },
  },
  {
    name: "루비",
    colors: {
      topbar: "#2f1419",
      leftbar: "#200f12",
      banner: "#561c26",
      sidemenu: "#27151a",
      menuopen: "#361c22",
      background: "#1a0d10",
      card: "#251419",
      cardtitle: "#4c1d27",
      button: "#e5484d",
      courselabel: "#c23b44",
      progress: "#e5484d",
    },
  },
  {
    name: "모스",
    colors: {
      topbar: "#23281c",
      leftbar: "#191d14",
      banner: "#353d29",
      sidemenu: "#20251a",
      menuopen: "#2b3122",
      background: "#151810",
      card: "#1e2318",
      cardtitle: "#343c28",
      button: "#a3c45a",
      courselabel: "#6f8a35",
      progress: "#a3c45a",
    },
  },
  {
    name: "오닉스",
    colors: {
      topbar: "#0e0e10",
      leftbar: "#050506",
      banner: "#1a1a1d",
      sidemenu: "#111113",
      menuopen: "#1d1d20",
      background: "#08080a",
      card: "#121214",
      cardtitle: "#222226",
      button: "#f4f4f5",
      courselabel: "#a1a1aa",
      progress: "#f4f4f5",
    },
  },
  {
    name: "라벤더",
    colors: {
      topbar: "#ece6f8",
      leftbar: "#6b5b95",
      banner: "#c9b8ec",
      sidemenu: "#faf8fe",
      menuopen: "#ece6f8",
      background: "#f4f1fa",
      card: "#ffffff",
      cardtitle: "#e3d9f6",
      button: "#7b5cc4",
      courselabel: "#8e7cc3",
      progress: "#7b5cc4",
    },
  },
  {
    name: "피치",
    colors: {
      topbar: "#fde8dc",
      leftbar: "#b0684a",
      banner: "#f6c9b0",
      sidemenu: "#fffaf6",
      menuopen: "#fdeee5",
      background: "#fdf5ef",
      card: "#ffffff",
      cardtitle: "#fadccb",
      button: "#e07a50",
      courselabel: "#d98b62",
      progress: "#e07a50",
    },
  },
  {
    name: "민트",
    colors: {
      topbar: "#e3f4ee",
      leftbar: "#2f6f5e",
      banner: "#bfe6d8",
      sidemenu: "#f7fcfa",
      menuopen: "#e3f4ee",
      background: "#eef7f3",
      card: "#ffffff",
      cardtitle: "#d3eee4",
      button: "#2f9e7a",
      courselabel: "#3aa889",
      progress: "#2f9e7a",
    },
  },
  {
    name: "스카이",
    colors: {
      topbar: "#e4eefb",
      leftbar: "#3d5a80",
      banner: "#c3d8f3",
      sidemenu: "#f7faff",
      menuopen: "#e4eefb",
      background: "#eef4fc",
      card: "#ffffff",
      cardtitle: "#d6e5f8",
      button: "#3b74c4",
      courselabel: "#5a8bd0",
      progress: "#3b74c4",
    },
  },
  {
    name: "린넨",
    colors: {
      topbar: "#efebe5",
      leftbar: "#5c5650",
      banner: "#ddd5ca",
      sidemenu: "#fbfaf8",
      menuopen: "#efebe5",
      background: "#f5f2ee",
      card: "#ffffff",
      cardtitle: "#e8e2d9",
      button: "#6b6158",
      courselabel: "#8a7f74",
      progress: "#6b6158",
    },
  },
  {
    name: "로즈",
    colors: {
      topbar: "#fbe4ea",
      leftbar: "#9c4a63",
      banner: "#f4c6d3",
      sidemenu: "#fff8fa",
      menuopen: "#fbe9ee",
      background: "#fdf3f6",
      card: "#ffffff",
      cardtitle: "#f8d9e2",
      button: "#d0567a",
      courselabel: "#c9617f",
      progress: "#d0567a",
    },
  },
  {
    name: "코랄",
    colors: {
      topbar: "#ffe9e4",
      leftbar: "#b14d3b",
      banner: "#ffcfc4",
      sidemenu: "#fffaf8",
      menuopen: "#ffece7",
      background: "#fff4f1",
      card: "#ffffff",
      cardtitle: "#ffddd4",
      button: "#e8573f",
      courselabel: "#e06a55",
      progress: "#e8573f",
    },
  },
  {
    name: "레몬",
    colors: {
      topbar: "#fdf6d8",
      leftbar: "#9a7b1c",
      banner: "#f7e7a3",
      sidemenu: "#fffdf4",
      menuopen: "#fcf3d2",
      background: "#fdfaee",
      card: "#ffffff",
      cardtitle: "#f8edbf",
      button: "#c9a227",
      courselabel: "#a8891f",
      progress: "#c9a227",
    },
  },
  {
    name: "세이지",
    colors: {
      topbar: "#e8ede4",
      leftbar: "#5f7058",
      banner: "#d3dccb",
      sidemenu: "#fafbf8",
      menuopen: "#e8ede4",
      background: "#f2f5ef",
      card: "#ffffff",
      cardtitle: "#dfe6d8",
      button: "#6f8a63",
      courselabel: "#7d9671",
      progress: "#6f8a63",
    },
  },
  {
    name: "아쿠아",
    colors: {
      topbar: "#dff5f5",
      leftbar: "#2a7a7f",
      banner: "#b8e8e8",
      sidemenu: "#f6fcfc",
      menuopen: "#def3f3",
      background: "#edf8f8",
      card: "#ffffff",
      cardtitle: "#cdeeee",
      button: "#1f9aa0",
      courselabel: "#2fa8ad",
      progress: "#1f9aa0",
    },
  },
  {
    name: "페리윙클",
    colors: {
      topbar: "#e6e8fb",
      leftbar: "#4b52a3",
      banner: "#c9cdf5",
      sidemenu: "#f8f8ff",
      menuopen: "#e6e8fb",
      background: "#f1f2fd",
      card: "#ffffff",
      cardtitle: "#dadcf8",
      button: "#5b63d6",
      courselabel: "#7076da",
      progress: "#5b63d6",
    },
  },
  {
    name: "베리",
    colors: {
      topbar: "#f6e3f0",
      leftbar: "#8a3a72",
      banner: "#ecc4de",
      sidemenu: "#fdf7fb",
      menuopen: "#f6e3f0",
      background: "#faf0f7",
      card: "#ffffff",
      cardtitle: "#f0d4e7",
      button: "#b8448f",
      courselabel: "#c4609f",
      progress: "#b8448f",
    },
  },
  {
    name: "슬레이트",
    colors: {
      topbar: "#e5e9ef",
      leftbar: "#475569",
      banner: "#cbd3df",
      sidemenu: "#f8fafc",
      menuopen: "#e5e9ef",
      background: "#f1f4f8",
      card: "#ffffff",
      cardtitle: "#dce2ea",
      button: "#475569",
      courselabel: "#64748b",
      progress: "#475569",
    },
  },
  {
    name: "라떼",
    colors: {
      topbar: "#f1e7dc",
      leftbar: "#7a5a43",
      banner: "#e3cfba",
      sidemenu: "#fdfaf6",
      menuopen: "#f1e7dc",
      background: "#f8f2eb",
      card: "#ffffff",
      cardtitle: "#ead9c7",
      button: "#9a6b4b",
      courselabel: "#ad8162",
      progress: "#9a6b4b",
    },
  },
  {
    name: "클라우드",
    colors: {
      topbar: "#f4f4f5",
      leftbar: "#3f3f46",
      banner: "#e4e4e7",
      sidemenu: "#fcfcfc",
      menuopen: "#f0f0f1",
      background: "#f7f7f8",
      card: "#ffffff",
      cardtitle: "#ececee",
      button: "#27272a",
      courselabel: "#52525b",
      progress: "#27272a",
    },
  },
  {
    name: "탠저린",
    colors: {
      topbar: "#ffeedd",
      leftbar: "#b45f17",
      banner: "#ffd6ad",
      sidemenu: "#fffaf4",
      menuopen: "#fff0e0",
      background: "#fff7ef",
      card: "#ffffff",
      cardtitle: "#ffe4c7",
      button: "#e8701a",
      courselabel: "#e58a3a",
      progress: "#e8701a",
    },
  },
  {
    name: "말차",
    colors: {
      topbar: "#eef3dc",
      leftbar: "#5d7323",
      banner: "#d9e6b3",
      sidemenu: "#fbfcf5",
      menuopen: "#eef3dc",
      background: "#f6f9ec",
      card: "#ffffff",
      cardtitle: "#e3ecc6",
      button: "#6b8a24",
      courselabel: "#7f9c35",
      progress: "#6b8a24",
    },
  },
  {
    name: "버건디",
    colors: {
      topbar: "#f6efe9",
      leftbar: "#8c1d2f",
      banner: "#ead6cf",
      sidemenu: "#fdfaf7",
      menuopen: "#f6efe9",
      background: "#faf6f2",
      card: "#ffffff",
      cardtitle: "#f0e2db",
      button: "#b3243a",
      courselabel: "#c2414f",
      progress: "#b3243a",
    },
  },
  {
    name: "네이비",
    colors: {
      topbar: "#e9edf5",
      leftbar: "#1d2b4b",
      banner: "#c9d3e6",
      sidemenu: "#f8f9fc",
      menuopen: "#e9edf5",
      background: "#f3f5f9",
      card: "#ffffff",
      cardtitle: "#dde3ef",
      button: "#1f3a7a",
      courselabel: "#3a5694",
      progress: "#1f3a7a",
    },
  },
  {
    name: "테라코타",
    colors: {
      topbar: "#efe3d8",
      leftbar: "#7d3620",
      banner: "#b4583a",
      sidemenu: "#fcf8f4",
      menuopen: "#f3e7dd",
      background: "#f8f2ec",
      card: "#ffffff",
      cardtitle: "#efdccf",
      button: "#a8492b",
      courselabel: "#bf6a4a",
      progress: "#a8492b",
    },
  },
];

const SCOPE_LABELS = { main: "메인 화면", course: "강의 페이지" };

const DEFAULT_FONT = 'NanumGothic, "나눔고딕", "돋움", dotum, sans-serif';
const FONTS = [
  { key: null, name: "기본", desc: "학교에서 쓰는 나눔고딕 그대로", family: DEFAULT_FONT },
  { key: "pretendard", name: "Pretendard", desc: "또렷하고 굵기가 고른 고딕", family: '"Pretendard Variable", sans-serif' },
  { key: "jua", name: "주아", desc: "동글동글 도톰한 손글씨 느낌", family: '"Jua", sans-serif' },
  { key: "nanumsquareround", name: "나눔스퀘어라운드", desc: "모서리가 둥근 반듯한 고딕", family: '"NanumSquareRound", sans-serif' },
];
const FONT_FACES = [
  { family: "Pretendard Variable", file: "PretendardVariable.woff2", weight: "45 920" },
  { family: "Jua", file: "Jua-Regular.woff2", weight: "100 900" },
  { family: "NanumSquareRound", file: "NanumSquareRoundR.woff2", weight: "400" },
  { family: "NanumSquareRound", file: "NanumSquareRoundB.woff2", weight: "700" },
];
const FONT_KEEP =
  "pre, pre *, code, kbd, samp, .fa, [class^='fa-'], [class*=' fa-'], .glyphicon, [class^='xi-'], [class*=' xi-'], .tc-font-sample";

let scope = detectScope();
let themes = { main: { colors: {}, textColors: {} }, course: { colors: {}, textColors: {} } };
let colors = {};
let textColors = {};
let favorites = [];
let myPresets = [];
let font = null;
let selectedKey = null;
let pickerHsv = null;

function isLight(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return r * 0.299 + g * 0.587 + b * 0.114 > 150;
}

function getTextColor(region) {
  if (textColors[region.key]) return textColors[region.key];
  return isLight(colors[region.key]) ? DARK_TEXT : LIGHT_TEXT;
}

function grayFor(bg) {
  return isLight(bg) ? GRAY_ON_LIGHT : GRAY_ON_DARK;
}

function isGray(value) {
  return value === GRAY_ON_LIGHT || value === GRAY_ON_DARK;
}

function applyColors() {
  let style = document.getElementById("tc-style");
  if (!style) {
    style = document.createElement("style");
    style.id = "tc-style";
    document.documentElement.appendChild(style);
  }

  const rules = [];
  for (const region of REGIONS) {
    const bg = colors[region.key];
    if (bg) {
      rules.push(`${region.selector} { background-color: ${bg} !important; ${region.extra || ""} }`);
      if (region.lines) {
        const line = isLight(bg) ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.08)";
        rules.push(`${region.lines} { border-color: ${line} !important; }`);
      }
      if (region.hover) {
        const shade = isLight(bg) ? "rgba(0, 0, 0, 0.04)" : "rgba(255, 255, 255, 0.06)";
        rules.push(`${region.hover} { background-color: ${shade} !important; }`);
      }
      if (region.dim) {
        const shade = isLight(bg) ? "rgba(0, 0, 0, 0.04)" : "rgba(0, 0, 0, 0.22)";
        rules.push(`${region.dim} { background-image: linear-gradient(${shade}, ${shade}) !important; }`);
        rules.push(`${region.dim} > * { opacity: 0.5; }`);
      }
      if (region.cells) {
        const head = isLight(bg) ? "rgba(0, 0, 0, 0.03)" : "rgba(255, 255, 255, 0.05)";
        rules.push(`${region.cells} { background-color: transparent !important; }`);
        rules.push(`${region.headCells} { background-color: ${head} !important; }`);
      }
      if (region.divider) {
        const line = isLight(bg) ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.08)";
        rules.push(
          `${region.divider} { background-image: linear-gradient(${line}, ${line}) !important; background-size: 1px 100% !important; }`
        );
      }
      if (region.darkTab && !isLight(bg)) {
        rules.push(`${region.darkTab} { filter: invert(1) !important; opacity: 0.6; }`);
        rules.push(`${region.darkTab}:hover { opacity: 1; }`);
      }
      if (region.outline) {
        rules.push(`${region.selector} { border-color: ${bg} !important; }`);
        rules.push(
          `${region.outline} { background-color: transparent !important; border-color: ${bg} !important; color: ${bg} !important; }`
        );
      }
    }
    if (region.text && (bg || textColors[region.key])) {
      const text = getTextColor(region);
      rules.push(`${region.text} { color: ${text} !important; }`);
      if (region.icons) {
        const filter = isLight(text) ? "brightness(0) invert(1)" : "brightness(0)";
        rules.push(`${region.icons} { filter: ${filter} !important; }`);
      }
    }
  }
  style.textContent = rules.join("\n");
}

function applyFont() {
  let style = document.getElementById("tc-font-style");
  if (!style) {
    style = document.createElement("style");
    style.id = "tc-font-style";
    document.documentElement.appendChild(style);
  }

  const rules = FONT_FACES.map((face) => {
    const url = chrome.runtime.getURL(`fonts/${face.file}`);
    return `@font-face { font-family: "${face.family}"; src: url("${url}") format("woff2"); font-weight: ${face.weight}; font-display: swap; }`;
  });
  if (font) {
    const chosen = FONTS.find((f) => f.key === font);
    rules.push(`body, body *:not(${FONT_KEEP}) { font-family: ${chosen.family} !important; }`);
  }
  style.textContent = rules.join("\n");
}

function detectScope() {
  const match = document.body?.className.match(/\bcourse-(\d+)\b/);
  if (match) return match[1] === "1" ? "main" : "course";
  return /^\/(course|mod)\//.test(location.pathname) ? "course" : "main";
}

function loadScope() {
  colors = { ...themes[scope].colors };
  textColors = { ...themes[scope].textColors };
}

function saveColors() {
  themes[scope] = { colors: { ...colors }, textColors: { ...textColors } };
  chrome.storage.sync.set({ themes });
}

function saveFavorites() {
  chrome.storage.sync.set({ favorites });
}

function resetColors() {
  colors = {};
  textColors = {};
  applyColors();
  saveColors();
  exitEditMode();
}

function toHex(cssColor) {
  const nums = cssColor.match(/\d+/g);
  if (!nums || nums.length < 3 || cssColor === "rgba(0, 0, 0, 0)") return "#ffffff";
  return "#" + nums.slice(0, 3).map((n) => Number(n).toString(16).padStart(2, "0")).join("");
}

function createThemeButton() {
  if (document.getElementById("tc-fab")) return;

  const btn = document.createElement("button");
  btn.id = "tc-fab";
  const img = document.createElement("img");
  img.src = chrome.runtime.getURL("icons/fab.webp");
  img.alt = "";
  btn.appendChild(img);
  btn.title = "테마 바꾸기";
  btn.setAttribute("aria-label", "테마 바꾸기");
  btn.addEventListener("click", toggleEditMode);
  document.body.appendChild(btn);
}

function toggleEditMode() {
  if (document.getElementById("tc-toolbar")) {
    exitEditMode();
  } else {
    enterEditMode();
  }
}

function enterEditMode() {
  const toolbar = document.createElement("div");
  toolbar.id = "tc-toolbar";
  toolbar.innerHTML = `
    <span><b class="tc-scope">${SCOPE_LABELS[scope]}</b>바꿀 영역을 눌러 색을 고르세요</span>
    <button class="tc-preset-btn">프리셋</button>
    <button class="tc-font-btn">폰트</button>
    <button class="tc-reset">초기화</button>
    <button class="tc-done">완료</button>`;
  toolbar.querySelector(".tc-preset-btn").addEventListener("click", togglePresets);
  toolbar.querySelector(".tc-font-btn").addEventListener("click", toggleFonts);
  toolbar.querySelector(".tc-reset").addEventListener("click", resetColors);
  toolbar.querySelector(".tc-done").addEventListener("click", exitEditMode);
  document.body.appendChild(toolbar);
  document.addEventListener("keydown", onPageKeyDown, true);

  for (const region of REGIONS) {
    const target = document.querySelector(region.selector);
    const anchor = document.querySelector(region.anchor || region.selector);
    if (target && anchor) document.body.appendChild(createMarker(region, target, anchor));
  }
}

function exitEditMode() {
  closeFavorites();
  document.getElementById("tc-presets")?.remove();
  document.getElementById("tc-fonts")?.remove();
  document.removeEventListener("keydown", onPageKeyDown, true);
  document.getElementById("tc-toolbar")?.remove();
  document.querySelectorAll(".tc-marker").forEach((marker) => marker.remove());
}

function onPageKeyDown(e) {
  if (e.key === "Escape") closeFavorites();
}

function createMarker(region, target, anchor) {
  const marker = document.createElement("div");
  marker.className = "tc-marker";
  marker.dataset.key = region.key;
  marker.dataset.color = colors[region.key] || toHex(getComputedStyle(target).backgroundColor);

  const swatch = document.createElement("span");
  swatch.className = "tc-swatch";
  swatch.style.background = marker.dataset.color;

  const text = document.createElement("span");
  text.textContent = region.label;

  marker.addEventListener("click", () => {
    if (selectedKey === region.key) {
      closeFavorites();
    } else {
      selectRegion(region, marker);
    }
  });

  marker.append(swatch, text);
  placeMarker(marker, region, anchor);
  return marker;
}

function selectRegion(region, marker) {
  selectedKey = region.key;
  document.querySelectorAll(".tc-marker").forEach((m) => {
    m.classList.toggle("tc-selected", m.dataset.key === region.key);
  });
  openFavorites(marker);
}

function getSelectedRegion() {
  return REGIONS.find((region) => region.key === selectedKey);
}

function getSelectedMarker() {
  return document.querySelector(`.tc-marker[data-key="${selectedKey}"]`);
}

function setRegionColor(key, hex) {
  colors[key] = hex;
  if (isGray(textColors[key])) textColors[key] = grayFor(hex);
  applyColors();
  const marker = document.querySelector(`.tc-marker[data-key="${key}"]`);
  if (marker) {
    marker.dataset.color = hex;
    marker.querySelector(".tc-swatch").style.background = hex;
  }
}

function setPickerColor(hex) {
  pickerHsv = hexToHsv(hex);
  setRegionColor(selectedKey, hex);
  updatePicker();
}

function hexToHsv(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const d = max - Math.min(r, g, b);
  let h = 0;
  if (d) {
    if (max === r) h = ((g - b) / d) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
  }
  return { h: (h * 60 + 360) % 360, s: max ? d / max : 0, v: max };
}

function hsvToHex({ h, s, v }) {
  const channel = (n) => {
    const k = (n + h / 60) % 6;
    const value = v - v * s * Math.max(0, Math.min(k, 4 - k, 1));
    return Math.round(value * 255).toString(16).padStart(2, "0");
  };
  return "#" + channel(5) + channel(3) + channel(1);
}

function openFavorites(marker) {
  let panel = document.getElementById("tc-favs");
  if (!panel) {
    panel = document.createElement("div");
    panel.id = "tc-favs";
    document.body.appendChild(panel);
  }

  pickerHsv = hexToHsv(marker.dataset.color);
  renderFavorites();

  const rect = marker.getBoundingClientRect();
  const maxLeft = document.documentElement.clientWidth - panel.offsetWidth - 8;
  const left = Math.max(8, Math.min(rect.left, maxLeft));
  panel.style.top = `${rect.bottom + 8 + scrollY}px`;
  panel.style.left = `${left + scrollX}px`;
}

function closeFavorites() {
  selectedKey = null;
  pickerHsv = null;
  document.getElementById("tc-favs")?.remove();
  document.querySelectorAll(".tc-marker").forEach((m) => m.classList.remove("tc-selected"));
}

function createPicker() {
  const picker = document.createElement("div");
  picker.className = "tc-picker";

  const sv = document.createElement("div");
  sv.className = "tc-sv";
  const knob = document.createElement("div");
  knob.className = "tc-sv-knob";
  sv.appendChild(knob);

  const pickSv = (e) => {
    const rect = sv.getBoundingClientRect();
    pickerHsv.s = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    pickerHsv.v = 1 - Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height));
    setRegionColor(selectedKey, hsvToHex(pickerHsv));
    updatePicker();
  };
  sv.addEventListener("pointerdown", (e) => {
    sv.setPointerCapture(e.pointerId);
    pickSv(e);
    sv.addEventListener("pointermove", pickSv);
  });
  sv.addEventListener("pointerup", () => {
    sv.removeEventListener("pointermove", pickSv);
    saveColors();
  });

  const row = document.createElement("div");
  row.className = "tc-picker-row";

  if (window.EyeDropper) {
    const drop = document.createElement("button");
    drop.className = "tc-eyedrop";
    drop.title = "화면에서 색 고르기";
    drop.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="m2 22 1-1h3l9-9"/><path d="M3 21v-3l9-9"/><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"/>
      </svg>`;
    drop.addEventListener("click", async () => {
      try {
        const result = await new EyeDropper().open();
        setPickerColor(result.sRGBHex);
        saveColors();
      } catch {}
    });
    row.appendChild(drop);
  }

  const preview = document.createElement("span");
  preview.className = "tc-preview";

  const hue = document.createElement("input");
  hue.type = "range";
  hue.className = "tc-hue";
  hue.min = "0";
  hue.max = "360";
  hue.addEventListener("input", () => {
    pickerHsv.h = Number(hue.value);
    setRegionColor(selectedKey, hsvToHex(pickerHsv));
    updatePicker();
  });
  hue.addEventListener("change", saveColors);

  row.append(preview, hue);

  const hex = document.createElement("input");
  hex.type = "text";
  hex.className = "tc-hex";
  hex.maxLength = 7;
  hex.spellcheck = false;
  hex.addEventListener("change", () => {
    const value = hex.value.trim().replace(/^#?/, "#").toLowerCase();
    if (/^#[0-9a-f]{6}$/.test(value)) {
      setPickerColor(value);
      saveColors();
    } else {
      updatePicker();
    }
  });

  picker.append(sv, row, hex);
  return picker;
}

function updatePicker() {
  const panel = document.getElementById("tc-favs");
  if (!panel || !pickerHsv) return;
  const hex = hsvToHex(pickerHsv);
  panel.querySelector(".tc-sv").style.backgroundColor = hsvToHex({ h: pickerHsv.h, s: 1, v: 1 });
  const knob = panel.querySelector(".tc-sv-knob");
  knob.style.left = `${pickerHsv.s * 100}%`;
  knob.style.top = `${(1 - pickerHsv.v) * 100}%`;
  panel.querySelector(".tc-preview").style.background = hex;
  panel.querySelector(".tc-hue").value = String(Math.round(pickerHsv.h));
  const hexInput = panel.querySelector(".tc-hex");
  if (document.activeElement !== hexInput) hexInput.value = hex;
}

function renderFavorites() {
  const panel = document.getElementById("tc-favs");
  if (!panel) return;
  panel.textContent = "";

  panel.appendChild(createPicker());

  const region = getSelectedRegion();
  if (region?.text) panel.appendChild(createTextChoices(region));

  const title = document.createElement("div");
  title.className = "tc-favs-title";
  title.textContent = "즐겨찾기";

  const list = document.createElement("div");
  list.className = "tc-favs-list";
  for (const color of favorites) {
    const item = document.createElement("div");
    item.className = "tc-fav-item";

    const swatch = document.createElement("button");
    swatch.className = "tc-fav";
    swatch.style.background = color;
    swatch.title = color;
    swatch.addEventListener("click", () => applyFavorite(color));

    const del = document.createElement("button");
    del.className = "tc-fav-del";
    del.textContent = "×";
    del.title = "삭제";
    del.addEventListener("click", () => removeFavorite(color));

    item.append(swatch, del);
    list.appendChild(item);
  }
  if (favorites.length === 0) list.textContent = "저장한 색이 없어요";

  const add = document.createElement("button");
  add.className = "tc-favs-add";
  add.textContent = "+ 지금 색 저장";
  add.addEventListener("click", addFavorite);

  panel.append(title, list, add);
  updatePicker();
}

function createTextChoices(region) {
  const row = document.createElement("div");
  row.className = "tc-text-row";

  const label = document.createElement("span");
  label.className = "tc-favs-title";
  label.textContent = "글자색";
  row.appendChild(label);

  const choices = [
    { name: "자동", value: null },
    { name: "흰색", value: LIGHT_TEXT },
    { name: "검정", value: DARK_TEXT },
    { name: "회색", value: "gray" },
  ];
  for (const choice of choices) {
    const btn = document.createElement("button");
    btn.className = "tc-text-choice";
    btn.textContent = choice.name;
    const current = textColors[region.key] || null;
    btn.classList.toggle("tc-active", choice.value === "gray" ? isGray(current) : current === choice.value);
    btn.addEventListener("click", () => {
      if (choice.value === "gray") {
        textColors[region.key] = grayFor(getSelectedMarker().dataset.color);
      } else if (choice.value) {
        textColors[region.key] = choice.value;
      } else {
        delete textColors[region.key];
      }
      applyColors();
      saveColors();
      renderFavorites();
    });
    row.appendChild(btn);
  }
  return row;
}

function addFavorite() {
  const marker = getSelectedMarker();
  if (!marker) return;
  const color = marker.dataset.color;
  favorites = [color, ...favorites.filter((c) => c !== color)].slice(0, MAX_FAVORITES);
  saveFavorites();
  renderFavorites();
}

function applyFavorite(color) {
  if (!selectedKey) return;
  setPickerColor(color);
  saveColors();
}

function removeFavorite(color) {
  favorites = favorites.filter((c) => c !== color);
  saveFavorites();
  renderFavorites();
}

function togglePresets() {
  document.getElementById("tc-fonts")?.remove();
  const existing = document.getElementById("tc-presets");
  if (existing) {
    existing.remove();
    return;
  }
  const panel = document.createElement("div");
  panel.id = "tc-presets";
  document.body.appendChild(panel);
  renderPresets();
}

function renderPresets() {
  const panel = document.getElementById("tc-presets");
  if (!panel) return;
  panel.textContent = "";

  const recommended = document.createElement("div");
  recommended.className = "tc-favs-title";
  recommended.textContent = "추천 프리셋";
  const builtIn = document.createElement("div");
  builtIn.className = "tc-preset-list";
  PRESETS.forEach((preset) => builtIn.appendChild(createPresetCard(preset)));

  const mine = document.createElement("div");
  mine.className = "tc-favs-title";
  mine.textContent = "내 프리셋";
  const myList = document.createElement("div");
  myList.className = "tc-preset-list";
  for (let i = 0; i < MY_PRESET_SLOTS; i++) {
    myList.appendChild(myPresets[i] ? createPresetCard(myPresets[i], i) : createEmptySlot(i));
  }

  panel.append(recommended, builtIn, mine, myList);
}

function createPresetCard(preset, slot) {
  const card = document.createElement("div");
  card.className = "tc-preset";

  const button = document.createElement("button");
  button.className = "tc-preset-apply";
  button.addEventListener("click", () => applyPreset(preset));

  const preview = document.createElement("span");
  preview.className = "tc-preset-preview";
  for (const key of ["topbar", "background", "card", "button"]) {
    const dot = document.createElement("span");
    dot.style.background = preset.colors[key] || "#ffffff";
    preview.appendChild(dot);
  }

  const name = document.createElement("span");
  name.textContent = preset.name;

  button.append(preview, name);
  card.appendChild(button);

  if (slot !== undefined) {
    const del = document.createElement("button");
    del.className = "tc-fav-del";
    del.textContent = "×";
    del.title = "삭제";
    del.addEventListener("click", () => {
      myPresets[slot] = null;
      saveMyPresets();
      renderPresets();
    });
    card.appendChild(del);
  }
  return card;
}

function createEmptySlot(slot) {
  const button = document.createElement("button");
  button.className = "tc-preset tc-preset-empty";
  button.textContent = "+ 지금 테마 저장";
  button.addEventListener("click", () => {
    myPresets[slot] = { name: `내 테마 ${slot + 1}`, colors: { ...colors }, textColors: { ...textColors } };
    saveMyPresets();
    renderPresets();
  });
  return button;
}

function applyPreset(preset) {
  colors = { ...preset.colors };
  textColors = { ...(preset.textColors || {}) };
  applyColors();
  saveColors();
  closeFavorites();
  refreshMarkers();
}

function refreshMarkers() {
  for (const marker of document.querySelectorAll(".tc-marker")) {
    const region = REGIONS.find((r) => r.key === marker.dataset.key);
    const target = document.querySelector(region.selector);
    marker.dataset.color = colors[region.key] || toHex(getComputedStyle(target).backgroundColor);
    marker.querySelector(".tc-swatch").style.background = marker.dataset.color;
  }
}

function saveMyPresets() {
  chrome.storage.sync.set({ myPresets });
}

function toggleFonts() {
  document.getElementById("tc-presets")?.remove();
  const existing = document.getElementById("tc-fonts");
  if (existing) {
    existing.remove();
    return;
  }
  const panel = document.createElement("div");
  panel.id = "tc-fonts";
  document.body.appendChild(panel);
  renderFonts();
}

function renderFonts() {
  const panel = document.getElementById("tc-fonts");
  if (!panel) return;
  panel.textContent = "";

  const title = document.createElement("div");
  title.className = "tc-favs-title";
  title.textContent = "폰트";
  const note = document.createElement("p");
  note.className = "tc-font-note";
  note.textContent = "메인 화면과 강의 페이지에 함께 적용돼요";

  const list = document.createElement("div");
  list.className = "tc-font-list";
  for (const option of FONTS) {
    const button = document.createElement("button");
    button.className = "tc-font-option";
    button.classList.toggle("tc-active", option.key === font);
    button.innerHTML = `
      <span class="tc-font-core">
        <span class="tc-font-sample">6주차 강의자료 Aa 123</span>
        <span class="tc-font-name"></span>
        <span class="tc-font-badge">사용 중</span>
        <span class="tc-font-desc"></span>
      </span>`;
    button.querySelector(".tc-font-sample").style.fontFamily = option.family;
    button.querySelector(".tc-font-name").textContent = option.name;
    button.querySelector(".tc-font-desc").textContent = option.desc;
    button.addEventListener("click", () => {
      font = option.key;
      if (font) {
        chrome.storage.sync.set({ font });
      } else {
        chrome.storage.sync.remove("font");
      }
      applyFont();
      renderFonts();
    });
    list.appendChild(button);
  }

  panel.append(title, note, list);
}

function isFixed(el) {
  for (let node = el; node && node !== document.body; node = node.parentElement) {
    if (getComputedStyle(node).position === "fixed") return true;
  }
  return false;
}

function placeMarker(marker, region, anchor) {
  const rect = anchor.getBoundingClientRect();
  const align = region.align || "left";
  const fixed = isFixed(anchor);
  const pageX = fixed ? 0 : scrollX;
  const pageY = fixed ? 0 : scrollY;

  let top = (region.below ? rect.bottom + 8 : rect.top + 8) + pageY;
  if (!fixed) top = Math.max(top, NAVBAR_HEIGHT + 8);
  const left = { left: rect.left + 8, right: rect.right - 8, center: rect.left + rect.width / 2 }[align] + pageX;

  marker.style.top = `${top}px`;
  marker.style.left = `${left}px`;
  marker.style.transform = { left: "none", right: "translateX(-100%)", center: "translateX(-50%)" }[align];
}

chrome.storage.sync.get(["themes", "colors", "textColors", "favorites", "myPresets", "font"], (result) => {
  if (result.themes) {
    themes = result.themes;
  } else {
    const old = { colors: result.colors || {}, textColors: result.textColors || {} };
    themes = { main: old, course: JSON.parse(JSON.stringify(old)) };
    chrome.storage.sync.set({ themes });
    chrome.storage.sync.remove(["colors", "textColors"]);
  }
  favorites = result.favorites || [];
  myPresets = result.myPresets || [];
  font = result.font || null;
  loadScope();
  applyColors();
  applyFont();
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.themes) {
    themes = changes.themes.newValue || themes;
    loadScope();
    applyColors();
  }
  if (changes.favorites) {
    favorites = changes.favorites.newValue || [];
    renderFavorites();
  }
  if (changes.myPresets) {
    myPresets = changes.myPresets.newValue || [];
    renderPresets();
  }
  if (changes.font) {
    font = changes.font.newValue || null;
    applyFont();
    renderFonts();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const actual = detectScope();
  if (actual !== scope) {
    scope = actual;
    loadScope();
    applyColors();
  }
  createThemeButton();
});
