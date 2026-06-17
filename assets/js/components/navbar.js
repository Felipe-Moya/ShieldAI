export function initNavbar() {
  const navbar     = document.getElementById('navbar');
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('navbar-mobile-menu');
  const links      = document.querySelectorAll('.navbar__link');
  const sections   = document.querySelectorAll('section[id]');

  // ── Scroll: adiciona classe .scrolled ──
  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    highlightActiveLink();
  }

  // ── Destaca link ativo conforme seção visível ──
  function highlightActiveLink() {
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 120) {
        current = section.getAttribute('id');
      }
    });
    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  // ── Menu hamburguer ──
  function toggleMenu() {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  // ── Smooth scroll em TODOS os links âncora ──
  function smoothScrollTo(targetId) {
    const target = document.getElementById(targetId);
    if (!target) return;
    const offset = target.offsetTop - 80;
    window.scrollTo({ top: offset, behavior: 'smooth' });
    history.replaceState(null, '', window.location.pathname);
  }

  document.addEventListener('click', e => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    e.preventDefault();
    closeMenu();

    const href = link.getAttribute('href');
    if (!href || href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      history.replaceState(null, '', window.location.pathname);
      return;
    }

    smoothScrollTo(href.slice(1));
  });

  // ── Fecha ao clicar fora ──
  document.addEventListener('click', e => {
    if (!navbar.contains(e.target)) closeMenu();
  });

  // ── Fecha com ESC ──
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

  hamburger.addEventListener('click', e => {
    e.stopPropagation();
    toggleMenu();
  });

  window.addEventListener('scroll', onScroll, { passive: true });

  if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname);
  }

  onScroll();
}