/**
 * KARTHIKEYAN S — VERIFIED PRODUCTION PROJECT DATASET
 * Sourced directly from GitHub repositories & real implementations.
 */

export const projectsData = [
  {
    id: 'gamevault',
    badge: 'PROJECT 01 / 04',
    number: '01',
    title: 'GAMEVAULT',
    category: 'web',
    tagline: 'Full-Stack Gaming Discovery & Catalog Platform',
    shortDesc: 'A modern full-stack gaming platform built with React, Vite, Supabase, and Tailwind CSS featuring AAA game discovery, trailers, ratings, and persistent cart/wishlist management.',
    problem: 'Gamers face sluggish discovery platforms burdened with heavy bloat, missing hardware spec requirements, and fragmented game discount information.',
    solution: 'Engineered a fluid single-page web application utilizing modular React components, Steam official artwork, Supabase database integration, and local storage state persistence for cart and wishlist tracking.',
    features: [
      'Comprehensive game discovery & search with real AAA titles and ratings',
      'Dynamic game detail views with trailers, screenshots & minimum specs',
      'Interactive cart & wishlist persistence across browser sessions',
      'Responsive gaming interface with Framer Motion transitions'
    ],
    tech: ['React', 'Vite', 'JavaScript ES6+', 'Supabase DB', 'Tailwind CSS', 'REST APIs', 'Full Stack Web'],
    result: 'Delivered a high-performance, fluid gaming discovery application deployed on Vercel with instant state synchronization.',
    myContribution: 'Frontend & Full Stack Developer — Engineered responsive UI components, integrated game catalog metadata, built cart and wishlist state logic, and handled Vercel deployment.',
    github: 'https://github.com/KARTHI212006/next-program-',
    demo: 'https://next-program-two.vercel.app',
    img: 'assets/images/gamevault.webp',
    metrics: { speed: '< 0.9s Load', stack: 'React + Supabase', ui: '100% Fluid' }
  },
  {
    id: 'bus-booking',
    badge: 'PROJECT 02 / 04',
    number: '02',
    title: 'BUS BOOKING MANAGEMENT SYSTEM',
    category: 'java',
    tagline: 'Enterprise Java Backend & Relational MySQL Reservation Engine',
    shortDesc: 'An enterprise object-oriented Java application with relational MySQL database persistence via JDBC for managing bus routes, schedules, seat reservations, and passenger records.',
    problem: 'Manual passenger log management and paper-based ticketing create frequent reservation conflicts, double-booking errors, and untraceable records.',
    solution: 'Constructed an OOP Java backend coupled with MySQL via JDBC, enforcing ACID transactional consistency, automated seat allocation, and structured relational queries.',
    features: [
      'Comprehensive bus route lookup and real-time seat availability checks',
      'Passenger record logging with automated unique Ticket ID generation',
      'JDBC-driven relational persistence with parameterized SQL queries',
      'Structured database schema with integrity constraints preventing double-bookings',
      'ACID transaction safety with manual commit & rollback controls'
    ],
    tech: ['Java', 'OOP Architecture', 'MySQL Relational', 'JDBC Driver', 'Relational Persistence', 'SQL Schema Design'],
    result: 'Eliminated double-booking conflicts and established reliable relational data persistence for transport operations.',
    myContribution: 'Java Backend & Database Engineer — Architected relational MySQL schema, wrote JDBC data access layers, and built core Java reservation logic.',
    github: 'https://github.com/KARTHI212006/BusbookingSystemManagement',
    demo: null,
    img: 'assets/images/bus_booking.svg',
    metrics: { consistency: 'Zero Booking Collisions', db: 'MySQL Relational', architecture: 'Java OOP + JDBC' }
  },
  {
    id: 'employee-attendance',
    badge: 'PROJECT 03 / 04',
    number: '03',
    title: 'EMPLOYEE ATTENDANCE TRACKING SYSTEM',
    category: 'java',
    tagline: 'Java Desktop Application & Relational Attendance Management',
    shortDesc: 'A Java Swing and MySQL-driven enterprise desktop application for employee profile management, daily attendance tracking, leave workflows, and reporting.',
    problem: 'Organizations struggle with inaccurate attendance logging, disorganized manual leave records, and time-consuming manual report compilation.',
    solution: 'Developed an authenticated Java desktop application utilizing Java Swing for administrative UI and MySQL via JDBC for reliable relational record persistence and automated reporting.',
    features: [
      'Secure administrative and HR authentication system',
      'Employee profile management with full CRUD capability',
      'Daily attendance logging with status classification (Present, Absent, Leave)',
      'Leave management module with request tracking and status updates',
      'Automated attendance and leave summary report generation with SQL aggregation'
    ],
    tech: ['Java', 'Java Swing GUI', 'MySQL Relational', 'JDBC', 'Relational Data Persistence', 'Full Stack Logic'],
    result: 'Streamlined attendance logging and administrative leave tracking with structured SQL persistence and automated reporting.',
    myContribution: 'Java Software & Database Developer — Designed graphical user interfaces using Java Swing, created normalized MySQL relational tables, and implemented JDBC data operations.',
    github: 'https://github.com/KARTHI212006/Employee-Attendance-Tracking-System',
    demo: null,
    img: 'assets/images/employee_attendance.svg',
    metrics: { auth: 'Role-Based Auth', db: 'MySQL JDBC', ui: 'Java Swing UI' }
  },
  {
    id: 'smart-irrigation',
    badge: 'PROJECT 04 / 04',
    number: '04',
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
    tech: ['Arduino', 'IoT Sensors', 'Embedded C/C++', 'Hardware Relay', 'Automation'],
    result: 'Demonstrated reliable automated irrigation cycles, eliminating manual inspection and reducing water wastage in prototype tests.',
    myContribution: 'IoT Project Lead — Calibrated soil moisture sensors, developed microcontroller automation firmware, and assembled circuit prototype.',
    github: 'https://github.com/KARTHI212006?tab=repositories',
    demo: null,
    img: 'assets/images/irrigation.webp',
    metrics: { telemetry: 'Real-time Soil Sensing', hardware: 'Relay Automated', efficiency: 'Eco Water Saving' }
  }
];
