/**
 * KARTHIKEYAN S — PORTFOLIO MAIN SCRIPT (v4)
 * Pure Vanilla JS | ES6+ Modules | Zero External Frameworks
 */

import { projectsData } from '../data/projects.js';
import { initTerminal } from './terminal.js';

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initLoadingScreen();
  initNavbar();
  initHeroRoleSwitcher();
  initHeroParallax();
  initSectionAmbientGlow();
  initScrollProgress();
  initNavPillIndicator();
  initTextMaskReveal();
  initScrollReveal();
  initProjectClipReveal();
  initProjectFiltering();
  initProjectModal();
  initSkillFiltering();
  initTerminal();
  initContactForm();
  initBackToTop();
  initKeyboardAccessibility();
});

/* ──────────────────────────────────────────────────────────────────────────
   1. LOADING SCREEN (1.2s Max Cinematic Sequence)
   ────────────────────────────────────────────────────────────────────────── */
function initLoadingScreen() {
  const screen = document.getElementById('loading-screen');
  const navbar = document.getElementById('navbar');

  if (!screen) {
    if (navbar) navbar.classList.add('navbar-loaded');
    return;
  }

  const dismissTimer = setTimeout(dismiss, 1000);

  setTimeout(() => {
    clearTimeout(dismissTimer);
    if (screen && screen.style.display !== 'none' && !screen.classList.contains('fade-out')) {
      dismiss();
    }
  }, 1300);

  function dismiss() {
    screen.classList.add('fade-out');
    if (navbar) navbar.classList.add('navbar-loaded');
    screen.addEventListener('transitionend', () => {
      screen.style.display = 'none';
    }, { once: true });
  }
}

/* ──────────────────────────────────────────────────────────────────────────
   2. HERO DYNAMIC ROLE TEXT SWITCHER
   Cycles through titles smoothly without typing jitter
   ────────────────────────────────────────────────────────────────────────── */
function initHeroRoleSwitcher() {
  const roleEl = document.getElementById('dynamic-role-text');
  if (!roleEl) return;

  const roles = [
    'JAVA FULL STACK DEVELOPER',
    'PROMPT ENGINEER',
    'AI & WEB DEVELOPER',
    'SOFTWARE ENGINEER'
  ];

  let index = 0;

  setInterval(() => {
    roleEl.classList.add('role-fade-out');

    setTimeout(() => {
      index = (index + 1) % roles.length;
      roleEl.textContent = roles[index];
      roleEl.classList.remove('role-fade-out');
      roleEl.classList.add('role-fade-in');
    }, 280);

    setTimeout(() => {
      roleEl.classList.remove('role-fade-in');
    }, 600);
  }, 3200);
}

/* ──────────────────────────────────────────────────────────────────────────
   3. HERO PARALLAX-LIKE DEPTH & EXIT TRANSITION
   ────────────────────────────────────────────────────────────────────────── */
function initHeroParallax() {
  const hero       = document.getElementById('home');
  const scrollHint = document.querySelector('.scroll-hint');
  if (!hero) return;

  let isTicking = false;

  window.addEventListener('scroll', () => {
    if (!isTicking) {
      window.requestAnimationFrame(onScroll);
      isTicking = true;
    }
  }, { passive: true });

  function onScroll() {
    isTicking = false;
    const scrollY    = window.scrollY;
    const heroHeight = hero.offsetHeight || 700;

    if (scrollHint) {
      scrollHint.classList.toggle('hidden', scrollY > 50);
    }

    if (scrollY > heroHeight + 100) return;

    const contentY    = scrollY * -0.18;
    const imgY        = scrollY * -0.28;
    const exitOpacity = Math.max(1 - (scrollY / (heroHeight * 0.75)), 0.35);

    hero.style.setProperty('--hero-parallax-content', `${contentY}px`);
    hero.style.setProperty('--hero-parallax-img', `${imgY}px`);
    hero.style.setProperty('--hero-exit-opacity', exitOpacity);
  }
}

/* ──────────────────────────────────────────────────────────────────────────
   4. SECTION AMBIENT GLOW SWITCHER
   ────────────────────────────────────────────────────────────────────────── */
function initSectionAmbientGlow() {
  const ambientBg = document.getElementById('bg-ambient');
  const sections  = document.querySelectorAll('section[id]');
  if (!ambientBg || !sections.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          ambientBg.setAttribute('data-active-section', entry.target.id);
        }
      });
    },
    { root: null, threshold: 0.25 }
  );

  sections.forEach(s => observer.observe(s));
}

/* ──────────────────────────────────────────────────────────────────────────
   5. SCROLL PROGRESS BAR
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
   6. NAVBAR & ACTIVE SECTION LINK
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

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.contains('open');
      menu.classList.toggle('open', !open);
      toggle.classList.toggle('open', !open);
      toggle.setAttribute('aria-expanded', String(!open));
    });

    links.forEach(link => link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
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
   7. NAV PILL INDICATOR
   ────────────────────────────────────────────────────────────────────────── */
let pillEl = null;

function initNavPillIndicator() {
  pillEl = document.getElementById('nav-pill');
  if (!pillEl) return;
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
   8. TEXT MASK REVEAL
   ────────────────────────────────────────────────────────────────────────── */
function initTextMaskReveal() {
  document.querySelectorAll('.section-title').forEach(title => {
    if (title.querySelector('.title-inner')) return;

    const inner = document.createElement('span');
    inner.className = 'title-inner';

    while (title.firstChild) {
      inner.appendChild(title.firstChild);
    }

    title.appendChild(inner);
  });
}

/* ──────────────────────────────────────────────────────────────────────────
   9. SCROLL REVEAL
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
          obs.unobserve(entry.target);
          updatePillPosition();
        }
      });
    },
    { root: null, rootMargin: '0px 0px -42px 0px', threshold: 0.07 }
  );

  targets.forEach(t => observer.observe(t));
}

/* ──────────────────────────────────────────────────────────────────────────
   10. PROJECT CLIP-PATH REVEAL
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
   11. INTERACTIVE PROJECT FILTERING
   Filters projects by category: ALL, WEB, JAVA, AI / IOT
   ────────────────────────────────────────────────────────────────────────── */
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn[data-filter]');
  const cards      = document.querySelectorAll('.project-card[data-category]');

  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        const match = (filter === 'all' || cat === filter);

        if (match) {
          card.style.display = 'flex';
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px) scale(0.95)';
          setTimeout(() => {
            if (card.style.opacity === '0') {
              card.style.display = 'none';
            }
          }, 300);
        }
      });
    });
  });
}

/* ──────────────────────────────────────────────────────────────────────────
   12. INTERACTIVE PROJECT DETAIL MODAL
   Populates project detail modal with verified Problem, Solution, Features
   ────────────────────────────────────────────────────────────────────────── */
function initProjectModal() {
  const modal      = document.getElementById('project-detail-modal');
  const openBtns   = document.querySelectorAll('.open-project-modal-btn');
  const closeBtns  = document.querySelectorAll('.project-modal-close');

  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project-id');
      const project = projectsData.find(p => p.id === projectId);
      if (!project) return;

      populateProjectModal(project);
      openModal(modal);
    });
  });

  closeBtns.forEach(btn => btn.addEventListener('click', () => closeModal(modal)));

  const backdrop = modal.querySelector('.modal-backdrop');
  if (backdrop) backdrop.addEventListener('click', () => closeModal(modal));
}

function populateProjectModal(project) {
  const titleEl    = document.getElementById('pmodal-title');
  const badgeEl    = document.getElementById('pmodal-badge');
  const problemEl  = document.getElementById('pmodal-problem');
  const solutionEl = document.getElementById('pmodal-solution');
  const featuresEl = document.getElementById('pmodal-features');
  const techEl     = document.getElementById('pmodal-tech');
  const contribEl  = document.getElementById('pmodal-contrib');
  const githubBtn  = document.getElementById('pmodal-github-btn');
  const demoBtn    = document.getElementById('pmodal-demo-btn');

  if (titleEl)    titleEl.textContent    = project.title;
  if (badgeEl)    badgeEl.textContent    = project.badge;
  if (problemEl)  problemEl.textContent  = project.problem;
  if (solutionEl) solutionEl.textContent = project.solution;
  if (contribEl)  contribEl.textContent  = project.myContribution;

  if (featuresEl) {
    featuresEl.innerHTML = project.features.map(f => `<li>${f}</li>`).join('');
  }

  if (techEl) {
    techEl.innerHTML = project.tech.map(t => `<span class="tag">${t}</span>`).join('');
  }

  if (githubBtn) {
    githubBtn.href = project.github;
    githubBtn.style.display = project.github ? 'inline-flex' : 'none';
  }

  if (demoBtn) {
    demoBtn.href = project.demo || '#';
    demoBtn.style.display = project.demo ? 'inline-flex' : 'none';
  }
}

/* ──────────────────────────────────────────────────────────────────────────
   13. INTERACTIVE SKILL CATEGORY FILTERING
   ────────────────────────────────────────────────────────────────────────── */
function initSkillFiltering() {
  const tabs  = document.querySelectorAll('.skill-tab-btn[data-skill-cat]');
  const cards = document.querySelectorAll('.skill-card[data-skill-category]');

  if (!tabs.length || !cards.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const cat = tab.getAttribute('data-skill-cat');

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      cards.forEach(card => {
        const cardCat = card.getAttribute('data-skill-category');
        const match   = (cat === 'all' || cardCat === cat);

        if (match) {
          card.style.display = 'block';
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px) scale(0.96)';
          setTimeout(() => {
            if (card.style.opacity === '0') {
              card.style.display = 'none';
            }
          }, 280);
        }
      });
    });
  });
}

/* ──────────────────────────────────────────────────────────────────────────
   14. CERTIFICATE MODAL
   ────────────────────────────────────────────────────────────────────────── */
window.openCertModal = function(src, caption) {
  const modal = document.getElementById('cert-modal');
  const img   = document.getElementById('modal-img');
  const cap   = document.getElementById('modal-caption');

  if (!modal || !img) return;

  img.src = src;
  img.alt = caption || 'Certificate Preview';
  if (cap) cap.textContent = caption || '';

  openModal(modal);
};

window.closeCertModal = function() {
  const modal = document.getElementById('cert-modal');
  if (modal) closeModal(modal);
};

function openModal(modal) {
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ──────────────────────────────────────────────────────────────────────────
   15. CONTACT FORM VALIDATION
   ────────────────────────────────────────────────────────────────────────── */
function initContactForm() {
  const form     = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  if (!form) return;

  const fields = [
    { id: 'name',    test: v => v.trim().length >= 2 },
    { id: 'email',   test: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) },
    { id: 'subject', test: v => v.trim().length >= 3 },
    { id: 'message', test: v => v.trim().length >= 10 }
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
      feedback.textContent = '✅ Message received! Karthikeyan will respond via email shortly.';
      feedback.style.display = 'block';
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
   16. BACK TO TOP
   ────────────────────────────────────────────────────────────────────────── */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 480);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ──────────────────────────────────────────────────────────────────────────
   17. KEYBOARD ACCESSIBILITY — ESC Key closes modals
   ────────────────────────────────────────────────────────────────────────── */
function initKeyboardAccessibility() {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal.active');
      if (activeModal) closeModal(activeModal);
    }
  });
}
