export function enableCollapses() {
  [...document.querySelectorAll(".collapser")].forEach((collapser) => {
    const target = collapser.parentElement.querySelector(".collapse");
    collapser.addEventListener("click", (ev) => {
      ev.stopPropagation();
      target.classList.toggle("show");
      collapser.classList.toggle("showing");
    });
  });
}
