const topButton = document.getElementById("top-button");

topButton.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("scroll", (e) => {
  topButton.style.display = window.scrollY > 200 ? "block" : "none";
});
