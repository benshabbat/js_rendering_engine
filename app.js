import render from "./render.js";
document.onreadystatechange = function (e) {
  if (document.readyState === "complete") {
    console.log("im ready");
    render();
  }
};
