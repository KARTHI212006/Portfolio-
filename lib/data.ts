export interface PersonalInfo {
  name: string;
  gradientWordmark: string;
  role: string;
  roles: string[];
  location: string;
  email: string;
  phone: string; // Note to user: Confirm if +91 90422 66085 is current
  github: string;
  linkedin: string;
  instagram: string;
  resumeUrl: string;
  bio: string;
  identityPills: { label: string; value: string }[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  highlights: string[];
  isCurrent?: boolean;
}

export interface SkillCategory {
  title: string;
  badge: string;
  skills: {
    name: string;
    description: string;
    icon: string;
  }[];
}

export interface ProjectItem {
  id: string;
  badge: string;
  title: string;
  category: string;
  shortDesc: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  result: string;
  myContribution: string;
  githubUrl: string | null;
  liveUrl: string | null;
  image: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  domain: string;
  period: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  certificateImage?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  image: string;
  description: string;
}

export const personalInfo: PersonalInfo = {
  name: "KARTHIKEYAN S",
  gradientWordmark: "KARTHIKEYAN S",
  role: "Full Stack Web Developer & AI Engineer",
  roles: [
    "Full Stack Web Developer",
    "AI & Software Developer",
    "Prompt Engineer",
  ],
  location: "Salem, Tamil Nadu, India",
  email: "karthikeyankarthikeyan1710@gmail.com",
  phone: "+91 90422 66085", // TODO: User, confirm if phone number is current
  github: "https://github.com/KARTHI212006",
  linkedin: "https://www.linkedin.com/in/karthikeyan-s-467313382",
  instagram: "https://instagram.com/itz_karthi_k_k",
  resumeUrl: "/resume/KARTHIKEYAN_S_RESUME.pdf",
  bio: "Final-year Computer Science Engineering student focused on full-stack web development, intelligent AI applications, and hardware-software integration.",
  identityPills: [
    { label: "Degree", value: "B.E. CSE (2027)" },
    { label: "Internship", value: "IoT Intern @ ZEN 1" },
    { label: "Location", value: "Salem, TN, India" },
  ],
};

export const educationList: EducationItem[] = [
  {
    id: "college",
    institution: "M.P. Nachimuthu M. Jaganathan Engineering College",
    degree: "B.E. Computer Science Engineering",
    period: "2023 – 2027 (Expected Graduation)",
    location: "Chennimalai, Erode, Tamil Nadu",
    highlights: [
      "Specializing in Software Development, Database Management, and AI Applications",
      "Hands-on projects in Web Engineering, IoT hardware control, and Java relational databases",
      "Actively preparing for AI Engineering and Software Development career opportunities",
    ],
    isCurrent: true,
  },
  {
    id: "school",
    institution: "Sengunthar Matric Higher Secondary School",
    degree: "Higher Secondary Education (HSC & SSLC)",
    period: "Completed 2023",
    location: "Salem, Tamil Nadu",
    highlights: [
      "Completed Higher Secondary Education with focus on Physics, Mathematics, and Computer Science",
      "Developed foundational logic, analytical problem solving, and basic computer programming",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    badge: "CORE LOGIC",
    skills: [
      {
        name: "Python",
        description: "Core scripting, automation, AI model interaction & data processing",
        icon: "Terminal",
      },
      {
        name: "Java",
        description: "Object-oriented design, JDBC data access layer & MySQL integrations",
        icon: "Coffee",
      },
      {
        name: "JavaScript",
        description: "Modern ES6+, async DOM logic, interactive web applications",
        icon: "FileCode2",
      },
      {
        name: "HTML5 & CSS3",
        description: "Semantic structures, modern visual flex/grid design & responsive layouts",
        icon: "Layout",
      },
    ],
  },
  {
    title: "Web & Software Architecture",
    badge: "FULL STACK",
    skills: [
      {
        name: "Full Stack Web Dev",
        description: "Building responsive UI components, REST APIs & database systems",
        icon: "Globe",
      },
      {
        name: "Node.js & Express Basics",
        description: "Backend HTTP servers, API route handling & JSON data communication",
        icon: "Server",
      },
      {
        name: "MySQL & Database Design",
        description: "Relational table architecture, SQL query logic & data integrity",
        icon: "Database",
      },
      {
        name: "Tailwind & Utility CSS",
        description: "Utility-first design, dark-mode glassmorphic cards & layout tokens",
        icon: "Sparkles",
      },
    ],
  },
  {
    title: "AI & Engineering Tools",
    badge: "INTELLIGENT TOOLS",
    skills: [
      {
        name: "Prompt Engineering",
        description: "Crafting structured LLM prompts, context optimization & autonomous AI agents",
        icon: "Cpu",
      },
      {
        name: "AI Tools (ChatGPT, Claude, Gemini)",
        description: "Accelerating full-stack development, code refactoring & algorithm design",
        icon: "Bot",
      },
      {
        name: "IoT & Arduino",
        description: "Sensor integration, embedded logic & automated pump hardware control",
        icon: "Zap",
      },
      {
        name: "Git, GitHub & Vercel",
        description: "Version control, collaborative code management & continuous web deployment",
        icon: "GitBranch",
      },
    ],
  },
];

export const projectsList: ProjectItem[] = [
  {
    id: "gamevault",
    badge: "FEATURED PROJECT",
    title: "GameVault",
    category: "Web Development",
    shortDesc: "A modern, responsive gaming platform for discovering gaming news, trailers, and price updates without framework overhead.",
    problem: "Gaming enthusiasts require a lightweight, visual portal to discover game details without slow page load times.",
    solution: "Engineered a web application featuring fluid component design, trailer preview modals, and zero external framework bloat.",
    features: [
      "Responsive multi-device game showcase layout",
      "Dynamic game cards & trailer preview links",
      "Glassmorphism dark UI with optimized asset delivery",
      "Ultra-fast DOM rendering and clean code architecture",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    result: "Achieved instant page loads and fluid responsiveness across mobile, tablet, and desktop viewports.",
    myContribution: "Sole Developer — Designed UI/UX layout, built DOM interactions, and deployed live instance on Vercel.",
    githubUrl: "https://github.com/KARTHI212006",
    liveUrl: "https://s-karthikeyan-portfolio.vercel.app/",
    image: "/images/gamevault.jpg",
  },
  {
    id: "smart-irrigation",
    badge: "IOT & AUTOMATION",
    title: "Smart Irrigation System",
    category: "AI & IoT",
    shortDesc: "An IoT-based automated agricultural system that continuously measures soil moisture and automates water pump relay operations.",
    problem: "Traditional farming methods waste significant water resources and rely on manual daily moisture inspection.",
    solution: "Designed an embedded IoT prototype connecting soil moisture sensors to a microcontroller that activates irrigation automatically when moisture drops below threshold.",
    features: [
      "Real-time soil moisture level detection",
      "Automated water pump relay control logic",
      "Power-efficient microcontroller firmware",
      "Conserves agricultural water and prevents over-irrigation",
    ],
    tech: ["Arduino", "IoT Sensors", "Embedded C++", "Relay Automation"],
    result: "Demonstrated reliable automated irrigation, reducing water waste while maintaining optimal soil moisture.",
    myContribution: "IoT Lead Developer — Integrated sensor hardware, programmed microcontroller thresholds, and validated circuit stability.",
    githubUrl: "https://github.com/KARTHI212006",
    liveUrl: null, // Hidden as no live URL exists
    image: "/images/irrigation.jpg",
  },
  {
    id: "bus-booking",
    badge: "JAVA & DATABASE",
    title: "Bus Booking Management System",
    category: "Java & Backend",
    shortDesc: "A robust Java application integrated with a relational MySQL database for managing bus schedules and ticket reservations.",
    problem: "Manual bus ticket reservation causes booking conflicts, disorganized passenger logs, and inefficient route management.",
    solution: "Built an object-oriented Java application connected via JDBC to a MySQL database to manage seat availability and passenger bookings in real-time.",
    features: [
      "Bus route search & schedule management",
      "Passenger details logging & seat reservation",
      "JDBC relational database persistence in MySQL",
      "Automated ticket ID generation & record queries",
    ],
    tech: ["Java", "MySQL", "JDBC", "OOP Architecture"],
    result: "Prevented booking conflicts and structured SQL data persistence for passenger ticket reservations.",
    myContribution: "Backend & DB Developer — Designed relational tables, wrote JDBC queries, and implemented core Java business logic.",
    githubUrl: "https://github.com/KARTHI212006",
    liveUrl: null, // Hidden as no live URL exists
    image: "/images/gamevault.jpg",
  },
];

export const experienceList: ExperienceItem[] = [
  {
    id: "zen1-internship",
    company: "ZEN 1 Tech Park",
    role: "IoT Intern",
    domain: "Internet of Things & Embedded Systems",
    period: "22 June 2026 – 25 July 2026",
    duration: "34 Days",
    location: "Coimbatore, Tamil Nadu",
    description: "Completed an intensive 34-day IoT internship program developing practical hardware-software automation systems.",
    achievements: [
      "Worked with microcontroller micro-architectures, sensor integration, and relay control systems",
      "Programmed embedded firmware logic for real-time sensor monitoring and data processing",
      "Gained hands-on practical experience in IoT system design, debugging, and hardware safety protocols",
    ],
    certificateImage: "/certificates/zen1_internship_certificate.png",
  },
];

export const certificatesList: CertificateItem[] = [
  {
    id: "zen1-cert",
    title: "IoT Internship Certificate of Completion",
    issuer: "ZEN 1 Tech Park, Coimbatore",
    date: "July 2026",
    credentialId: "ZEN1-IOT-2026-34D",
    image: "/certificates/zen1_internship_certificate.png",
    description: "Certificate awarded for successfully completing a 34-day practical internship in Internet of Things (IoT) development and hardware automation.",
  },
];

export const careerGoal = {
  title: "Career Objective",
  statement: "Become an AI Engineer at Google",
  supportingText: "Passionate about combining full-stack web engineering with cutting-edge artificial intelligence, large language models, and intelligent automated systems to solve complex real-world challenges.",
};

export const interestsList: string[] = [
  "Artificial Intelligence & LLMs",
  "Full Stack Web Development",
  "Prompt Engineering",
  "Microcontrollers & IoT Systems",
  "Java Object-Oriented Architecture",
  "Open Source Developer Tools",
];
