/**
 * KARTHIKEYAN S — PORTFOLIO MAIN SCRIPT (v4)
 * Pure Vanilla JS | ES6+ Modules | Zero External Frameworks
 */

import { projectsData } from '../data/projects.js';
import { initTerminal } from './terminal.js';

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initGSAPAnimations();
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
   GSAP REGISTRATION & ANIMATION ENGINE INITIALIZATION
   ────────────────────────────────────────────────────────────────────────── */
let lenis = null;

function initGSAPAnimations() {
  if (typeof window.gsap !== 'undefined') {
    hasGSAP = true;
    if (typeof window.ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
  }

  if (typeof window.Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    if (hasGSAP && typeof window.ScrollTrigger !== 'undefined') {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    } else {
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  }
}

/* ──────────────────────────────────────────────────────────────────────────
   1. LOADING SCREEN & HERO CHOREOGRAPHED TIMELINE
   ────────────────────────────────────────────────────────────────────────── */
function initLoadingScreen() {
  const screen = document.getElementById('loading-screen');
  const navbar = document.getElementById('navbar');

  if (!screen) {
    if (navbar) navbar.classList.add('navbar-loaded');
    triggerHeroEntrance();
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
      triggerHeroEntrance();
    }, { once: true });
  }
}

function triggerHeroEntrance() {
  if (!hasGSAP) return;

  const mm = gsap.matchMedia();
  mm.add("(prefers-reduced-motion: no-preference)", () => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });

    tl.fromTo('.hero-badge-row', 
      { y: -20, autoAlpha: 0 }, 
      { y: 0, autoAlpha: 1, duration: 0.6 }
    )
    .fromTo('.hero-greeting', 
      { y: 15, autoAlpha: 0 }, 
      { y: 0, autoAlpha: 1, duration: 0.5 }, 
      '-=0.4'
    )
    .fromTo('.hero-name-mask', 
      { y: 30, autoAlpha: 0 }, 
      { y: 0, autoAlpha: 1, duration: 0.7, ease: 'power4.out' }, 
      '-=0.3'
    )
    .fromTo('.hero-title-line', 
      { y: 20, autoAlpha: 0 }, 
      { y: 0, autoAlpha: 1, duration: 0.6 }, 
      '-=0.4'
    )
    .fromTo('.hero-bio', 
      { y: 20, autoAlpha: 0 }, 
      { y: 0, autoAlpha: 1, duration: 0.6 }, 
      '-=0.4'
    )
    .fromTo('.hero-actions .btn', 
      { y: 25, autoAlpha: 0 }, 
      { y: 0, autoAlpha: 1, stagger: 0.08, ease: 'back.out(1.7)' }, 
      '-=0.3'
    )
    .fromTo('.hero-socials .social-link', 
      { scale: 0.5, autoAlpha: 0 }, 
      { scale: 1, autoAlpha: 1, stagger: 0.06, ease: 'back.out(2)' }, 
      '-=0.4'
    )
    .fromTo('.profile-frame', 
      { scale: 0.88, autoAlpha: 0 }, 
      { scale: 1, autoAlpha: 1, duration: 0.9, ease: 'back.out(1.4)' }, 
      '-=0.8'
    )
    .fromTo('.float-badge', 
      { scale: 0.7, autoAlpha: 0 }, 
      { scale: 1, autoAlpha: 1, stagger: 0.12, ease: 'back.out(1.8)' }, 
      '-=0.5'
    );

    // Continuous floating badges animation
    gsap.to('.float-badge', {
      y: '-=10',
      duration: 2.6,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.4
    });
  });
}

/* ──────────────────────────────────────────────────────────────────────────
   2. HERO DYNAMIC ROLE TEXT SWITCHER (GSAP Tween)
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
    if (hasGSAP) {
      gsap.to(roleEl, {
        y: -12,
        autoAlpha: 0,
        duration: 0.28,
        ease: 'power2.in',
        onComplete: () => {
          index = (index + 1) % roles.length;
          roleEl.textContent = roles[index];
          gsap.fromTo(roleEl,
            { y: 12, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.42, ease: 'power2.out' }
          );
        }
      });
    } else {
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
    }
  }, 3200);
}

/* ──────────────────────────────────────────────────────────────────────────
   3. HERO 60FPS MOUSE PARALLAX (GSAP quickTo) & EXIT TRANSITION
   ────────────────────────────────────────────────────────────────────────── */
function initHeroParallax() {
  const hero        = document.getElementById('home');
  const profileWrap = document.querySelector('.hero-profile-wrap');
  const profileFrame= document.querySelector('.profile-frame');
  const scrollHint  = document.querySelector('.scroll-hint');
  if (!hero) return;

  if (hasGSAP && profileWrap && profileFrame) {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 769px) and (prefers-reduced-motion: no-preference)", () => {
      const xTo    = gsap.quickTo(profileFrame, 'x', { duration: 0.45, ease: 'power3.out' });
      const yTo    = gsap.quickTo(profileFrame, 'y', { duration: 0.45, ease: 'power3.out' });
      const rotXTo = gsap.quickTo(profileFrame, 'rotationX', { duration: 0.45, ease: 'power3.out' });
      const rotYTo = gsap.quickTo(profileFrame, 'rotationY', { duration: 0.45, ease: 'power3.out' });

      hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const relX = e.clientX - rect.left - rect.width / 2;
        const relY = e.clientY - rect.top - rect.height / 2;

        xTo(relX * 0.03);
        yTo(relY * 0.03);
        rotXTo(relY * -0.025);
        rotYTo(relX * 0.025);
      });

      hero.addEventListener('mouseleave', () => {
        xTo(0);
        yTo(0);
        rotXTo(0);
        rotYTo(0);
      });
    });
  }

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
   5. SCROLL PROGRESS BAR (GSAP ScrollTrigger Scrub)
   ────────────────────────────────────────────────────────────────────────── */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress-bar');
  if (!bar) return;

  if (hasGSAP && typeof window.ScrollTrigger !== 'undefined') {
    gsap.to(bar, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.1
      }
    });
  } else {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      bar.style.transform = `scaleX(${Math.min(Math.max(scrolled, 0), 1)})`;
    }, { passive: true });
  }
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

      if (hasGSAP && !open) {
        gsap.fromTo(links,
          { y: -15, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.35, stagger: 0.04, ease: 'power2.out' }
        );
      }
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

  if (hasGSAP) {
    gsap.to(pill, {
      width: linkRect.width,
      x: offset,
      autoAlpha: 1,
      duration: 0.35,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  } else {
    pill.style.width     = `${linkRect.width}px`;
    pill.style.transform = `translateX(${offset}px)`;
    pill.style.opacity   = '1';
  }
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
   9. DISTINCT SECTION-BY-SECTION MOTION ENGINE (GSAP & ScrollTrigger)
   ────────────────────────────────────────────────────────────────────────── */
function initScrollReveal() {
  initMagneticButtons();

  if (hasGSAP && typeof window.ScrollTrigger !== 'undefined') {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // 0. LARGE BACKDROP TYPOGRAPHY HORIZONTAL SCRUB
      document.querySelectorAll('.section-backdrop-text').forEach((backdrop, idx) => {
        const dir = idx % 2 === 0 ? -1 : 1;
        gsap.fromTo(backdrop,
          { xPercent: dir * 18 },
          {
            xPercent: dir * -18,
            ease: 'none',
            scrollTrigger: {
              trigger: backdrop.parentElement,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1
            }
          }
        );
      });

      // 1. SECTION HEADERS: Eyebrow down, Title mask up, Line expand
      document.querySelectorAll('.section-header').forEach(header => {
        const eyebrow = header.querySelector('.section-eyebrow');
        const titleInner = header.querySelector('.title-inner');
        const line = header.querySelector('.heading-line');
        const subtitle = header.querySelector('.section-subtitle');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: header,
            start: 'top 88%',
            toggleActions: 'play none none none'
          }
        });

        if (eyebrow) tl.fromTo(eyebrow, { y: -18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5, ease: 'power2.out' });
        if (titleInner) tl.fromTo(titleInner, { y: 35, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.65, ease: 'power3.out' }, '-=0.35');
        if (line) tl.fromTo(line, { scaleX: 0, autoAlpha: 0 }, { scaleX: 1, autoAlpha: 1, duration: 0.6, ease: 'power2.inOut', transformOrigin: 'center center' }, '-=0.4');
        if (subtitle) tl.fromTo(subtitle, { y: 15, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.55, ease: 'power2.out' }, '-=0.35');
      });

      // 2. TERMINAL SECTION: Card slide up + dots elastic pop
      const termCard = document.querySelector('.terminal-card');
      if (termCard) {
        gsap.timeline({
          scrollTrigger: { trigger: termCard, start: 'top 85%' }
        })
        .fromTo(termCard, { y: 45, autoAlpha: 0, scale: 0.98 }, { y: 0, autoAlpha: 1, scale: 1, duration: 0.7, ease: 'power3.out' })
        .fromTo('.terminal-dots .dot', 
          { scale: 0, autoAlpha: 0 },
          { scale: 1, autoAlpha: 1, duration: 0.45, stagger: 0.08, ease: 'back.out(2)' },
          '-=0.4'
        );
      }

      // 3. ABOUT SECTION: Dual-direction split (Story from Left, Education from Right)
      const aboutCards = document.querySelectorAll('.about-grid .about-card');
      if (aboutCards.length >= 2) {
        gsap.fromTo(aboutCards[0],
          { x: -45, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, duration: 0.85, ease: 'power3.out', scrollTrigger: { trigger: aboutCards[0], start: 'top 85%' } }
        );
        gsap.fromTo(aboutCards[1],
          { x: 45, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, duration: 0.85, ease: 'power3.out', scrollTrigger: { trigger: aboutCards[1], start: 'top 85%' } }
        );
      }

      // 4. SKILLS SECTION: Alternating diagonal staggered cards
      ScrollTrigger.batch('.skills-grid .skill-card', {
        onEnter: (batch) => {
          gsap.fromTo(batch,
            (i) => ({ x: i % 2 === 0 ? -30 : 30, y: 25, autoAlpha: 0, scale: 0.94 }),
            { x: 0, y: 0, autoAlpha: 1, scale: 1, duration: 0.65, stagger: 0.05, ease: 'back.out(1.5)', overwrite: 'auto' }
          );
        },
        start: 'top 85%'
      });

      // 5. PROJECTS SECTION: Alternating directional entry + Image clip-path reveal
      const projCards = document.querySelectorAll('.projects-grid .project-card');
      projCards.forEach((card, index) => {
        const imgWrap = card.querySelector('.project-img-wrapper');
        const startX = index === 0 ? -50 : index === 1 ? 50 : 0;
        const startY = index === 2 ? 50 : 0;

        const tl = gsap.timeline({
          scrollTrigger: { trigger: card, start: 'top 84%' }
        });

        tl.fromTo(card,
          { x: startX, y: startY, autoAlpha: 0 },
          { x: 0, y: 0, autoAlpha: 1, duration: 0.75, ease: 'power3.out' }
        );

        if (imgWrap) {
          tl.fromTo(imgWrap,
            { clipPath: 'inset(0 100% 0 0)' },
            { clipPath: 'inset(0 0% 0 0)', duration: 0.85, ease: 'power3.inOut' },
            '-=0.6'
          );
        }
      });

      // 6. EXPERIENCE SECTION: Badge pop + Card entrance
      const expCard = document.querySelector('.experience-card');
      if (expCard) {
        gsap.timeline({ scrollTrigger: { trigger: expCard, start: 'top 85%' } })
        .fromTo(expCard, { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.75, ease: 'power3.out' })
        .fromTo('.exp-badge-pill', { scale: 0.7, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.45, ease: 'back.out(1.8)' }, '-=0.4');
      }

      // 7. CERTIFICATIONS: 3D Perspective rotation
      const certCards = document.querySelectorAll('.certificates-grid .cert-card');
      certCards.forEach((card, i) => {
        const rotY = i % 2 === 0 ? -15 : 15;
        gsap.fromTo(card,
          { rotationY: rotY, x: rotY * 2, autoAlpha: 0, scale: 0.94 },
          { rotationY: 0, x: 0, autoAlpha: 1, scale: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 85%' } }
        );
      });

      // 8. VERIFIED MILESTONES: Counter Count-Up Animation
      initMilestoneCounters();

      // 9. CONTACT & VISION SECTION: Dual slide reveal
      const contactInfo = document.querySelector('.contact-info-card');
      const contactForm = document.querySelector('.contact-form-card');
      if (contactInfo && contactForm) {
        gsap.fromTo(contactInfo, { x: -40, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.75, ease: 'power3.out', scrollTrigger: { trigger: contactInfo, start: 'top 85%' } });
        gsap.fromTo(contactForm, { x: 40, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.75, ease: 'power3.out', scrollTrigger: { trigger: contactForm, start: 'top 85%' } });
      }
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set('.reveal-on-scroll, .project-card, .skill-card, .timeline-item, .certificate-card, .interest-card, .about-card, .contact-info-card, .contact-form-card', {
        autoAlpha: 1, x: 0, y: 0, scale: 1, rotationY: 0
      });
    });
  } else {
    document.querySelectorAll('.reveal-on-scroll, .project-card, .skill-card, .timeline-item, .certificate-card').forEach(t => {
      t.style.opacity = '1';
      t.style.transform = 'none';
    });
  }
}

/* ──────────────────────────────────────────────────────────────────────────
   9.5. DYNAMIC MILESTONE NUMERIC COUNT-UP
   ────────────────────────────────────────────────────────────────────────── */
function initMilestoneCounters() {
  const counterCards = document.querySelectorAll('.achievement-card');
  counterCards.forEach(card => {
    const numEl = card.querySelector('.achieve-num');
    if (!numEl) return;

    const rawText = numEl.textContent.trim();
    const targetVal = parseFloat(rawText);
    if (isNaN(targetVal)) return;

    const hasPlus = rawText.includes('+');
    const isFloat = rawText.includes('.');

    const counterObj = { val: 0 };

    ScrollTrigger.create({
      trigger: card,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(counterObj, {
          val: targetVal,
          duration: 1.6,
          ease: 'power2.out',
          onUpdate: () => {
            let formatted = isFloat ? counterObj.val.toFixed(2) : Math.floor(counterObj.val);
            if (hasPlus) formatted += '+';
            numEl.textContent = formatted;
          }
        });
      }
    });
  });
}

/* ──────────────────────────────────────────────────────────────────────────
   9.6. MAGNETIC BUTTON MICRO-INTERACTIONS (gsap.quickTo)
   ────────────────────────────────────────────────────────────────────────── */
function initMagneticButtons() {
  if (!hasGSAP) return;
  const mm = gsap.matchMedia();

  mm.add("(min-width: 769px) and (prefers-reduced-motion: no-preference)", () => {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-hire, .btn-outline');
    buttons.forEach(btn => {
      const xTo = gsap.quickTo(btn, 'x', { duration: 0.35, ease: 'power2.out' });
      const yTo = gsap.quickTo(btn, 'y', { duration: 0.35, ease: 'power2.out' });

      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const relX = e.clientX - rect.left - rect.width / 2;
        const relY = e.clientY - rect.top - rect.height / 2;
        xTo(relX * 0.22);
        yTo(relY * 0.22);
      });

      btn.addEventListener('mouseleave', () => {
        xTo(0);
        yTo(0);
      });
    });
  });
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
   11. INTERACTIVE PROJECT FILTERING (GSAP Staggered Transition)
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

      if (hasGSAP) {
        // Animate non-matching cards out
        if (nonMatchingCards.length) {
          gsap.to(nonMatchingCards, {
            scale: 0.9,
            autoAlpha: 0,
            duration: 0.22,
            ease: 'power2.in',
            onComplete: () => {
              nonMatchingCards.forEach(c => c.style.display = 'none');
            }
          });
        }

        // Animate matching cards in with stagger
        matchingCards.forEach(c => c.style.display = 'flex');
        gsap.fromTo(matchingCards,
          { scale: 0.9, autoAlpha: 0, y: 15 },
          { scale: 1, autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'power3.out', delay: nonMatchingCards.length ? 0.15 : 0 }
        );
      } else {
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
      }
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
   13. INTERACTIVE SKILL CATEGORY FILTERING (GSAP Staggered Transition)
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

      if (hasGSAP) {
        if (nonMatchingCards.length) {
          gsap.to(nonMatchingCards, {
            scale: 0.9,
            autoAlpha: 0,
            duration: 0.2,
            ease: 'power2.in',
            onComplete: () => {
              nonMatchingCards.forEach(c => c.style.display = 'none');
            }
          });
        }
        matchingCards.forEach(c => c.style.display = 'block');
        gsap.fromTo(matchingCards,
          { scale: 0.9, autoAlpha: 0, y: 12 },
          { scale: 1, autoAlpha: 1, y: 0, duration: 0.38, stagger: 0.04, ease: 'power3.out', delay: nonMatchingCards.length ? 0.12 : 0 }
        );
      } else {
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
      }
    });
  });
}

/* ──────────────────────────────────────────────────────────────────────────
   14. CERTIFICATE & PROJECT MODAL ANIMATIONS (GSAP Entrance & Exit)
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

  const container = modal.querySelector('.modal-container, .cert-modal-container');
  if (hasGSAP && container) {
    gsap.fromTo(container,
      { scale: 0.9, autoAlpha: 0, y: 20 },
      { scale: 1, autoAlpha: 1, y: 0, duration: 0.38, ease: 'back.out(1.4)', overwrite: 'auto' }
    );
  }
}

function closeModal(modal) {
  const container = modal.querySelector('.modal-container, .cert-modal-container');

  if (hasGSAP && container) {
    gsap.to(container, {
      scale: 0.93,
      autoAlpha: 0,
      y: 15,
      duration: 0.22,
      ease: 'power2.in',
      onComplete: () => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });
  } else {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
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
