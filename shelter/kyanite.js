(function(exports) {

"use strict";

//#region plugins/kyanite/index.ts
const onLoad = () => {
  const theme = document.getElementById("kyanite");

  if (!theme) {
    const theme = document.createElement('style');
    theme.id = 'kyanite';
    theme.textContent = `@import url("https://aely0.github.io/Kyanite/src/source.css");`;
    document.body.appendChild(theme);
  }
};

const onUnload = () => {
  const theme = document.getElementById("kyanite");

  if (theme) {
    theme.remove();
  } 
};

//#endregion
exports.onLoad = onLoad
exports.onUnload = onUnload
return exports;
})({});
