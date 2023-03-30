import "bootstrap/js/src/collapse";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/carousel";
import { backToTop } from "./backToTop";
import { enableCollapses } from "./enableCollapses";
import { contactGuards } from "./contactGuards";

let inited = document.getElementsByTagName("body")[0].getAttribute("inited");

function init() {
  if (!inited) {
    backToTop();
    enableCollapses();
    contactGuards();
    inited = document
      .getElementsByTagName("body")[0]
      .setAttribute("inited", true);
  }
}

if (document.readyState === "complete") {
  init();
} else {
  window.addEventListener("load", () => init());
}
