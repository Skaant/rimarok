import "bootstrap/js/src/collapse";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/carousel";
import { backToTop } from "./backToTop";
import { enableCollapses } from "./enableCollapses";
import { contactGuards } from "./contactGuards";

let inited = false;

function init() {
  if (!inited) {
    backToTop();
    enableCollapses();
    contactGuards();
    inited = true;
  }
}

if (document.readyState === "complete") {
  init();
} else {
  window.addEventListener("load", () => init());
}
