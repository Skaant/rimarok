export function toolbarDisplay() {
  const toolbar = document.getElementById("toolbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY < 200) {
      if (toolbar.classList.contains("d-block")) {
        toolbar.classList.add("d-none");
        toolbar.classList.remove("d-block");
      }
    } else if (toolbar.classList.contains("d-none")) {
      toolbar.classList.add("d-block");
      toolbar.classList.remove("d-none");
    }
  });
}