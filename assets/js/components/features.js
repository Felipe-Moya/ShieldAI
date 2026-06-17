export function initFeatures() {
  // Aplica classes de animação nos cards
  const cards = document.querySelectorAll('.feature-card');

  cards.forEach((card, i) => {
    card.classList.add('animate');
    card.classList.add(`animate-delay-${(i % 5) + 1}`);
  });
}