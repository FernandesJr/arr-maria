
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('hidden-off');
    }
  });
}, {threshold: 1});

Array.from(document.querySelectorAll('.hidden')).forEach(element => {
    observer.observe(element)
});