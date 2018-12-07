/*
  This script is a progressive enhancement relying on Intersection Observer API,
  browsers which support it also support ES6 so using the modern const syntax
 */
(function() {

  if (!('IntersectionObserver' in window)) return;

  const options = {
    threshold: 0.7
  };

  const IObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        target.addEventListener('transitionend', e => {
          target.style.transition = 'initial';
          IObserver.unobserve(target);
        });
        target.style.transition = 'opacity 200ms ease-out, transform 200ms ease-out';
        requestAnimationFrame(() => requestAnimationFrame(() => {
          target.style.opacity = 1;
          target.style.transform = 'initial';
        }));
      }
    });
  }, options);

  const imagesList = document.querySelectorAll('img');
  Array.prototype.forEach.call(imagesList, element => {
    element.style.opacity = 0;
    element.style.transform = 'scale(0.8)';
    IObserver.observe(element);
  });
})();