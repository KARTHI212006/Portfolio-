/**
 * KARTHIKEYAN S — PORTFOLIO GSAP ANIMATION SYSTEM (js/animations.js)
 * Pure ES6 Module | GSAP 3.12 + ScrollTrigger + Lenis
 * 
 * High-performance motion engine with horizontal projects pin,
 * interactive tech universe, HUD counters, and magnetic buttons.
 */

'use strict';

let lenis = null;
let isFilterAnimating = false;

/**
 * 0. Initialize GSAP Plugins & Lenis Smooth Scroll Engine
 */
export function initGSAPEngine() {
  if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  if (typeof window.Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
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

/**
 * 1. Loading Screen & Hero Entrance Choreography (< 1.4s Boot Sequence)
 */
export function initLoadingAndHeroSequence() {
  const screen = document.getElementById('loading-screen');
  const navbar = document.getElementById('navbar');
  const barFill = document.getElementById('loader-bar-fill');
  const hudStatus = document.getElementById('hud-status');

  if (typeof window.gsap === 'undefined') {
    if (screen) screen.style.display = 'none';
    if (navbar) navbar.classList.add('navbar-loaded');
    return;
  }

  const mm = gsap.matchMedia();

  // Reduced motion: skip loading sequence and instantly unveil hero
  mm.add("(prefers-reduced-motion: reduce)", () => {
    if (screen) screen.style.display = 'none';
    document.body.style.overflow = '';
    if (navbar) {
      gsap.set(navbar, { autoAlpha: 1, y: 0 });
      navbar.classList.add('navbar-loaded');
    }
    gsap.set('.hero-reveal, .profile-frame, .float-badge', { autoAlpha: 1, y: 0, scale: 1 });
  });

  // Full motion experience
  mm.add("(prefers-reduced-motion: no-preference)", () => {
    document.body.style.overflow = 'hidden';

    const bootTl = gsap.timeline({
      defaults: { ease: 'power2.out' }
    });

    // Step A: Futuristic Boot Sequence (0.0s – 1.1s)
    if (screen) {
      if (barFill) {
        bootTl.to(barFill, {
          width: '100%',
          duration: 0.85,
          ease: 'power1.inOut'
        }, 0.1);
      }

      bootTl.to(hudStatus, {
        duration: 0.1,
        onComplete: () => {
          if (hudStatus) {
            hudStatus.textContent = '[SYSTEM ONLINE]';
            hudStatus.style.color = '#10B981';
          }
        }
      }, 0.7);

      bootTl.to(screen, {
        autoAlpha: 0,
        scale: 1.03,
        duration: 0.35,
        ease: 'power3.in',
        onComplete: () => {
          screen.style.display = 'none';
          screen.style.pointerEvents = 'none';
          document.body.style.overflow = '';
        }
      }, 1.05);
    }

    // Step B: Navbar & Hero Entrance Timeline (Kicks off seamlessly at 0.95s)
    const heroStartTime = screen ? 0.95 : 0.0;

    if (navbar) {
      bootTl.fromTo(navbar, 
        { y: -30, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6, ease: 'power3.out', onStart: () => navbar.classList.add('navbar-loaded') },
        heroStartTime
      );
    }

    bootTl
      .fromTo('.hero-badge-row', 
        { y: -16, autoAlpha: 0 }, 
        { y: 0, autoAlpha: 1, duration: 0.5 }, 
        heroStartTime + 0.1
      )
      .fromTo('.hero-greeting', 
        { y: 15, autoAlpha: 0 }, 
        { y: 0, autoAlpha: 1, duration: 0.4 }, 
        '-=0.35'
      )
      .fromTo('.hero-name-mask .hero-name', 
        { yPercent: 100, autoAlpha: 0 }, 
        { yPercent: 0, autoAlpha: 1, duration: 0.65, ease: 'power4.out' }, 
        '-=0.3'
      )
      .fromTo('.hero-title-line', 
        { y: 15, autoAlpha: 0 }, 
        { y: 0, autoAlpha: 1, duration: 0.5 }, 
        '-=0.35'
      )
      .fromTo('.hero-bio', 
        { y: 15, autoAlpha: 0 }, 
        { y: 0, autoAlpha: 1, duration: 0.5 }, 
        '-=0.35'
      )
      .fromTo('.hero-actions .btn', 
        { y: 20, autoAlpha: 0 }, 
        { y: 0, autoAlpha: 1, stagger: 0.08, ease: 'back.out(1.5)' }, 
        '-=0.3'
      )
      .fromTo('.hero-socials .social-link', 
        { scale: 0.6, autoAlpha: 0 }, 
        { scale: 1, autoAlpha: 1, stagger: 0.05, ease: 'back.out(2)' }, 
        '-=0.3'
      )
      .fromTo('.profile-frame', 
        { scale: 0.88, autoAlpha: 0, rotationY: -15 }, 
        { scale: 1, autoAlpha: 1, rotationY: 0, duration: 0.8, ease: 'back.out(1.4)' }, 
        '-=0.7'
      )
      .fromTo('.float-badge', 
        { scale: 0.6, autoAlpha: 0 }, 
        { scale: 1, autoAlpha: 1, stagger: 0.1, ease: 'back.out(1.8)' }, 
        '-=0.4'
      );

    // Continuous floating badges idle motion
    gsap.to('.float-badge', {
      y: '-=8',
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.35
    });
  });
}

/**
 * 2. Navbar Background Scrub & Gliding Pill Indicator
 */
export function initNavbarMotion() {
  const navbar = document.getElementById('navbar');
  const pillEl = document.getElementById('nav-pill');
  if (!navbar) return;

  if (typeof window.ScrollTrigger !== 'undefined') {
    ScrollTrigger.create({
      trigger: 'body',
      start: 'top -40px',
      onToggle: (self) => {
        navbar.classList.toggle('scrolled', self.isActive);
      }
    });
  }

  // Glide pill indicator
  window.updateNavPillPosition = function() {
    const menu = document.getElementById('nav-menu');
    if (!pillEl || !menu || window.innerWidth < 992) return;

    const activeLink = menu.querySelector('.nav-link.active');
    if (!activeLink) {
      pillEl.style.opacity = '0';
      return;
    }

    const menuRect = menu.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();
    const offset = linkRect.left - menuRect.left;

    if (typeof window.gsap !== 'undefined') {
      gsap.to(pillEl, {
        width: linkRect.width,
        x: offset,
        autoAlpha: 1,
        duration: 0.32,
        ease: 'power3.out',
        overwrite: 'auto'
      });
    } else {
      pillEl.style.width = `${linkRect.width}px`;
      pillEl.style.transform = `translateX(${offset}px)`;
      pillEl.style.opacity = '1';
    }
  };

  setTimeout(() => {
    if (window.updateNavPillPosition) window.updateNavPillPosition();
  }, 100);
}

/**
 * 3. Hero Role Dynamic Switcher
 */
export function animateRoleSwap(roleEl, newText) {
  if (!roleEl) return;
  if (typeof window.gsap !== 'undefined') {
    gsap.to(roleEl, {
      y: -10,
      autoAlpha: 0,
      duration: 0.22,
      ease: 'power2.in',
      onComplete: () => {
        roleEl.textContent = newText;
        gsap.fromTo(roleEl,
          { y: 10, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.32, ease: 'power2.out' }
        );
      }
    });
  } else {
    roleEl.textContent = newText;
  }
}

/**
 * 4. Hero Mouse Parallax & 3D Tilt
 */
export function initHeroParallaxAndGlows() {
  const hero = document.getElementById('home');
  const profileFrame = document.querySelector('.profile-frame');
  if (!hero) return;

  if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Mouse interactive tilt on desktop profile frame
      if (profileFrame && window.innerWidth >= 769) {
        const xTo = gsap.quickTo(profileFrame, 'x', { duration: 0.45, ease: 'power3.out' });
        const yTo = gsap.quickTo(profileFrame, 'y', { duration: 0.45, ease: 'power3.out' });
        const rotXTo = gsap.quickTo(profileFrame, 'rotationX', { duration: 0.45, ease: 'power3.out' });
        const rotYTo = gsap.quickTo(profileFrame, 'rotationY', { duration: 0.45, ease: 'power3.out' });

        hero.addEventListener('mousemove', (e) => {
          const rect = hero.getBoundingClientRect();
          const relX = e.clientX - rect.left - rect.width / 2;
          const relY = e.clientY - rect.top - rect.height / 2;

          xTo(relX * 0.025);
          yTo(relY * 0.025);
          rotXTo(relY * -0.02);
          rotYTo(relX * 0.02);
        });

        hero.addEventListener('mouseleave', () => {
          xTo(0);
          yTo(0);
          rotXTo(0);
          rotYTo(0);
        });
      }
    });
  }
}

/**
 * 5. Horizontal Project Showcase (GSAP ScrollTrigger Pin on Desktop)
 */
export function initHorizontalProjectScroll() {
  const pinSection = document.getElementById('projects');
  const track = document.getElementById('horizontal-projects-track');
  if (!pinSection || !track || typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') return;

  const mm = gsap.matchMedia();

  // Desktop horizontal scroll (992px+)
  mm.add("(min-width: 992px) and (prefers-reduced-motion: no-preference)", () => {
    const scrollLength = () => track.scrollWidth - window.innerWidth + (window.innerWidth * 0.08);

    const horizontalTween = gsap.to(track, {
      x: () => -scrollLength(),
      ease: 'none',
      scrollTrigger: {
        trigger: pinSection,
        start: 'top top',
        end: () => `+=${scrollLength() + 400}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true
      }
    });

    return () => {
      horizontalTween.kill();
      gsap.set(track, { clearProps: 'all' });
    };
  });
}

/**
 * 6. Interactive Tech Universe Orbit & Dynamic Inspector
 */
export function initTechUniverse() {
  const cards = document.querySelectorAll('.skills-grid .skill-card');
  const inspectorBadge = document.getElementById('inspector-badge');
  const inspectorTitle = document.getElementById('inspector-title');
  const inspectorDesc = document.getElementById('inspector-desc');
  const inspectorTags = document.getElementById('inspector-tags');

  if (!cards.length) return;

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const title = card.getAttribute('data-title') || card.querySelector('.tech-name')?.textContent;
      const desc = card.getAttribute('data-desc') || card.querySelector('.tech-desc')?.textContent;
      const category = card.getAttribute('data-skill-category')?.toUpperCase() || 'NODE';
      const tagsStr = card.getAttribute('data-tags') || '';

      if (inspectorBadge) inspectorBadge.textContent = `${category} CLUSTER`;
      if (inspectorTitle) inspectorTitle.textContent = title;
      if (inspectorDesc) inspectorDesc.textContent = desc;

      if (inspectorTags && tagsStr) {
        inspectorTags.innerHTML = tagsStr.split(',').map(t => `<span class="tag">${t.trim()}</span>`).join('');
      }

      // Dim non-hovered cards
      cards.forEach(other => {
        if (other !== card) other.style.opacity = '0.5';
      });
    });

    card.addEventListener('mouseleave', () => {
      cards.forEach(other => {
        other.style.opacity = '';
      });
    });
  });
}

/**
 * 7. Verified Milestones HUD Metric Counters (ScrollTrigger Rollup)
 */
export function initMetricCounters() {
  if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') return;

  const integers = document.querySelectorAll('.metric-counter');
  const decimals = document.querySelectorAll('.metric-counter-decimal');

  integers.forEach(el => {
    const target = parseInt(el.getAttribute('data-target'), 10) || 0;
    const obj = { val: 0 };

    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = Math.floor(obj.val).toString().padStart(target >= 10 ? 2 : 1, '0');
          }
        });
      }
    });
  });

  decimals.forEach(el => {
    const target = parseFloat(el.getAttribute('data-target')) || 0;
    const obj = { val: 0.0 };

    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: target,
          duration: 2.0,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = obj.val.toFixed(2);
          }
        });
      }
    });
  });
}

/**
 * 8. Section Reveals & Batched Grid Entrance Animations
 */
export function initSectionReveals() {
  if (typeof window.gsap === 'undefined') {
    document.querySelectorAll('.reveal-on-scroll, .project-card, .skill-card, .cert-card').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: reduce)", () => {
    gsap.set('.section-header, .about-card, .skill-card, .project-slide-card, .experience-card, .cert-card, .achievement-card, .contact-info-card, .contact-form-card, .terminal-card', {
      autoAlpha: 1, x: 0, y: 0, scale: 1
    });
  });

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    // Section Headers
    document.querySelectorAll('.section-header').forEach(header => {
      const eyebrow = header.querySelector('.section-eyebrow');
      const titleInner = header.querySelector('.title-inner');
      const line = header.querySelector('.heading-line');
      const subtitle = header.querySelector('.section-subtitle');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: header,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });

      if (eyebrow) tl.fromTo(eyebrow, { y: -15, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.45, ease: 'power2.out' });
      if (titleInner) tl.fromTo(titleInner, { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, ease: 'power3.out' }, '-=0.3');
      if (line) tl.fromTo(line, { scaleX: 0, autoAlpha: 0 }, { scaleX: 1, autoAlpha: 1, duration: 0.5, ease: 'power2.inOut', transformOrigin: 'center center' }, '-=0.35');
      if (subtitle) tl.fromTo(subtitle, { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.45, ease: 'power2.out' }, '-=0.3');
    });

    // Batched Skill Cards
    ScrollTrigger.batch('.skills-grid .skill-card', {
      start: 'top 88%',
      interval: 0.06,
      onEnter: (batch) => {
        gsap.fromTo(batch,
          { y: 24, autoAlpha: 0, scale: 0.95 },
          { y: 0, autoAlpha: 1, scale: 1, duration: 0.45, stagger: 0.05, ease: 'power3.out', overwrite: 'auto' }
        );
      }
    });

    // Batched Milestones & Cert Cards
    ScrollTrigger.batch('.achievements-grid .achievement-card, .certificates-grid .cert-card', {
      start: 'top 88%',
      interval: 0.06,
      onEnter: (batch) => {
        gsap.fromTo(batch,
          { y: 28, autoAlpha: 0, scale: 0.96 },
          { y: 0, autoAlpha: 1, scale: 1, duration: 0.55, stagger: 0.08, ease: 'power3.out', overwrite: 'auto' }
        );
      }
    });

    // Terminal Card
    const termCard = document.querySelector('.terminal-card');
    if (termCard) {
      gsap.fromTo(termCard,
        { y: 35, autoAlpha: 0, scale: 0.98 },
        { y: 0, autoAlpha: 1, scale: 1, duration: 0.65, ease: 'power3.out', scrollTrigger: { trigger: termCard, start: 'top 85%' } }
      );
    }
  });
}

/**
 * 9. Filter Transition Helper
 */
export function animateCardFilter(allCards, matchingCards, nonMatchingCards, displayType = 'block') {
  if (typeof window.gsap === 'undefined') {
    allCards.forEach(card => {
      const isMatch = matchingCards.includes(card);
      card.style.display = isMatch ? displayType : 'none';
      card.style.opacity = isMatch ? '1' : '0';
    });
    return;
  }

  if (isFilterAnimating) return;
  isFilterAnimating = true;

  const tl = gsap.timeline({
    onComplete: () => {
      isFilterAnimating = false;
      if (typeof window.ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
      }
    }
  });

  if (nonMatchingCards.length) {
    tl.to(nonMatchingCards, {
      scale: 0.9,
      autoAlpha: 0,
      duration: 0.18,
      ease: 'power2.in',
      onComplete: () => {
        nonMatchingCards.forEach(c => c.style.display = 'none');
      }
    });
  }

  matchingCards.forEach(c => c.style.display = displayType);
  tl.fromTo(matchingCards,
    { scale: 0.92, autoAlpha: 0, y: 12 },
    { scale: 1, autoAlpha: 1, y: 0, duration: 0.32, stagger: 0.04, ease: 'power3.out' },
    nonMatchingCards.length ? '-=0.05' : 0
  );
}

/**
 * 10. Modal Open/Close Timelines
 */
export function animateModalOpen(modalEl) {
  if (!modalEl) return;

  modalEl.classList.add('active');
  modalEl.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  const backdrop = modalEl.querySelector('.modal-backdrop');
  const content = modalEl.querySelector('.modal-content, .pmodal-content');

  if (typeof window.gsap !== 'undefined' && backdrop && content) {
    gsap.killTweensOf([backdrop, content]);
    gsap.fromTo(backdrop, 
      { autoAlpha: 0 }, 
      { autoAlpha: 1, duration: 0.2, ease: 'power2.out' }
    );
    gsap.fromTo(content, 
      { scale: 0.94, autoAlpha: 0, y: 16 }, 
      { scale: 1, autoAlpha: 1, y: 0, duration: 0.32, ease: 'power2.out' }
    );
  }
}

export function animateModalClose(modalEl, onClosedCallback) {
  if (!modalEl) return;

  const backdrop = modalEl.querySelector('.modal-backdrop');
  const content = modalEl.querySelector('.modal-content, .pmodal-content');

  const finalizeClose = () => {
    modalEl.classList.remove('active');
    modalEl.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (typeof window.gsap !== 'undefined' && backdrop && content) {
      gsap.set([modalEl, backdrop, content], { clearProps: 'all' });
      gsap.set(modalEl, { display: '', opacity: '', visibility: '' });
    }
    if (onClosedCallback) onClosedCallback();
  };

  if (typeof window.gsap !== 'undefined' && backdrop && content) {
    const tl = gsap.timeline({ onComplete: finalizeClose });
    tl.to(content, { scale: 0.94, autoAlpha: 0, y: 10, duration: 0.18, ease: 'power2.in' }, 0);
    tl.to(backdrop, { autoAlpha: 0, duration: 0.18, ease: 'power2.in' }, 0);
  } else {
    finalizeClose();
  }
}

/**
 * 11. Micro-Interactions: Magnetic Buttons & Hover Feedback
 */
export function initMicroInteractions() {
  if (typeof window.gsap === 'undefined') return;

  // 11.1 Magnetic Buttons
  document.querySelectorAll('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
      gsap.to(btn, { x, y, duration: 0.25, ease: 'power2.out', overwrite: 'auto' });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.45, ease: 'elastic.out(1, 0.4)', overwrite: 'auto' });
    });
  });

  // 11.2 Back To Top Entrance via ScrollTrigger
  const backBtn = document.getElementById('back-to-top');
  if (backBtn && typeof window.ScrollTrigger !== 'undefined') {
    ScrollTrigger.create({
      trigger: '#home',
      start: 'bottom center',
      onToggle: (self) => backBtn.classList.toggle('visible', self.isActive)
    });
  }

  // 11.3 Scroll Progress Bar ScaleX Scrub
  const progressBar = document.getElementById('scroll-progress-bar');
  if (progressBar && typeof window.ScrollTrigger !== 'undefined') {
    gsap.to(progressBar, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.2
      }
    });
  }
}
