const topButton = document.getElementById("top-button");

if (topButton) {
  topButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });

  window.addEventListener("scroll", () => {
    window.scrollY < 200 && topButton.classList.contains("d-none")
      ? ""
      : window.scrollY < 200 && topButton.classList.contains("d-block")
      ? topButton.classList.add("d-none") & topButton.classList.remove("d-block")
      : "";

    window.scrollY > 200 && topButton.classList.contains("d-block")
      ? ""
      : window.scrollY > 200 && topButton.classList.contains("d-none")
      ? topButton.classList.add("d-block") & topButton.classList.remove("d-none")
      : "";
  });
}
