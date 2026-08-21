/**
 * KARTHIKEYAN S — PORTFOLIO MOTION SCRIPT (v3)
 * Pure Vanilla JS | ES6+ | Zero external libraries
 *
 * Modules:
 *   1. Loading Screen — cinematic stagger, dismiss @900ms
 *   2. Scroll Progress Bar — passive, scaleX only
 *   3. Navbar — glassmorphism, active section, mobile menu
 *   4. Nav Pill Indicator — smooth translateX
 *   5. Text Mask Reveal — section title overflow:hidden injection
 *   6. Scroll Reveal — IntersectionObserver, single-fire
 *   7. Project Clip-Path Reveal — separate IO observer
 *   8. Certificate Modal — scale + opacity + ESC + backdrop
 *   9. Contact Form — validation + success feedback
 *  10. Back-to-Top — fade + slide
 *  11. Keyboard Accessibility
 *
 * Performance: passive scroll listeners, unobserve on trigger,
 *              GPU-only animations, no rAF loops, no mouse effects
 */

'use strict';

/* ──────────────────────────────────────────────────────────────────────────
   BOOT — run all modules after DOM is ready
   ────────────────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initLoadingScreen();
  initScrollProgress();
  initNavbar();
  initNavPillIndicator();
  initTextMaskReveal();
  initScrollReveal();
  initProjectClipReveal();
  initContactForm();
  initBackToTop();
  initKeyboardAccessibility();
});

/* ──────────────────────────────────────────────────────────────────────────
   1. LOADING SCREEN
   CSS drives staggered entrance (logo 200ms, name 450ms, motto 650ms).
   JS drives the progress bar and dismisses at 900ms per spec.
   ────────────────────────────────────────────────────────────────────────── */
function initLoadingScreen() {
  const screen = document.getElementById('loading-screen');
  const fill   = document.getElementById('loader-progress-bar');
  const pct    = document.getElementById('loader-percentage');

  if (!screen) return;

  // Animate progress 0→100% over ~820ms
  let progress     = 0;
  const DURATION   = 820;
  const INTERVAL   = 16;
  const INCREMENT  = 100 / (DURATION / INTERVAL);

  const tick = setInterval(() => {
    progress = Math.min(progress + INCREMENT, 100);
    if (fill) fill.style.width = `${progress}%`;
    if (pct)  pct.textContent  = `${Math.floor(progress)}%`;
    if (progress >= 100) clearInterval(tick);
  }, INTERVAL);

  // Dismiss per spec: overlay fades at 900ms
  const dismissTimer = setTimeout(dismiss, 900);

  // Safety: max 2s — never block visitors
  setTimeout(() => {
    clearInterval(tick);
    clearTimeout(dismissTimer);
    if (screen && screen.style.display !== 'none' &&
        !screen.classList.contains('fade-out')) {
      dismiss();
    }
  }, 2000);

  function dismiss() {
    screen.classList.add('fade-out');
    screen.addEventListener('transitionend', () => {
      screen.style.display = 'none';
    }, { once: true });
  }
}

/* ──────────────────────────────────────────────────────────────────────────
   2. SCROLL PROGRESS BAR — scaleX only, GPU composited
   ────────────────────────────────────────────────────────────────────────── */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress-bar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight);
    bar.style.transform = `scaleX(${Math.min(Math.max(scrolled, 0), 1)})`;
  }, { passive: true });
}

/* ──────────────────────────────────────────────────────────────────────────
   3. NAVBAR — glassmorphism on scroll, active section, mobile menu
   ────────────────────────────────────────────────────────────────────────── */
function initNavbar() {
  const navbar   = document.getElementById('navbar');
  const toggle   = document.getElementById('nav-toggle');
  const menu     = document.getElementById('nav-menu');
  const links    = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    updateActiveLink();
  }, { passive: true });

  // Mobile hamburger
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.contains('open');
      menu.classList.toggle('open', !open);
      toggle.classList.toggle('open', !open);
      toggle.setAttribute('aria-expanded', String(!open));
    });

    // Close menu when any link is clicked
    links.forEach(link => link.addEventListener('click', closeMobileMenu));
  }

  function closeMobileMenu() {
    if (!menu || !toggle) return;
    menu.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function updateActiveLink() {
    const scrollPos = window.scrollY + navbar.offsetHeight + 28;
    let currentId = '';

    sections.forEach(section => {
      if (section.offsetTop <= scrollPos) currentId = section.id;
    });

    links.forEach(link => {
      const isActive = link.getAttribute('href') === `#${currentId}`;
      link.classList.toggle('active', isActive);
    });

    updatePillPosition();
  }

  updateActiveLink();
}

/* ──────────────────────────────────────────────────────────────────────────
   4. NAV PILL INDICATOR — smooth sliding highlight via translateX
   Injects a <span id="nav-pill"> and moves it with transform, not left/width.
   ────────────────────────────────────────────────────────────────────────── */
let pillEl = null;

function initNavPillIndicator() {
  const menu = document.getElementById('nav-menu');
  if (!menu) return;

  // pill already in HTML; just get reference
  pillEl = document.getElementById('nav-pill');
  if (!pillEl) return;

  // Initial position after layout settles
  setTimeout(updatePillPosition, 120);
}

function updatePillPosition() {
  const pill = pillEl;
  const menu = document.getElementById('nav-menu');
  if (!pill || !menu) return;

  const activeLink = menu.querySelector('.nav-link.active');
  if (!activeLink) {
    pill.style.opacity = '0';
    return;
  }

  const menuRect = menu.getBoundingClientRect();
  const linkRect = activeLink.getBoundingClientRect();
  const offset   = linkRect.left - menuRect.left;

  pill.style.width     = `${linkRect.width}px`;
  pill.style.transform = `translateX(${offset}px)`;
  pill.style.opacity   = '1';
}

/* ──────────────────────────────────────────────────────────────────────────
   5. TEXT MASK REVEAL — wraps .section-title content in .title-inner
   CSS applies overflow:hidden + translateY(108%)→0 transition
   Called before IntersectionObserver setup so structure is ready
   ────────────────────────────────────────────────────────────────────────── */
function initTextMaskReveal() {
  document.querySelectorAll('.section-title').forEach(title => {
    if (title.querySelector('.title-inner')) return; // skip if already wrapped

    const inner = document.createElement('span');
    inner.className = 'title-inner';

    while (title.firstChild) {
      inner.appendChild(title.firstChild);
    }

    title.appendChild(inner);
  });
}

/* ──────────────────────────────────────────────────────────────────────────
   6. SCROLL REVEAL — IntersectionObserver, single-fire unobserve
   ────────────────────────────────────────────────────────────────────────── */
function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal-on-scroll');

  if (!('IntersectionObserver' in window)) {
    targets.forEach(t => t.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target); // strict single-fire
          updatePillPosition();        // re-sync nav pill on scroll
        }
      });
    },
    {
      root: null,
      rootMargin: '0px 0px -42px 0px',
      threshold: 0.07
    }
  );

  targets.forEach(t => observer.observe(t));
}

/* ──────────────────────────────────────────────────────────────────────────
   7. PROJECT CLIP-PATH REVEAL — separate observer for project images
   Adds .clip-revealed to .project-img-wrapper; CSS transitions clip-path
   ────────────────────────────────────────────────────────────────────────── */
function initProjectClipReveal() {
  const wrappers = document.querySelectorAll('.project-img-wrapper');
  if (!wrappers.length) return;

  if (!('IntersectionObserver' in window)) {
    wrappers.forEach(w => w.classList.add('clip-revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('clip-revealed');
          obs.unobserve(entry.target);
        }
      });
    },
    { root: null, rootMargin: '0px 0px -28px 0px', threshold: 0.14 }
  );

  wrappers.forEach(w => observer.observe(w));
}

/* ──────────────────────────────────────────────────────────────────────────
   8. CERTIFICATE MODAL — scale + opacity; ESC key + backdrop close
   ────────────────────────────────────────────────────────────────────────── */
function openCertModal(src, caption) {
  const modal = document.getElementById('cert-modal');
  const img   = document.getElementById('modal-img');
  const cap   = document.getElementById('modal-caption');

  if (!modal || !img) return;

  img.src            = src;
  img.alt            = caption || 'Certificate Preview';
  if (cap) cap.textContent = caption || '';

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  const closeBtn = modal.querySelector('.modal-close-btn');
  if (closeBtn) requestAnimationFrame(() => closeBtn.focus());
}

function closeCertModal() {
  const modal = document.getElementById('cert-modal');
  if (!modal) return;

  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ──────────────────────────────────────────────────────────────────────────
   9. CONTACT FORM — validation + success state
   ────────────────────────────────────────────────────────────────────────── */
function initContactForm() {
  const form     = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  if (!form) return;

  const fields = [
    { id: 'name',    test: v => v.trim().length > 0 },
    { id: 'email',   test: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) },
    { id: 'subject', test: v => v.trim().length > 0 },
    { id: 'message', test: v => v.trim().length > 0 }
  ];

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    fields.forEach(({ id, test }) => {
      const input = document.getElementById(id);
      const errEl = document.getElementById(`${id}-error`);
      if (!input) return;

      const ok = test(input.value);
      input.classList.toggle('invalid', !ok);
      if (errEl) errEl.style.display = ok ? 'none' : 'block';
      if (!ok) valid = false;
    });

    if (!valid) return;

    if (feedback) {
      feedback.className   = 'form-feedback success';
      feedback.textContent = '✅ Thank you! Your message has been received. Karthikeyan will get back to you soon.';
    }

    form.reset();
    fields.forEach(({ id }) => {
      const input = document.getElementById(id);
      const errEl = document.getElementById(`${id}-error`);
      if (input) input.classList.remove('invalid');
      if (errEl) errEl.style.display = 'none';
    });

    setTimeout(() => {
      if (feedback) feedback.style.display = 'none';
    }, 5500);
  });
}

/* ──────────────────────────────────────────────────────────────────────────
   10. BACK TO TOP
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
   11. KEYBOARD ACCESSIBILITY — ESC closes modal
   ────────────────────────────────────────────────────────────────────────── */
function initKeyboardAccessibility() {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeCertModal();
  });
}
