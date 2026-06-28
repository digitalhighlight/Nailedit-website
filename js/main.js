/* =============================================
   Nailedit Landing Page — Main JS
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.CmsData.load();

  applyCmsContent(data);
  initColorPanel();
  initFaq();
  initSignupForm();
  initScrollBehavior();
  initFadeIn();
  initMobileMenu();
});

/* --- Apply CMS content to the page --- */
function applyCmsContent(data) {
  // Section visibility
  const sections = {
    hero:        document.getElementById('section-hero'),
    problems:    document.getElementById('section-problems'),
    howItWorks:  document.getElementById('section-how-it-works'),
    benefits:    document.getElementById('section-benefits'),
    map:         document.getElementById('section-map'),
    faq:         document.getElementById('section-faq'),
    signupForm:  document.getElementById('sign-up-form')
  };

  Object.entries(sections).forEach(([key, el]) => {
    if (el && data.visible[key] === false) {
      el.classList.add('section-hidden');
    }
  });

  // Apply text overrides
  document.querySelectorAll('[data-cms-text]').forEach(el => {
    const key = el.getAttribute('data-cms-text');
    const val = window.CmsData.getText(key);
    if (val) el.textContent = val;
  });

  // Apply image overrides
  document.querySelectorAll('[data-cms-img]').forEach(el => {
    const key = el.getAttribute('data-cms-img');
    const url = window.CmsData.getImage(key);
    if (url) el.src = url;
  });
}

/* --- Color Panel (hero image switcher) --- */
function initColorPanel() {
  const images = {
    green: document.getElementById('hero-img-green'),
    blue:  document.getElementById('hero-img-blue'),
    dark:  document.getElementById('hero-img-dark'),
    red:   document.getElementById('hero-img-red'),
  };
  const options = document.querySelectorAll('.color-option');

  function activate(color) {
    Object.entries(images).forEach(([key, img]) => {
      if (img) img.classList.toggle('active', key === color);
    });
    options.forEach(opt => {
      const isActive = opt.dataset.color === color;
      opt.classList.toggle('active', isActive);
      opt.setAttribute('aria-pressed', isActive);
    });
  }

  activate('green');

  options.forEach(opt => {
    opt.addEventListener('click', () => activate(opt.dataset.color));
    opt.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(opt.dataset.color); }
    });
  });
}

/* --- FAQ Accordion --- */
function initFaq() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // close all
      items.forEach(i => i.classList.remove('open'));
      // open clicked if it was closed
      if (!isOpen) item.classList.add('open');
    });
  });
  // Open first item by default
  if (items.length > 0) items[1]?.classList.add('open');
}

/* --- Sign-up Form --- */
function initSignupForm() {
  const form = document.getElementById('signup-form-el');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('.btn-signup-form');
    const success = document.querySelector('.form-success');
    btn.disabled = true;
    btn.textContent = '...שולחת';

    // Simulate async (replace with real endpoint)
    await new Promise(r => setTimeout(r, 800));

    form.style.display = 'none';
    if (success) {
      success.style.display = 'block';
      success.textContent = window.CmsData.getText('signup.success');
    }
  });
}

/* --- Smooth scroll + header style --- */
function initScrollBehavior() {
  document.querySelectorAll('[data-scroll-to]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.dataset.scrollTo;
      const target = document.getElementById(targetId);
      if (target) {
        const headerH = document.getElementById('header')?.offsetHeight || 0;
        const top = target.getBoundingClientRect().top + window.scrollY - headerH;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

/* --- Fade-in on scroll --- */
function initFadeIn() {
  const els = document.querySelectorAll('.fade-in');
  if (!els.length) return;
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
    { threshold: 0.1 }
  );
  els.forEach(el => observer.observe(el));
}

/* --- Mobile menu --- */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!hamburger || !mobileMenu) return;
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
}
