/**
 * KARTHIKEYAN S — FULL STACK WEB DEVELOPER PORTFOLIO
 * High-Performance Vanilla JavaScript (ES6+)
 * Optimized for 60 FPS, Minimal Layout Shifts, and Zero Runtime Overhead
 */

"use strict";

/* ==========================================================================
   1. Configuration Data
   ========================================================================== */

const projects = [
  {
    id: "bus-booking",
    title: "Bus Booking System Management",
    description:
      "A comprehensive backend system for intercity route management, passenger bookings, and real-time seat reservation logic. Architected with object-oriented Java and JDBC for structured, ACID-compliant MySQL database operations.",
    technologies: ["Java", "MySQL", "REST API", "Database Architecture"],
    github: "https://github.com/KARTHI212006",
    demo: null,
  },
  {
    id: "developer-portfolio",
    title: "Personal Developer Portfolio",
    description:
      "A production developer portfolio engineered with strictly semantic HTML5, modern vanilla CSS, and clean ES6+ JavaScript. Designed with a mobile-first philosophy, fluid typography, and zero heavy framework dependencies.",
    technologies: ["HTML5", "Modern CSS", "ES6 JavaScript", "Vercel"],
    github: "https://github.com/KARTHI212006",
    demo: "https://s-karthikeyan-portfolio.vercel.app/",
  },
];

const skills = [
  {
    category: "Backend",
    items: ["Java", "Object-Oriented Programming (OOP)", "REST APIs"],
  },
  {
    category: "Frontend",
    items: ["HTML5", "Modern CSS", "JavaScript ES6+", "Responsive Web Design"],
  },
  {
    category: "Database",
    items: ["MySQL", "Database Architecture", "SQL Query Design"],
  },
];

/* ==========================================================================
   2. Optimized DOM Rendering (Single Batch Operation)
   ========================================================================== */

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, (tag) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  }[tag] || tag));
}

function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container) return;

  const html = skills
    .map(
      (group) => `
    <div class="card skill-category-card">
      <h3 class="category-title">
        <span>${escapeHTML(group.category)}</span>
        <span class="skill-count-badge">${group.items.length} Skills</span>
      </h3>
      <div class="skill-tags">
        ${group.items
          .map((item) => `<span class="skill-pill">${escapeHTML(item)}</span>`)
          .join("")}
      </div>
    </div>`
    )
    .join("");

  container.innerHTML = html;
}

function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  const html = projects
    .map((proj) => {
      const tagsHtml = proj.technologies
        .map((t) => `<span class="tech-tag">${escapeHTML(t)}</span>`)
        .join("");

      const ghHtml = proj.github
        ? `<a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="project-link-item" aria-label="View source code for ${escapeHTML(proj.title)} on GitHub (opens in new tab)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            <span>Source</span>
          </a>`
        : "";

      const demoHtml = proj.demo
        ? `<a href="${proj.demo}" target="_blank" rel="noopener noreferrer" class="project-link-item project-link-demo" aria-label="View live demo of ${escapeHTML(proj.title)} (opens in new tab)">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            <span>Live Demo</span>
          </a>`
        : "";

      const metaText = proj.demo ? "Production" : "Backend Logic";

      return `
      <article class="card project-card" aria-labelledby="proj-title-${proj.id}">
        <div class="project-body">
          <div class="project-header-row">
            <h3 class="project-title" id="proj-title-${proj.id}">${escapeHTML(proj.title)}</h3>
            <div class="project-folder-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
          </div>
          <p class="project-description">${escapeHTML(proj.description)}</p>
          <div class="project-tech-tags">${tagsHtml}</div>
        </div>
        <div class="project-footer">
          <div class="project-links">${ghHtml}${demoHtml}</div>
          <span class="project-meta-pill">${metaText}</span>
        </div>
      </article>`;
    })
    .join("");

  container.innerHTML = html;
}

/* ==========================================================================
   3. Accessible & Lightweight Mobile Navigation
   ========================================================================== */

function initMobileNavigation() {
  const toggleBtn = document.getElementById("nav-toggle");
  const siteNav = document.getElementById("site-nav");

  if (!toggleBtn || !siteNav) return;

  function onOutsideClick(event) {
    if (!siteNav.contains(event.target) && !toggleBtn.contains(event.target)) {
      closeMenu();
    }
  }

  function onKeydown(event) {
    if (event.key === "Escape") {
      closeMenu();
      toggleBtn.focus();
    }
  }

  function openMenu() {
    siteNav.classList.add("is-open");
    toggleBtn.setAttribute("aria-expanded", "true");
    toggleBtn.setAttribute("aria-label", "Close navigation menu");
    document.body.style.overflow = "hidden";
    document.addEventListener("click", onOutsideClick, { passive: true });
    document.addEventListener("keydown", onKeydown);
  }

  function closeMenu() {
    siteNav.classList.remove("is-open");
    toggleBtn.setAttribute("aria-expanded", "false");
    toggleBtn.setAttribute("aria-label", "Open navigation menu");
    document.body.style.overflow = "";
    document.removeEventListener("click", onOutsideClick);
    document.removeEventListener("keydown", onKeydown);
  }

  toggleBtn.addEventListener("click", () => {
    const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Delegate link clicks inside nav
  siteNav.addEventListener(
    "click",
    (e) => {
      if (e.target.closest("a")) {
        closeMenu();
      }
    },
    { passive: true }
  );
}

/* ==========================================================================
   4. High-Performance Active Section Observer (Zero Redundant DOM Mutations)
   ========================================================================== */

function initActiveSectionObserver() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".site-nav .nav-link");

  if (!sections.length || !navLinks.length || !("IntersectionObserver" in window)) {
    return;
  }

  // Precompute O(1) map from section ID to corresponding nav link element
  const linkMap = new Map();
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      linkMap.set(href.slice(1), link);
    }
  });

  let currentActiveId = "hero";

  const observerOptions = {
    root: null,
    rootMargin: "-25% 0px -65% 0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      if (entry.isIntersecting) {
        const id = entry.target.id;
        if (id && id !== currentActiveId) {
          const oldLink = linkMap.get(currentActiveId);
          if (oldLink) oldLink.classList.remove("active");

          const newLink = linkMap.get(id);
          if (newLink) newLink.classList.add("active");

          currentActiveId = id;
        }
      }
    }
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

/* ==========================================================================
   5. Non-Blocking Initialization
   ========================================================================== */

function init() {
  renderSkills();
  renderProjects();
  initMobileNavigation();
  initActiveSectionObserver();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
