export function initPricing() {
  const cards = document.querySelectorAll('.pricing-card');

  cards.forEach((card, i) => {
    card.classList.add('animate-scale');
    card.classList.add(`animate-delay-${i + 1}`);
  });
}