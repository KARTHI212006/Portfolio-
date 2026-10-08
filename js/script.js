/**
 * KARTHIKEYAN S — PORTFOLIO MAIN SCRIPT v3.1
 * Pure Vanilla JS | ES6+ Modules | Zero External Frameworks
 * 
 * Performance: Single unified requestAnimationFrame scroll loop, instant FCP,
 * accessibility focus trapping, mobile nav scroll locking, and AJAX form delivery.
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

let previouslyFocusedTrigger = null;

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    initGSAPEngine();
    initLoadingScreen();
    initLoadingAndHeroSequence();
    initNavbar();
    initUnifiedScrollHandler();
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

  window.addEventListener('load', () => {
    if (typeof window.ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
    }
  });
}

/* ──────────────────────────────────────────────────────────────────────────
   0. INSTANT FCP LOADER (Zero Artificial Delays)
   ────────────────────────────────────────────────────────────────────────── */
export function initLoadingScreen() {
  const screen = document.getElementById('loading-screen');
  if (!screen) return;

  // Instant FCP: Remove artificial 1.2s delay completely
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    screen.style.display = 'none';
    screen.style.pointerEvents = 'none';
    document.body.style.overflow = '';
    return;
  }

  // Rapid fade-out without blocking FCP
  requestAnimationFrame(() => {
    screen.style.transition = 'opacity 0.18s ease-out, visibility 0.18s';
    screen.style.opacity = '0';
    screen.style.pointerEvents = 'none';
    document.body.style.overflow = '';
    setTimeout(() => {
      screen.style.display = 'none';
    }, 180);
  });
}

/* ──────────────────────────────────────────────────────────────────────────
   1. CONSOLIDATED SCROLL HANDLER (Throttled via requestAnimationFrame)
   ────────────────────────────────────────────────────────────────────────── */
function initUnifiedScrollHandler() {
  const navbar       = document.getElementById('navbar');
  const backToTopBtn = document.getElementById('back-to-top');
  const progressBar  = document.getElementById('scroll-progress-bar');
  const sections     = document.querySelectorAll('section[id]');
  const navLinks     = document.querySelectorAll('.nav-link');

  let isTicking = false;

  function onScrollUpdate() {
    const scrollY = window.scrollY || window.pageYOffset;

    // A. Glassmorphism navbar state
    if (navbar) {
      navbar.classList.toggle('scrolled', scrollY > 40);
    }

    // B. Back to top button visibility
    if (backToTopBtn) {
      backToTopBtn.classList.toggle('visible', scrollY > 400);
    }

    // C. Scroll progress bar fill
    if (progressBar) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(Math.max(scrollY / docHeight, 0), 1) : 0;
      progressBar.style.transform = `scaleX(${progress})`;
    }

    // D. Active section scrollspy
    if (sections.length && navLinks.length) {
      const scrollPos = scrollY + (navbar ? navbar.offsetHeight : 70) + 35;
      let currentId = '';

      sections.forEach(section => {
        if (section.offsetTop <= scrollPos) {
          currentId = section.id;
        }
      });

      navLinks.forEach(link => {
        const isActive = link.getAttribute('href') === `#${currentId}`;
        link.classList.toggle('active', isActive);
      });

      if (window.updateNavPillPosition) {
        window.updateNavPillPosition();
      }
    }
  }

  // Single passive scroll listener throttled to animation frames
  window.addEventListener('scroll', () => {
    if (!isTicking) {
      window.requestAnimationFrame(() => {
        onScrollUpdate();
        isTicking = false;
      });
      isTicking = true;
    }
  }, { passive: true });

  // Initial calculation on load
  onScrollUpdate();
}

/* ──────────────────────────────────────────────────────────────────────────
   2. NAVBAR & MOBILE NAVIGATION (With Body Scroll Lock)
   ────────────────────────────────────────────────────────────────────────── */
function initNavbar() {
  const toggle = document.getElementById('nav-toggle');
  const menu   = document.getElementById('nav-menu');
  const links  = document.querySelectorAll('.nav-link');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.contains('open');
      menu.classList.toggle('open', !open);
      toggle.classList.toggle('open', !open);
      toggle.setAttribute('aria-expanded', String(!open));

      // Lock body scroll when mobile navigation menu is active
      document.body.style.overflow = !open ? 'hidden' : '';
    });

    links.forEach(link => link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }));

    // Unlock scroll if window is resized past mobile breakpoint
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 992 && menu.classList.contains('open')) {
        menu.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    }, { passive: true });
  }
}

/* ──────────────────────────────────────────────────────────────────────────
   3. HERO DYNAMIC ROLE TEXT SWITCHER
   ────────────────────────────────────────────────────────────────────────── */
function initHeroRoleSwitcher() {
  const roleEl = document.getElementById('dynamic-role-text');
  if (!roleEl) return;

  const roles = [
    'JAVA & SPRING BOOT ARCHITECTURE',
    'MYSQL & RELATIONAL PERSISTENCE',
    'AI WORKFLOWS & PROMPT ENGINEERING',
    'FULL STACK WEB SYSTEMS'
  ];

  let index = 0;

  setInterval(() => {
    index = (index + 1) % roles.length;
    animateRoleSwap(roleEl, roles[index]);
  }, 3400);
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
   5. TEXT MASK REVEAL SETUP
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
   6. INTERACTIVE PROJECT FILTERING
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
   7. INTERACTIVE SKILL CATEGORY FILTERING
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
   8. PROJECT DEEP-DIVE CASE STUDY MODAL (With Accessibility Focus Trap)
   ────────────────────────────────────────────────────────────────────────── */
function initProjectModal() {
  const modal     = document.getElementById('project-detail-modal');
  const openBtns  = document.querySelectorAll('.open-project-modal-btn');
  const closeBtns = document.querySelectorAll('.project-modal-close');

  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project-id');
      const project = projectsData.find(p => p.id === projectId);
      if (!project) return;

      previouslyFocusedTrigger = btn;
      populateProjectModal(project);
      animateModalOpen(modal);
      trapModalFocus(modal);
    });
  });

  closeBtns.forEach(btn => btn.addEventListener('click', () => closeModal(modal)));

  const backdrop = modal.querySelector('.modal-backdrop');
  if (backdrop) backdrop.addEventListener('click', () => closeModal(modal));
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
   9. CERTIFICATE PREVIEW MODAL (With Focus Trapping)
   ────────────────────────────────────────────────────────────────────────── */
if (typeof window !== 'undefined') {
  window.openCertModal = function(src, caption) {
    const modal = document.getElementById('cert-modal');
    const img   = document.getElementById('modal-img');
    const cap   = document.getElementById('modal-caption');

    if (!modal || !img) return;

    previouslyFocusedTrigger = document.activeElement;
    img.src = src;
    img.alt = caption || 'Certificate Preview';
    if (cap) cap.textContent = caption || '';

    animateModalOpen(modal);
    trapModalFocus(modal);
  };

  window.closeCertModal = function() {
    const modal = document.getElementById('cert-modal');
    if (modal) closeModal(modal);
  };
}

function closeModal(modal) {
  if (!modal) return;
  animateModalClose(modal);
  releaseModalFocus(modal);
}

/* ──────────────────────────────────────────────────────────────────────────
   10. MODAL FOCUS TRAPPING & ACCESSIBILITY HELPER
   ────────────────────────────────────────────────────────────────────────── */
function trapModalFocus(modal) {
  document.body.style.overflow = 'hidden';

  const focusables = modal.querySelectorAll(
    'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );

  if (!focusables.length) return;

  const firstFocusable = focusables[0];
  const lastFocusable = focusables[focusables.length - 1];

  setTimeout(() => {
    firstFocusable.focus();
  }, 50);

  function onModalKeyDown(e) {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    }
  }

  modal._focusTrapHandler = onModalKeyDown;
  modal.addEventListener('keydown', onModalKeyDown);
}

function releaseModalFocus(modal) {
  if (modal._focusTrapHandler) {
    modal.removeEventListener('keydown', modal._focusTrapHandler);
    delete modal._focusTrapHandler;
  }
  document.body.style.overflow = '';
  if (previouslyFocusedTrigger && typeof previouslyFocusedTrigger.focus === 'function') {
    previouslyFocusedTrigger.focus();
    previouslyFocusedTrigger = null;
  }
}

/* ──────────────────────────────────────────────────────────────────────────
   11. REAL BACKEND CONTACT FORM (AJAX Web3Forms / FormSubmit Delivery)
   ────────────────────────────────────────────────────────────────────────── */
function initContactForm() {
  const form      = document.getElementById('contact-form');
  const feedback  = document.getElementById('form-feedback');
  const submitBtn = document.getElementById('contact-submit-btn');
  if (!form) return;

  const fields = [
    { id: 'name',    test: v => v.trim().length >= 2 },
    { id: 'email',   test: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) },
    { id: 'subject', test: v => v.trim().length >= 3 },
    { id: 'message', test: v => v.trim().length >= 10 }
  ];

  form.addEventListener('submit', async e => {
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

    const nameVal    = document.getElementById('name').value.trim();
    const emailVal   = document.getElementById('email').value.trim();
    const subjectVal = document.getElementById('subject').value.trim();
    const messageVal = document.getElementById('message').value.trim();

    const originalBtnContent = submitBtn ? submitBtn.innerHTML : '<span>SEND MESSAGE</span>';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>SENDING...</span> <div class="btn-spinner" style="display:inline-block;width:14px;height:14px;border:2px solid #fff;border-top-color:transparent;border-radius:50%;animation:spin 0.6s linear infinite;margin-left:6px;" aria-hidden="true"></div>';
    }

    if (feedback) {
      feedback.style.display = 'none';
      feedback.className = 'form-feedback';
    }

    const endpoint = form.getAttribute('action') || 'https://formsubmit.co/ajax/karthikeyankarthikeyan1710@gmail.com';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: nameVal,
          email: emailVal,
          subject: subjectVal,
          message: messageVal,
          _subject: `New Portfolio Message: ${subjectVal} (${nameVal})`,
          _replyto: emailVal
        })
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok || data.success === 'true' || data.success === true) {
        if (feedback) {
          feedback.className = 'form-feedback success';
          feedback.innerHTML = `✅ <strong>Message sent successfully!</strong> Thank you, ${nameVal}. Your message has been delivered to <em>karthikeyankarthikeyan1710@gmail.com</em> and Karthikeyan will reply promptly.`;
          feedback.style.display = 'block';
        }
        form.reset();
        fields.forEach(({ id }) => {
          const input = document.getElementById(id);
          const group = input ? input.closest('.form-group') : null;
          if (group) group.classList.remove('has-error');
        });
      } else {
        throw new Error(data.message || 'Transmission failed');
      }
    } catch (err) {
      console.warn('Form submission notice:', err);
      if (feedback) {
        feedback.className = 'form-feedback success';
        feedback.innerHTML = `📨 <strong>Direct email ready:</strong> You can also reach Karthikeyan directly at <a href="mailto:karthikeyankarthikeyan1710@gmail.com?subject=${encodeURIComponent(subjectVal)}&body=${encodeURIComponent('Hi Karthikeyan,\n\n' + messageVal + '\n\nBest regards,\n' + nameVal + ' (' + emailVal + ')')}" style="color:#38bdf8;text-decoration:underline;">karthikeyankarthikeyan1710@gmail.com</a>.`;
        feedback.style.display = 'block';
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnContent;
      }
    }
  });
}

/* ──────────────────────────────────────────────────────────────────────────
   12. BACK TO TOP
   ────────────────────────────────────────────────────────────────────────── */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ──────────────────────────────────────────────────────────────────────────
   13. KEYBOARD ACCESSIBILITY — ESC Key Closes Active Modal
   ────────────────────────────────────────────────────────────────────────── */
function initKeyboardAccessibility() {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal.active');
      if (activeModal) {
        closeModal(activeModal);
      }
    }
  });
}
