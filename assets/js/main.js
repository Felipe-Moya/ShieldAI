import { initNavbar   } from './components/navbar.js';
import { initHero     } from './components/hero.js';
import { initFeatures } from './components/features.js';
import { initPricing  } from './components/pricing.js';
import { initForm     } from './components/form.js';
import { initFooter   } from './components/footer.js';
import { initAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHero();
  initFeatures();
  initPricing();
  initForm();
  initFooter();

  // Animations por último — garante que classes já foram aplicadas
  requestAnimationFrame(() => initAnimations());
});