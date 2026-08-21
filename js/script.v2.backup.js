/**
 * KARTHIKEYAN S — PORTFOLIO PREMIUM MOTION SCRIPT
 * Pure Vanilla JS ES6+ | Zero external libraries
 *
 * Modules:
 *   1. Loading Screen — cinematic staggered dismiss
 *   2. Scroll Progress Bar — scaleX transform only
 *   3. Navbar — glassmorphism, shrink, mobile menu
 *   4. Nav Pill Indicator — smooth translateX sliding bar
 *   5. Typing Effect — cycling role text
 *   6. Text Mask Reveal — wraps .section-title in overflow:hidden
 *   7. Scroll Reveal — IntersectionObserver, single-fire unobserve
 *   8. Project Clip-Path Reveal — separate observer for images
 *   9. Certificate Modal — scale + opacity, ESC + backdrop close
 *  10. Contact Form — validation + success feedback
 *  11. Back-to-Top — fade + slide
 *  12. Keyboard Accessibility
 *
 * Performance rules:
 *   - Passive scroll listeners everywhere
 *   - IntersectionObserver unobserves after first trigger
 *   - No requestAnimationFrame loops for decoration
 *   - No mouse tracking, custom cursor, or parallax
 */

'use strict';

/* ──────────────────────────────────────────────────────────────────────────
   BOOT
   ────────────────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initLoadingScreen();
  initScrollProgress();
  initNavbar();
  initNavPillIndicator();
  initTypingEffect();
  initTextMaskReveal();
  initScrollReveal();
  initProjectClipReveal();
  initContactForm();
  initBackToTop();
  initKeyboardAccessibility();
});

/* ──────────────────────────────────────────────────────────────────────────
   1. LOADING SCREEN — cinematic sequence then dismiss at ~900ms (item 1)
   Spec: logo@200ms → name@450ms → motto@650ms → fade starts@900ms
   CSS handles the stagger via animation-delay; JS only drives dismiss timing
   ────────────────────────────────────────────────────────────────────────── */
function initLoadingScreen() {
  const screen = document.getElementById('loading-screen');
  const bar    = document.getElementById('loader-progress-bar');
  const pct    = document.getElementById('loader-percentage');

  if (!screen) return;

  // Animate progress 0→100 over 820ms then dismiss
  let progress   = 0;
  const DURATION = 820;
  const INTERVAL = 16;
  const INCREMENT = 100 / (DURATION / INTERVAL);

  const tick = setInterval(() => {
    progress = Math.min(progress + INCREMENT, 100);
    if (bar) bar.style.width = `${progress}%`;
    if (pct) pct.textContent = `${Math.floor(progress)}%`;

    if (progress >= 100) {
      clearInterval(tick);
    }
  }, INTERVAL);

  // Dismiss at 900ms — matches spec "overlay begins fading @ 900ms"
  function dismiss() {
    screen.classList.add('fade-out');
    screen.addEventListener('transitionend', () => {
      screen.style.display = 'none';
    }, { once: true });
  }

  const dismissTimer = setTimeout(dismiss, 900);

  // Safety net: max 2s — never block visitors
  setTimeout(() => {
    clearInterval(tick);
    clearTimeout(dismissTimer);
    if (screen && screen.style.display !== 'none' &&
        !screen.classList.contains('fade-out')) {
      dismiss();
    }
  }, 2000);
}

/* ──────────────────────────────────────────────────────────────────────────
   2. SCROLL PROGRESS BAR — scaleX only, no layout properties (item 22)
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
   3. NAVBAR — glassmorphism scroll + mobile slide-down menu (items 5, 6)
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

  // Mobile menu
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.contains('open');
      menu.classList.toggle('open', !open);
      toggle.classList.toggle('open', !open);
      toggle.setAttribute('aria-expanded', String(!open));
    });

    links.forEach(link => link.addEventListener('click', closeMobileMenu));
  }

  function closeMobileMenu() {
    if (!menu) return;
    menu.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function updateActiveLink() {
    const scrollPos = window.scrollY + navbar.offsetHeight + 24;
    let currentId = '';

    sections.forEach(section => {
      if (section.offsetTop <= scrollPos) currentId = section.id;
    });

    links.forEach(link => {
      const isActive = link.getAttribute('href') === `#${currentId}`;
      link.classList.toggle('active', isActive);
    });

    // Update the pill indicator position when active link changes
    updatePillPosition();
  }

  // Initial call
  updateActiveLink();
}

/* ──────────────────────────────────────────────────────────────────────────
   4. NAV PILL INDICATOR — smooth sliding bar via translateX (item 6)
   Injects #nav-pill into nav-menu, moves it with transform (not left/width)
   ────────────────────────────────────────────────────────────────────────── */
let pillEl = null;

function initNavPillIndicator() {
  const menu = document.getElementById('nav-menu');
  if (!menu) return;

  // Only show on desktop (CSS hides on mobile)
  const pill = document.createElement('span');
  pill.id = 'nav-pill';
  pill.setAttribute('aria-hidden', 'true');
  menu.appendChild(pill);
  pillEl = pill;

  // Position pill under the initially active link
  setTimeout(updatePillPosition, 100); // slight delay for layout settle
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

  // Use translateX from nav-menu left edge so no layout properties change
  const offset = linkRect.left - menuRect.left;

  pill.style.width     = `${linkRect.width}px`;
  pill.style.transform = `translateX(${offset}px)`;
  pill.style.opacity   = '1';
}

/* ──────────────────────────────────────────────────────────────────────────
   5. TYPING EFFECT — cycles through role phrases (existing feature, preserved)
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

  let phraseIdx  = 0;
  let charIdx    = 0;
  let deleting   = false;

  const TYPE_SPD   = 88;
  const DELETE_SPD = 42;
  const PAUSE_END  = 1900;
  const PAUSE_START = 280;

  function tick() {
    const phrase = phrases[phraseIdx];

    if (deleting) {
      charIdx--;
      el.textContent = phrase.substring(0, charIdx);
    } else {
      charIdx++;
      el.textContent = phrase.substring(0, charIdx);
    }

    let delay = deleting ? DELETE_SPD : TYPE_SPD;

    if (!deleting && charIdx === phrase.length) {
      deleting = true;
      delay = PAUSE_END;
    } else if (deleting && charIdx === 0) {
      deleting   = false;
      phraseIdx  = (phraseIdx + 1) % phrases.length;
      delay      = PAUSE_START;
    }

    setTimeout(tick, delay);
  }

  tick();
}

/* ──────────────────────────────────────────────────────────────────────────
   6. TEXT MASK REVEAL — wraps .section-title text in overflow:hidden (item 9)
   Injects .title-inner span; CSS transitions translateY(105%) → 0
   This creates the premium "text emerging from behind a mask" effect
   ────────────────────────────────────────────────────────────────────────── */
function initTextMaskReveal() {
  document.querySelectorAll('.section-title').forEach(title => {
    // Avoid double-wrapping
    if (title.querySelector('.title-inner')) return;

    const inner = document.createElement('span');
    inner.className = 'title-inner';

    // Move all children into the inner span
    while (title.firstChild) {
      inner.appendChild(title.firstChild);
    }

    title.appendChild(inner);
  });
}

/* ──────────────────────────────────────────────────────────────────────────
   7. SCROLL REVEAL — IntersectionObserver with single-fire unobserve (item 7)
   Premium cubic-bezier easing is applied entirely in CSS
   ────────────────────────────────────────────────────────────────────────── */
function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal-on-scroll');

  if (!('IntersectionObserver' in window)) {
    // Fallback: immediately show everything
    targets.forEach(t => t.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target); // STRICT: single-fire only
          // After section reveals, re-position nav pill
          updatePillPosition();
        }
      });
    },
    {
      root: null,
      rootMargin: '0px 0px -44px 0px',
      threshold: 0.07
    }
  );

  targets.forEach(t => observer.observe(t));
}

/* ──────────────────────────────────────────────────────────────────────────
   8. PROJECT IMAGE CLIP-PATH REVEAL (item 13)
   Separate IntersectionObserver; adds .clip-revealed to .project-img-wrapper
   CSS handles the clip-path: inset(0 0 100% 0) → inset(0 0 0 0) transition
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
    {
      root: null,
      rootMargin: '0px 0px -30px 0px',
      threshold: 0.15
    }
  );

  wrappers.forEach(w => observer.observe(w));
}

/* ──────────────────────────────────────────────────────────────────────────
   9. CERTIFICATE MODAL — scale + opacity, ESC + backdrop close (item 17)
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

  // Accessibility: focus close button
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
   10. CONTACT FORM — client-side validation + success state (item 20)
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
   11. BACK TO TOP (item 23)
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
   12. KEYBOARD ACCESSIBILITY — ESC closes modal (item 17)
   ────────────────────────────────────────────────────────────────────────── */
function initKeyboardAccessibility() {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeCertModal();
  });
}
