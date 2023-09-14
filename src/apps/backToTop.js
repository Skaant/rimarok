export function backToTop() {
  const topButtons = document.getElementsByClassName("top-button");

  [...topButtons].forEach((btn) =>
    btn.addEventListener("click", () => {
      window.scrollTo(0, 0);
    })
  );
}
