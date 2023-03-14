export function contactGuards() {
  if (
    window.location.pathname.includes("developpement-web-freelance") ||
    window.location.pathname.includes("/mentions-legales")
  ) {
    const mailButton = document.getElementById("contact-mail");
    const phoneButton = document.getElementById("contact-phone");

    [mailButton, phoneButton].forEach((btn) =>
      btn.addEventListener("click", (ev) => {
        if ((btn.href = "#")) {
          ev.preventDefault();
          if (btn === mailButton) {
            btn.textContent = "romaric.ruga@mailo.fr";
            btn.href = "mailto:romaric.ruga@mailo.fr";
          } else if (btn === phoneButton) {
            btn.textContent = "06 38 24 85 07";
            btn.href = "tel:0638248507";
          }
        }
      })
    );
  }
}
