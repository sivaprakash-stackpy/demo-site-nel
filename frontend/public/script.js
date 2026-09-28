(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Cursor-following spotlight + gradient border on all interactive cards
  const spotlightCards = document.querySelectorAll('.feature-card, .service-card, .value-card, .contact-item');
  spotlightCards.forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    });
  });

  // 2. Scroll reveal fallback for browsers without CSS scroll-driven animations
  const nativeScrollAnimations = CSS.supports('animation-timeline: view()');
  if (nativeScrollAnimations || reduceMotion || !('IntersectionObserver' in window)) return;

  const targets = document.querySelectorAll(
    '.features h2, .feature-card, .cta-section h2, .cta-section p, .btn-cta, ' +
    '.services-header h1, .services-header p, .service-card, .process-section h2, .step, ' +
    '.about-header h1, .about-header p, .about-text h2, .about-text p, .stat-card, ' +
    '.values-section h2, .value-card, .contact-header h1, .contact-header p, ' +
    '.contact-form-wrapper h2, .contact-info-wrapper h2, .contact-item'
  );

  targets.forEach((el) => {
    el.classList.add('reveal');
    if (el.classList.contains('feature-card') || el.classList.contains('service-card') || 
        el.classList.contains('value-card') || el.classList.contains('step')) {
      const index = [...el.parentElement.children].indexOf(el);
      el.style.setProperty('--delay', `${(index % 3) * 0.12}s`);
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );

  targets.forEach((el) => observer.observe(el));
})();
