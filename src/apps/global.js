import "bootstrap/js/src/collapse";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/carousel";
import "./backToTop";
import "./contactGuards";

function initCollapses() {
  [...document.querySelectorAll(".collapser")].forEach((collapser) => {
    const target = collapser.parentElement.querySelector(".collapse");
    collapser.addEventListener("click", (ev) => {
      ev.stopPropagation();
      target.classList.toggle("show");
      collapser.classList.toggle("showing");
    });
  });
}

if (document.readyState === "complete") {
  initCollapses();
} else {
  window.addEventListener("load", () => initCollapses());
}
