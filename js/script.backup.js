/**
 * KARTHIKEYAN S — PORTFOLIO INTERACTION SCRIPT
 * Pure Vanilla JS | ES6+ | Zero external libraries
 * Performance: GPU-only animations, passive scroll listeners,
 *              IntersectionObserver with single-fire unobserve
 */

'use strict';

/* ──────────────────────────────────────────────────────────────────────────
   INIT ON DOM READY
   ────────────────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initLoadingScreen();
  initNavbar();
  initTypingEffect();
  initScrollReveal();
  initContactForm();
  initBackToTop();
  initKeyboardAccessibility();
});

/* ──────────────────────────────────────────────────────────────────────────
   1. LOADING SCREEN
   Animates a progress bar from 0→100%, then fades out with a safe 2s fallback
   ────────────────────────────────────────────────────────────────────────── */
function initLoadingScreen() {
  const screen   = document.getElementById('loading-screen');
  const bar      = document.getElementById('loader-progress-bar');
  const pct      = document.getElementById('loader-percentage');

  if (!screen) return;

  let progress     = 0;
  const DURATION   = 900;   // ms for 0→100%
  const INTERVAL   = 18;    // tick interval
  const INCREMENT  = 100 / (DURATION / INTERVAL);

  const tick = setInterval(() => {
    progress = Math.min(progress + INCREMENT, 100);
    const rounded = Math.floor(progress);

    if (bar) bar.style.width = `${progress}%`;
    if (pct) pct.textContent = `${rounded}%`;

    if (progress >= 100) {
      clearInterval(tick);
      dismissLoader();
    }
  }, INTERVAL);

  function dismissLoader() {
    setTimeout(() => {
      screen.classList.add('fade-out');
      screen.addEventListener('transitionend', () => {
        screen.style.display = 'none';
      }, { once: true });
    }, 120);
  }

  // Safety net: never block the page more than 2 seconds
  setTimeout(() => {
    clearInterval(tick);
    if (screen && screen.style.display !== 'none') {
      dismissLoader();
    }
  }, 2000);
}

/* ──────────────────────────────────────────────────────────────────────────
   2. NAVBAR — scroll shrink, active-section highlight, mobile toggle
   ────────────────────────────────────────────────────────────────────────── */
function initNavbar() {
  const navbar   = document.getElementById('navbar');
  const toggle   = document.getElementById('nav-toggle');
  const menu     = document.getElementById('nav-menu');
  const links    = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], main section[id]');

  if (!navbar) return;

  /* Scroll handler — passive for best performance */
  const onScroll = () => {
    /* Glassmorphism after 40px */
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    /* Highlight active section */
    updateActiveLink();
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  /* Mobile menu */
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.contains('open');
      menu.classList.toggle('open', !open);
      toggle.classList.toggle('open', !open);
      toggle.setAttribute('aria-expanded', String(!open));
    });

    /* Close mobile menu on link click */
    links.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  function closeMobileMenu() {
    if (menu) {
      menu.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  }

  /* Active section detection based on scroll position */
  function updateActiveLink() {
    const scrollPos = window.scrollY + navbar.offsetHeight + 30;

    let currentId = '';
    sections.forEach(section => {
      if (section.offsetTop <= scrollPos) {
        currentId = section.id;
      }
    });

    links.forEach(link => {
      const href = link.getAttribute('href');
      const isActive = href === `#${currentId}`;
      link.classList.toggle('active', isActive);
    });
  }

  // Run once on load to set initial active state
  updateActiveLink();
}

/* ──────────────────────────────────────────────────────────────────────────
   3. TYPING EFFECT — cycles through role phrases with delete animation
   ────────────────────────────────────────────────────────────────────────── */
function initTypingEffect() {
  const el = document.getElementById('typing-text');
  if (!el) return;

  const phrases = [
    'Prompt Engineering',
    'Software Development',
    'Artificial Intelligence',
    'Full Stack Web Apps',
    'IoT Systems'
  ];

  let phraseIdx   = 0;
  let charIdx     = 0;
  let deleting    = false;

  const TYPE_SPEED   = 88;
  const DELETE_SPEED = 42;
  const PAUSE_END    = 1800;
  const PAUSE_START  = 280;

  function tick() {
    const phrase = phrases[phraseIdx];

    if (deleting) {
      charIdx--;
      el.textContent = phrase.substring(0, charIdx);
    } else {
      charIdx++;
      el.textContent = phrase.substring(0, charIdx);
    }

    let delay = deleting ? DELETE_SPEED : TYPE_SPEED;

    if (!deleting && charIdx === phrase.length) {
      deleting = true;
      delay = PAUSE_END;
    } else if (deleting && charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      delay = PAUSE_START;
    }

    setTimeout(tick, delay);
  }

  tick();
}

/* ──────────────────────────────────────────────────────────────────────────
   4. SCROLL REVEAL — IntersectionObserver with strict single-fire unobserve
   ────────────────────────────────────────────────────────────────────────── */
function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal-on-scroll');

  if (!('IntersectionObserver' in window)) {
    // Legacy fallback
    targets.forEach(t => t.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target); // STRICT: never re-trigger
        }
      });
    },
    {
      root: null,
      rootMargin: '0px 0px -45px 0px',
      threshold: 0.08
    }
  );

  targets.forEach(t => observer.observe(t));
}

/* ──────────────────────────────────────────────────────────────────────────
   5. CERTIFICATE MODAL — open / close with backdrop blur + scale animation
   ────────────────────────────────────────────────────────────────────────── */
function openCertModal(src, caption) {
  const modal   = document.getElementById('cert-modal');
  const img     = document.getElementById('modal-img');
  const cap     = document.getElementById('modal-caption');

  if (!modal || !img) return;

  img.src          = src;
  img.alt          = caption || 'Certificate Preview';
  if (cap) cap.textContent = caption || '';

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Focus the close button for accessibility
  const closeBtn = modal.querySelector('.modal-close-btn');
  if (closeBtn) closeBtn.focus();
}

function closeCertModal() {
  const modal = document.getElementById('cert-modal');
  if (!modal) return;

  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ──────────────────────────────────────────────────────────────────────────
   6. CONTACT FORM — client-side validation + success feedback
   ────────────────────────────────────────────────────────────────────────── */
function initContactForm() {
  const form     = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const fields = [
      { id: 'name',    validate: v => v.trim().length > 0,          msg: 'Please enter your name.' },
      { id: 'email',   validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()), msg: 'Please enter a valid email.' },
      { id: 'subject', validate: v => v.trim().length > 0,          msg: 'Please enter a subject.' },
      { id: 'message', validate: v => v.trim().length > 0,          msg: 'Please enter a message.' }
    ];

    let valid = true;

    fields.forEach(({ id, validate }) => {
      const input = document.getElementById(id);
      const errEl = document.getElementById(`${id}-error`);
      if (!input) return;

      const ok = validate(input.value);
      input.classList.toggle('invalid', !ok);
      if (errEl) errEl.style.display = ok ? 'none' : 'block';
      if (!ok) valid = false;
    });

    if (!valid) return;

    // Success state
    if (feedback) {
      feedback.className = 'form-feedback success';
      feedback.textContent = '✅ Thank you! Your message has been received. Karthikeyan will get back to you soon.';
    }

    form.reset();

    // Clear invalid states
    fields.forEach(({ id }) => {
      const input = document.getElementById(id);
      const errEl = document.getElementById(`${id}-error`);
      if (input) input.classList.remove('invalid');
      if (errEl) errEl.style.display = 'none';
    });

    // Auto-hide feedback after 5s
    setTimeout(() => {
      if (feedback) {
        feedback.style.display = 'none';
      }
    }, 5500);
  });
}

/* ──────────────────────────────────────────────────────────────────────────
   7. BACK TO TOP BUTTON
   ────────────────────────────────────────────────────────────────────────── */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 420);
  }, { passive: true });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ──────────────────────────────────────────────────────────────────────────
   8. KEYBOARD ACCESSIBILITY — Escape closes modal
   ────────────────────────────────────────────────────────────────────────── */
function initKeyboardAccessibility() {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeCertModal();
    }
  });
}
