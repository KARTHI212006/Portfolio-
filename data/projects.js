/**
 * KARTHIKEYAN S — PORTFOLIO PROJECT DATA
 * Verified real project data for interactive showcases & modals
 */

export const projectsData = [
  {
    id: 'gamevault',
    badge: 'PROJECT 01',
    title: 'GAMEVAULT',
    category: 'web',
    shortDesc: 'A modern, responsive gaming platform designed for discovering gaming news, trailers, and price updates without framework overhead.',
    problem: 'Gaming enthusiasts need a lightweight, engaging portal to discover game details and updates without slow page loads or heavy framework dependencies.',
    solution: 'Engineered a pure HTML5, CSS3, and Vanilla JS web platform featuring custom UI components, smooth layout transitions, and optimized asset delivery.',
    features: [
      'Responsive multi-device game discovery layout',
      'Dynamic game card showcase & trailer preview links',
      'Pure CSS glassmorphism & zero external JS framework bloat',
      'Optimized performance with fast DOM rendering'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    result: 'Achieved ultra-fast page load speed and 100% fluid responsiveness across mobile, tablet, and desktop viewports.',
    myContribution: 'Sole Developer — Designed visual UI/UX layout, built DOM interactions, and deployed live instance on Vercel.',
    github: 'https://github.com/KARTHI212006',
    demo: 'https://s-karthikeyan-portfolio.vercel.app/',
    img: 'assets/images/gamevault.jpg'
  },
  {
    id: 'smart-irrigation',
    badge: 'PROJECT 02',
    title: 'SMART IRRIGATION SYSTEM',
    category: 'ai-iot',
    shortDesc: 'An IoT-based automated agricultural system that continuously measures soil moisture levels and automates water pump control.',
    problem: 'Traditional farming methods waste significant water and require manual labor for daily soil moisture inspection.',
    solution: 'Designed an embedded IoT prototype connecting soil moisture sensors to a microcontroller that automatically activates irrigation when moisture drops below threshold.',
    features: [
      'Real-time soil moisture level detection',
      'Automated water pump relay control logic',
      'Power-efficient microcontroller firmware',
      'Conserves water resources and prevents over-watering'
    ],
    tech: ['Arduino', 'IoT', 'Sensors', 'Embedded Systems', 'Automation'],
    result: 'Demonstrated reliable automated irrigation, reducing water usage while maintaining optimal soil moisture.',
    myContribution: 'IoT Project Lead — Integrated sensor hardware, wrote microcontroller logic, and validated sensor thresholds.',
    github: 'https://github.com/KARTHI212006',
    demo: null,
    img: 'assets/images/irrigation.jpg'
  },
  {
    id: 'bus-booking',
    badge: 'PROJECT 03',
    title: 'BUS BOOKING MANAGEMENT SYSTEM',
    category: 'java',
    shortDesc: 'A robust Java application with database connectivity for managing bus schedules, passenger bookings, and ticket records.',
    problem: 'Manual bus ticket reservation leads to booking conflicts, unorganized passenger logs, and inefficient schedule tracking.',
    solution: 'Built an object-oriented Java application integrated with a relational MySQL database via JDBC to manage real-time seat availability and booking records.',
    features: [
      'Bus schedule search & route management',
      'Passenger details logging & seat reservation',
      'JDBC-based relational data persistence in MySQL',
      'Automated ticket ID generation & record query system'
    ],
    tech: ['Java', 'MySQL', 'JDBC', 'OOP'],
    result: 'Ensured zero double-booking conflicts and structured SQL data storage for passenger reservations.',
    myContribution: 'Backend & Database Developer — Designed database schema, wrote JDBC data access layers, and implemented core Java business logic.',
    github: 'https://github.com/KARTHI212006',
    demo: null,
    img: 'assets/images/gamevault.jpg'
  }
];
