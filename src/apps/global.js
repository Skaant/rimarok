import "bootstrap/js/src/collapse";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/carousel";
import "./backToTop";
import "./contactGuards";

[...document.querySelectorAll('.collapser')]
  .forEach(collapser => {
    const target = collapser.parentElement.querySelector('.collapse')
    collapser.addEventListener(
      'click',
      () => {
        target.classList.toggle('show')
        collapser.classList.toggle('showing')
      }
    )
  })