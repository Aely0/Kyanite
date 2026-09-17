(function(exports) {

"use strict";

//#region plugins/kyanite_dev/index.ts
const themeReload = (event) => {
  switch (event.key) {
    case "F8": {
      debugger;
      break;
    }

    case "F9": {
      const theme = document.getElementById("kyanite");

      if (theme) {
        theme.textContent =
          `@import url("http://127.0.0.1:12010/source.css?a=${Date.now()}");`;
      }

      break;
    }

    case "F10": {
      const theme = document.getElementById("kyanite");

      if (theme) {
        theme.textContent =
          `@import url("https://aely0.github.io/Kyanite/src/source.css?a=${Date.now()}");`;
      }

      break;
    }
  }
};
const onLoad = () => {
	document.addEventListener("keydown", themeReload);
};
const onUnload = () => {
	document.removeEventListener("keydown", themeReload);
};

//#endregion
exports.onLoad = onLoad
exports.onUnload = onUnload
return exports;
})({});
