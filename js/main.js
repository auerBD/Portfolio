/* ─────────────────────────────────────────────
   STATE
───────────────────────────────────────────── */
let lang = localStorage.getItem('lang') || 'en';

/* ─────────────────────────────────────────────
   NAV SCROLL
───────────────────────────────────────────── */
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ─────────────────────────────────────────────
   LANGUAGE TOGGLE
───────────────────────────────────────────── */
function applyLang(l) {
  lang = l;
  localStorage.setItem('lang', l);

  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = l === 'de' ? el.dataset.de : el.dataset.en;
  });

  const btn = document.getElementById('langToggle');
  btn.textContent = l === 'de' ? 'DE / EN' : 'EN / DE';

  document.documentElement.lang = l === 'de' ? 'de' : 'en';
}

document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(lang === 'en' ? 'de' : 'en');
});

// Apply on load
applyLang(lang);

/* ─────────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────────── */
const revealEls = document.querySelectorAll(
  '.section-header, .project-card, .skill-group, .contact-inner, .footer'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => observer.observe(el));

/* ─────────────────────────────────────────────
   FOOTER YEAR
───────────────────────────────────────────── */
document.querySelector('.footer-year').textContent = new Date().getFullYear();
