/* ─────────────────────────────────────────────
   STATE
───────────────────────────────────────────── */
let lang = localStorage.getItem('lang') || 'de';

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
    if (el.children.length === 0) {
      el.textContent = l === 'de' ? el.dataset.de : el.dataset.en;
    }
  });

  const btn = document.getElementById('langToggle');
  btn.textContent = l === 'de' ? 'DE / EN' : 'EN / DE';

  document.documentElement.lang = l === 'de' ? 'de' : 'en';

  // Switch legal blocks if present on this page
  const enBlock = document.getElementById('en-block');
  const deBlock = document.getElementById('de-block');
  if (enBlock && deBlock) {
    enBlock.style.display = l === 'de' ? 'none' : 'block';
    deBlock.style.display = l === 'de' ? 'block' : 'none';
  }
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
const yearEl = document.querySelector('.footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();