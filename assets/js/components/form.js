export function initForm() {
  const form       = document.getElementById('contact-form');
  const submitBtn  = document.getElementById('submit-btn');
  const successMsg = document.getElementById('form-success');

  if (!form) return;

  // ── Validação individual por campo ──
  function validateField(input) {
    const errorEl = document.getElementById(`${input.id}-error`);
    let message = '';

    if (input.required && !input.value.trim()) {
      message = 'Este campo é obrigatório.';
    } else if (input.type === 'email' && input.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value)) {
        message = 'Digite um e-mail válido.';
      }
    }

    if (errorEl) errorEl.textContent = message;
    input.classList.toggle('error', !!message);
    return !message;
  }

  // ── Valida ao sair do campo ──
  form.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.classList.contains('error')) validateField(input);
    });
  });

  // ── Submit ──
  form.addEventListener('submit', async e => {
    e.preventDefault();

    // Valida todos os campos obrigatórios
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
      if (!validateField(field)) isValid = false;
    });

    if (!isValid) return;

    // Loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    // Simula envio (substituir por fetch real)
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Sucesso
    form.reset();
    successMsg.classList.add('visible');
    submitBtn.disabled = false;
    submitBtn.innerHTML = `Enviar mensagem
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;

    // Esconde mensagem de sucesso após 5s
    setTimeout(() => successMsg.classList.remove('visible'), 5000);
  });
}