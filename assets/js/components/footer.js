export function initFooter() {
  // Atualiza ano do copyright dinamicamente
  const yearEl = document.querySelector('.footer__bottom span');
  if (yearEl) {
    const year = new Date().getFullYear();
    yearEl.textContent = `© ${year} ShieldAI. Todos os direitos reservados.`;
  }
}