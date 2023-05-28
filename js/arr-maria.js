/*slide top of elements 'woman'*/
const observerHoman = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-top');
    }
  });
}, {threshold: 1}); //Only show the element when all visible

Array.from(document.querySelectorAll('.card-woman')).forEach(element => {
  observerHoman.observe(element)
});


/*New project*/

/*slide left of elements 'card benefit'*/
const observerBenefit = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-left');
    }
  });
}, {threshold: 1}); //Only show the element when all visible

Array.from(document.querySelectorAll('.card-benefit-p')).forEach(element => {
  observerBenefit.observe(element);
});