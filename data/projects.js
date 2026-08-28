/**
 * KARTHIKEYAN S — PORTFOLIO PROJECT DATA
 * Verified production project dataset for cinematic showcases & case study modals
 */

export const projectsData = [
  {
    id: 'gamevault',
    badge: 'PROJECT 01 / 03',
    number: '01',
    title: 'GAMEVAULT',
    category: 'web',
    tagline: 'Modern Web Architecture & Gaming Discovery Hub',
    shortDesc: 'A fast, responsive gaming discovery portal built with pure HTML5, CSS3, and Vanilla JavaScript without heavy framework bloat.',
    problem: 'Modern gaming discovery platforms are frequently bloated with heavy third-party bundles, leading to slow initial loads and sluggish mobile interactions.',
    solution: 'Engineered a pure vanilla web architecture utilizing optimized DOM manipulation, custom CSS glassmorphism, responsive CSS Grid, and lightweight asset pipelines.',
    features: [
      'Responsive multi-viewport game discovery & detail views',
      'Dynamic trailer showcase & real-time pricing telemetry links',
      'Custom pure-CSS glassmorphism with 60 FPS transitions',
      'Zero external framework overhead for instantaneous initial load'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Vercel', 'Responsive UI'],
    result: 'Achieved sub-second page loads and 100% fluid responsiveness across mobile, tablet, and ultra-wide displays.',
    myContribution: 'Full Stack & UI Developer — Designed UI/UX layout, coded vanilla JavaScript DOM interactions, and deployed production build.',
    github: 'https://github.com/KARTHI212006',
    demo: 'https://s-karthikeyan-portfolio.vercel.app/',
    img: 'assets/images/gamevault.webp',
    metrics: { speed: '< 0.8s Load', bundle: '0 KB Framework Bloat', ui: '100% Fluid' }
  },
  {
    id: 'smart-irrigation',
    badge: 'PROJECT 02 / 03',
    number: '02',
    title: 'SMART IRRIGATION SYSTEM',
    category: 'ai-iot',
    tagline: 'IoT-Powered Automated Soil Moisture & Water Control Prototype',
    shortDesc: 'An automated agricultural IoT system that continuously monitors soil moisture thresholds and automates water pump relay switching.',
    problem: 'Traditional agricultural irrigation relies on manual soil moisture inspection and uncalibrated watering cycles, resulting in significant water loss and crop stress.',
    solution: 'Designed and built an embedded hardware solution connecting capacitive soil moisture sensors to a microcontroller executing automated pump activation logic.',
    features: [
      'Continuous real-time soil moisture level sensing & threshold detection',
      'Automated relay control triggering water pump activation/deactivation',
      'Power-efficient microcontroller logic with hardware safety cutoffs',
      'Prevents crop over-saturation and optimizes agricultural water conservation'
    ],
    tech: ['Arduino', 'IoT Sensors', 'Embedded C', 'Hardware Relay', 'Automation'],
    result: 'Demonstrated reliable automated irrigation cycles, eliminating manual inspection and reducing water wastage in prototype tests.',
    myContribution: 'IoT Project Lead — Calibrated soil moisture sensors, developed microcontroller automation firmware, and assembled circuit prototype.',
    github: 'https://github.com/KARTHI212006',
    demo: null,
    img: 'assets/images/irrigation.webp',
    metrics: { telemetry: 'Real-time Soil Sensing', hardware: 'Relay Automated', efficiency: 'Eco Water Saving' }
  },
  {
    id: 'bus-booking',
    badge: 'PROJECT 03 / 03',
    number: '03',
    title: 'BUS BOOKING MANAGEMENT SYSTEM',
    category: 'java',
    tagline: 'Enterprise Java Backend & Relational MySQL Reservation Engine',
    shortDesc: 'An object-oriented Java application with relational database persistence for managing bus schedules, passenger reservations, and ticket records.',
    problem: 'Manual passenger log management and paper-based ticketing create frequent reservation conflicts, double-booking errors, and untraceable records.',
    solution: 'Constructed an OOP Java backend coupled with MySQL via JDBC, enforcing transactional consistency, automated seat allocation, and structured record querying.',
    features: [
      'Comprehensive bus route lookup and real-time seat availability checks',
      'Passenger record logging with automated unique Ticket ID generation',
      'JDBC-driven relational persistence with parameterized SQL queries',
      'Structured database schema with integrity constraints preventing double-bookings'
    ],
    tech: ['Java', 'MySQL', 'JDBC', 'OOP Architecture', 'SQL Schema Design'],
    result: 'Ensured zero reservation conflicts and structured relational storage for passenger travel logs.',
    myContribution: 'Backend & Database Engineer — Architected relational MySQL schema, wrote JDBC data access layers, and built core Java reservation logic.',
    github: 'https://github.com/KARTHI212006',
    demo: null,
    img: 'assets/images/gamevault.webp',
    metrics: { consistency: 'Zero Booking Collisions', db: 'MySQL Relational', architecture: 'Java OOP + JDBC' }
  }
];
