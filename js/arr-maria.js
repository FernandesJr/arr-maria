/*Show opacity of elements 'beneficios'*/
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('hidden-off');
    }
  });
}, {threshold: 1}); //Only show the element when all visible

Array.from(document.querySelectorAll('.hidden')).forEach(element => {
    observer.observe(element)
});

/*slide top of elements 'to whon'*/
const observerHow = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-top');
    }
  });
}, {threshold: 1}); //Only show the element when all visible

Array.from(document.querySelectorAll('.banner-who')).forEach(element => {
  observerHow.observe(element)
});