/**
 * KARTHIKEYAN S — PORTFOLIO MAIN SCRIPT v3.0
 * Pure Vanilla JS | ES6+ Modules | Zero External Frameworks
 * 
 * Orchestrates GSAP Motion Engine, Project Case Studies, Tech Universe, and CLI
 */

import { projectsData } from '../data/projects.js';
import { initTerminal } from './terminal.js';
import {
  initGSAPEngine,
  initLoadingAndHeroSequence,
  initNavbarMotion,
  animateRoleSwap,
  initHeroParallaxAndGlows,
  initHorizontalProjectScroll,
  initTechUniverse,
  initMetricCounters,
  initSectionReveals,
  animateCardFilter,
  animateModalOpen,
  animateModalClose,
  initMicroInteractions
} from './animations.js';

'use strict';

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    initGSAPEngine();
    initLoadingAndHeroSequence();
    initNavbar();
    initNavbarMotion();
    initHeroRoleSwitcher();
    initHeroParallaxAndGlows();
    initSectionAmbientGlow();
    initTextMaskReveal();
    initTechUniverse();
    initHorizontalProjectScroll();
    initMetricCounters();
    initSectionReveals();
    initProjectFiltering();
    initProjectModal();
    initSkillFiltering();
    initTerminal();
    initContactForm();
    initBackToTop();
    initMicroInteractions();
    initKeyboardAccessibility();
  });
}

/* ──────────────────────────────────────────────────────────────────────────
   1. HERO DYNAMIC ROLE TEXT SWITCHER
   ────────────────────────────────────────────────────────────────────────── */
function initHeroRoleSwitcher() {
  const roleEl = document.getElementById('dynamic-role-text');
  if (!roleEl) return;

  const roles = [
    'AI & INTELLIGENT SYSTEMS',
    'BACKEND & MYSQL ARCHITECTURE',
    'PROMPT ENGINEERING WORKFLOWS',
    'RESPONSIVE WEB PLATFORMS'
  ];

  let index = 0;

  setInterval(() => {
    index = (index + 1) % roles.length;
    animateRoleSwap(roleEl, roles[index]);
  }, 3400);
}

/* ──────────────────────────────────────────────────────────────────────────
   2. SECTION AMBIENT GLOW SWITCHER
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
   3. NAVBAR & ACTIVE SECTION LINK (SCROLLSPY)
   ────────────────────────────────────────────────────────────────────────── */
function initNavbar() {
  const navbar   = document.getElementById('navbar');
  const toggle   = document.getElementById('nav-toggle');
  const menu     = document.getElementById('nav-menu');
  const links    = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  if (!navbar) return;

  window.addEventListener('scroll', () => {
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
    const scrollPos = window.scrollY + navbar.offsetHeight + 35;
    let currentId = '';

    sections.forEach(section => {
      if (section.offsetTop <= scrollPos) currentId = section.id;
    });

    links.forEach(link => {
      const isActive = link.getAttribute('href') === `#${currentId}`;
      link.classList.toggle('active', isActive);
    });

    if (window.updateNavPillPosition) {
      window.updateNavPillPosition();
    }
  }

  updateActiveLink();
}

/* ──────────────────────────────────────────────────────────────────────────
   4. TEXT MASK REVEAL SETUP
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
   5. INTERACTIVE PROJECT FILTERING
   ────────────────────────────────────────────────────────────────────────── */
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn[data-filter]');
  const cards      = Array.from(document.querySelectorAll('.project-slide-card[data-category]'));

  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const matchingCards = [];
      const nonMatchingCards = [];

      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          matchingCards.push(card);
        } else {
          nonMatchingCards.push(card);
        }
      });

      animateCardFilter(cards, matchingCards, nonMatchingCards, 'block');
    });
  });
}

/* ──────────────────────────────────────────────────────────────────────────
   6. INTERACTIVE SKILL CATEGORY FILTERING
   ────────────────────────────────────────────────────────────────────────── */
function initSkillFiltering() {
  const tabs  = document.querySelectorAll('.skill-tab-btn[data-skill-cat]');
  const cards = Array.from(document.querySelectorAll('.skill-card[data-skill-category]'));

  if (!tabs.length || !cards.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const cat = tab.getAttribute('data-skill-cat');

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const matchingCards = [];
      const nonMatchingCards = [];

      cards.forEach(card => {
        const cardCat = card.getAttribute('data-skill-category');
        if (cat === 'all' || cardCat === cat) {
          matchingCards.push(card);
        } else {
          nonMatchingCards.push(card);
        }
      });

      animateCardFilter(cards, matchingCards, nonMatchingCards, 'block');
    });
  });
}

/* ──────────────────────────────────────────────────────────────────────────
   7. PROJECT DEEP-DIVE CASE STUDY MODAL
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
      animateModalOpen(modal);
    });
  });

  closeBtns.forEach(btn => btn.addEventListener('click', () => animateModalClose(modal)));

  const backdrop = modal.querySelector('.modal-backdrop');
  if (backdrop) backdrop.addEventListener('click', () => animateModalClose(modal));
}

function populateProjectModal(project) {
  const titleEl    = document.getElementById('pmodal-title');
  const taglineEl  = document.getElementById('pmodal-tagline');
  const badgeEl    = document.getElementById('pmodal-badge');
  const problemEl  = document.getElementById('pmodal-problem');
  const solutionEl = document.getElementById('pmodal-solution');
  const featuresEl = document.getElementById('pmodal-features');
  const techEl     = document.getElementById('pmodal-tech');
  const contribEl  = document.getElementById('pmodal-contrib');
  const githubBtn  = document.getElementById('pmodal-github-btn');
  const demoBtn    = document.getElementById('pmodal-demo-btn');

  if (titleEl)    titleEl.textContent    = project.title;
  if (taglineEl)  taglineEl.textContent  = project.tagline || '';
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
   8. CERTIFICATE PREVIEW MODAL
   ────────────────────────────────────────────────────────────────────────── */
if (typeof window !== 'undefined') {
  window.openCertModal = function(src, caption) {
    const modal = document.getElementById('cert-modal');
    const img   = document.getElementById('modal-img');
    const cap   = document.getElementById('modal-caption');

    if (!modal || !img) return;

    img.src = src;
    img.alt = caption || 'Certificate Preview';
    if (cap) cap.textContent = caption || '';

    animateModalOpen(modal);
  };

  window.closeCertModal = function() {
    const modal = document.getElementById('cert-modal');
    if (modal) animateModalClose(modal);
  };
}

/* ──────────────────────────────────────────────────────────────────────────
   9. CONTACT FORM VALIDATION
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
      const group = input ? input.closest('.form-group') : null;
      if (!input || !group) return;

      const ok = test(input.value);
      group.classList.toggle('has-error', !ok);
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
      const group = input ? input.closest('.form-group') : null;
      if (group) group.classList.remove('has-error');
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

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ──────────────────────────────────────────────────────────────────────────
   11. KEYBOARD ACCESSIBILITY — ESC Key closes active modal
   ────────────────────────────────────────────────────────────────────────── */
function initKeyboardAccessibility() {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal.active');
      if (activeModal) animateModalClose(activeModal);
    }
  });
}
