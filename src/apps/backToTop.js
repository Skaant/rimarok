const topButtons = document.getElementsByClassName("top-button");

[...topButtons].forEach((btn) =>
  btn.addEventListener("click", () => {
    window.scrollTo(0, 0);
  })
);

window.addEventListener("scroll", () => {
  if (window.scrollY < 200) {
    if (topButtons[0].classList.contains("d-block")) {
      topButtons[0].classList.add("d-none");
      topButtons[0].classList.remove("d-block");
    }
  } else {
    if (topButtons[0].classList.contains("d-none")) {
      topButtons[0].classList.add("d-block");
      topButtons[0].classList.remove("d-none");
    }
  }
});
