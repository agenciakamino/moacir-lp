/**
 * Navbar Scroll Effect - Moacir LP
 * Aplica blur e background na navbar ao scrollar
 */

(function () {
  'use strict';

  const navbar = document.getElementById('navbar');

  if (!navbar) return;

  /**
   * Handle scroll event and update navbar styles
   */
  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add(
        'bg-brand-black/80',
        'backdrop-blur-md',
        'border-white/5',
      );
      navbar.classList.remove('py-6', 'border-transparent');
      navbar.classList.add('py-4');
    } else {
      navbar.classList.remove(
        'bg-brand-black/80',
        'backdrop-blur-md',
        'border-white/5',
      );
      navbar.classList.add('py-6', 'border-transparent');
      navbar.classList.remove('py-4');
    }
  }

  // Attach scroll listener
  window.addEventListener('scroll', handleScroll);

  // Run on load in case page is already scrolled
  handleScroll();
})();
