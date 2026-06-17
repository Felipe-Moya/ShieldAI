export function initHero() {
  animateTerminal();
}

// ── Reinicia animação do terminal em loop ──
function animateTerminal() {
  const logs = document.querySelectorAll('.hero__log');
  if (!logs.length) return;

  // Remove animação, força reflow e reaplica para reiniciar
  function restartAnimation() {
    logs.forEach(log => {
      log.style.animation = 'none';
      log.style.opacity   = '0';
    });

    // Força reflow
    void logs[0].offsetWidth;

    logs.forEach((log, i) => {
      log.style.animation = '';
      log.style.animationDelay = `${0.5 + i * 0.2}s`;
    });
  }

  // Reinicia a cada 8 segundos
  restartAnimation();
  setInterval(restartAnimation, 8000);
}