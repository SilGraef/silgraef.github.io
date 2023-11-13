const items = document.querySelectorAll('.item:not(:first-child)');

const options = {
  threshold: 0.6
}

function addSlideIn(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    } else[
      entry.target.classList.remove('slide-in')
    ]
  });
}

const observer = new IntersectionObserver(addSlideIn, options)

items.forEach(item => {
  observer.observe(item);
})