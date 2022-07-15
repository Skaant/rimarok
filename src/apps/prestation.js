const contactButtons = document.querySelectorAll("#contact .links-menu .btn");
const mailButton = contactButtons[1];
const phoneButton = contactButtons[2];

[mailButton, phoneButton].forEach((btn) =>
  btn.addEventListener("click", () => {
    if (btn === mailButton) {
      btn.textContent = "romaric.ruga@mailo.fr";
      btn.href = "mailto:romaric.ruga@mailo.fr";
    } else if (btn === phoneButton) {
      btn.textContent = "06 38 24 85 07";
      btn.href = "tel:0638248507";
    }
  })
);
