// ── IntersectionObserver para animar elementos ao entrar na viewport ──
export function initAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  // Observa todos os elementos animáveis
  const selectors = [
    '.animate',
    '.animate-left',
    '.animate-right',
    '.animate-fade',
    '.animate-scale',
    '.section-header',
    '.feature-card',
    '.pricing-card',
    '.contact__info',
    '.contact__form-wrap',
  ];

  document.querySelectorAll(selectors.join(',')).forEach(el => {
    observer.observe(el);
  });
}