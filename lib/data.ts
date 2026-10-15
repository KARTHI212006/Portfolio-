export const CGPA = "8.94";

export interface PersonalInfo {
  name: string;
  gradientWordmark: string;
  role: string;
  roles: string[];
  location: string;
  email: string;
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
  badge?: string;
  image: string;
  description: string;
}

export const personalInfo: PersonalInfo = {
  name: "KARTHIKEYAN S",
  gradientWordmark: "KARTHIKEYAN S",
  role: "Java Full Stack Developer",
  roles: ["Java Full Stack Developer"],
  location: "Salem, Tamil Nadu, India",
  email: "karthikeyankarthikeyan1710@gmail.com",
  github: "https://github.com/KARTHI212006",
  linkedin: "https://www.linkedin.com/in/karthikeyan-s-467313382",
  instagram: "https://instagram.com/itz_karthi_k_k",
  resumeUrl: "/resume/KARTHIKEYAN_S_RESUME.pdf",
  bio: "Final-year Computer Science student building practical software with Java, MySQL and modern web interfaces, and using AI tools to work faster. My long-term goal is to become an AI Engineer.",
  identityPills: [
    { label: "Degree", value: "B.E. CSE (2027)" },
    { label: "CGPA", value: `${CGPA} / 10` },
    { label: "Internship", value: "IoT Intern @ ZEN 1" },
    { label: "Location", value: "Salem, TN, India" },
  ],
};

export interface StatItem {
  id: string;
  value: string;
  unit?: string;
  label: string;
  note: string;
}

// Only verified values. Projects are intentionally not counted until the list is final.
export const statsList: StatItem[] = [
  { id: "cgpa", value: CGPA, unit: "/10", label: "CGPA", note: "B.E. Computer Science" },
  { id: "graduation", value: "2027", label: "Graduation", note: "Expected" },
  { id: "internship", value: "34", unit: "days", label: "IoT internship", note: "ZEN 1 Tech Park" },
  { id: "certificates", value: "3", label: "Certificates", note: "Internship, Full Stack, IoT" },
];

export const educationList: EducationItem[] = [
  {
    id: "college",
    institution: "M.P. Nachimuthu M. Jaganathan Engineering College",
    degree: "B.E. Computer Science Engineering",
    period: "2023 - 2027 (Expected Graduation)",
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
        name: "C & C++",
        description: "Programming fundamentals, plus C++ for Arduino firmware in my IoT projects",
        icon: "Terminal",
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
        description: "Utility-first styling, design tokens and responsive layouts",
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
    badge: "WEB DEVELOPMENT",
    title: "GameVault",
    category: "Web Development",
    shortDesc: "A responsive gaming website for browsing the latest gaming news, official game trailers and current game prices.",
    problem: "News, trailers and prices for popular games are spread across many different sites.",
    solution: "Built a responsive site that organizes game news, official trailers and prices in one clean interface.",
    features: [
      "Latest gaming news section",
      "Official game trailers",
      "Current prices of popular games",
      "Responsive layout for mobile, tablet and desktop",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    result: "",
    myContribution: "Designed the responsive pages, organized the game information and deployed the site on Vercel.",
    githubUrl: null, // No GameVault repository link has been supplied
    // Supplied by the owner. This is a per-deployment Vercel URL that could not be opened from the build sandbox,
    // so confirm it loads in a private browser window (preview URLs can sit behind Vercel login protection).
    liveUrl: "https://next-program-j8j140j9d-kk-5bd7.vercel.app/",
    image: "/images/gamevault.jpg",
  },
  {
    id: "smart-irrigation",
    badge: "IOT & AUTOMATION",
    title: "Smart Irrigation System",
    category: "AI & IoT",
    shortDesc: "An IoT-based irrigation system that uses soil moisture sensors to automate watering, save water and reduce manual effort.",
    problem: "Watering crops by hand wastes water and needs daily attention.",
    solution: "Designed the project workflow and implemented automation logic that reads soil moisture sensors and controls irrigation.",
    features: [
      "Soil moisture sensing",
      "Automated irrigation control",
      "Arduino-based sensor integration",
      "Designed to conserve water",
    ],
    tech: ["Arduino", "IoT Sensors", "Embedded C++"],
    result: "",
    myContribution: "Designed the end-to-end workflow, implemented the automation logic and integrated the sensors.",
    githubUrl: null, // No public repository for this project
    liveUrl: null,
    image: "/images/irrigation.jpg",
  },
  {
    id: "bus-booking",
    badge: "JAVA & MYSQL",
    title: "Bus Booking Management System",
    category: "Java & Backend",
    shortDesc: "A Java console application backed by MySQL for managing buses, passengers, bookings and payments.",
    problem: "Booking tickets by hand makes it hard to track seats, passengers and payments in one place.",
    solution: "Built an object-oriented Java console app that stores buses, passengers, bookings and payments in MySQL through JDBC and updates seat availability on every booking and cancellation.",
    features: [
      "Login that checks a users table and applies roles",
      "Add, view, search by bus number, update fare and delete buses",
      "Add, view, search, update and delete passengers",
      "Book a seat (reduces available seats) and cancel a booking (restores the seat)",
      "Record payments and view totals for buses, bookings and revenue",
    ],
    tech: ["Java", "JDBC", "MySQL", "OOP"],
    result: "",
    myContribution: "Implemented the Java classes, menus, booking and cancellation logic and the JDBC queries.",
    githubUrl: "https://github.com/KARTHI212006/BusbookingSystemManagement",
    liveUrl: null,
    image: "/images/bus_booking_console.png",
  },
  {
    id: "employee-attendance",
    badge: "JAVA & MYSQL",
    title: "Employee Attendance Tracking System",
    category: "Java & Backend",
    shortDesc: "A Java console application with MySQL for managing employees, daily attendance, leave requests and reports.",
    problem: "Paper registers make attendance and leave records hard to keep accurate and hard to summarize.",
    solution: "Built a menu-driven Java app with role-based login that keeps employee, attendance and leave records in MySQL through JDBC and builds reports from SQL queries.",
    features: [
      "Role-based login for admin and employee accounts",
      "Admin tools to add, search, update and delete employees",
      "Daily attendance marked as present or absent, with check-in and check-out times",
      "Leave management: apply, view, search and update leave status",
      "Reports for attendance by employee, leaves and overall attendance",
      "In progress: employee self-service screens (my attendance, apply leave, my leave)",
    ],
    tech: ["Java", "JDBC", "MySQL", "Console UI"],
    result: "",
    myContribution: "Implemented the Java modules for employees, attendance, leave and reports, plus the MySQL data layer.",
    githubUrl: "https://github.com/KARTHI212006/Employee-Attendance-Tracking-System",
    liveUrl: null,
    image: "/images/employee_attendance_console.png",
  },
  {
    id: "portfolio",
    badge: "WEB & MOTION",
    title: "Developer Portfolio",
    category: "Web Development",
    shortDesc: "This website: a responsive Next.js portfolio exported as static files and deployed on Vercel.",
    problem: "Recruiters need to find projects, skills, certificates and the resume quickly on any device.",
    solution: "Built a static Next.js site with dark and light sections, GSAP scroll animations that respect reduced-motion settings, and links to the real repositories.",
    features: [
      "Floating navigation with active-section highlighting and an accessible mobile menu",
      "Dark and light sections joined by SVG curve transitions",
      "GSAP and ScrollTrigger reveals with reduced-motion support",
      "Project case-study dialogs and a contact form that opens your email app",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP", "Vercel"],
    result: "",
    myContribution: "Design, front-end implementation, animation and deployment.",
    githubUrl: "https://github.com/KARTHI212006/Portfolio-",
    liveUrl: "https://s-karthikeyan-portfolio.vercel.app/",
    image: "/images/portfolio.jpg",
  },
];

export const experienceList: ExperienceItem[] = [
  {
    id: "zen1-internship",
    company: "ZEN 1 Tech Park",
    role: "IoT Intern",
    domain: "Internet of Things & Embedded Systems",
    period: "22 June 2026 - 25 July 2026",
    duration: "34 Days",
    location: "Coimbatore, Tamil Nadu",
    description: "Completed an intensive 34-day IoT internship program developing practical hardware-software automation systems.",
    achievements: [
      "Worked with microcontroller micro-architectures, sensor integration, and relay control systems",
      "Programmed embedded firmware logic for real-time sensor monitoring and data processing",
      "Gained hands-on practical experience in IoT system design, debugging, and hardware safety protocols",
    ],
    certificateImage: "/certificates/zen1_internship_certificate.webp",
  },
];

export const certificatesList: CertificateItem[] = [
  {
    id: "novitech-fullstack-cert",
    title: "30 Days MasterClass in Full Stack Development",
    issuer: "NoviTech R&D Private Limited, Coimbatore",
    date: "19 Jun 2025 - 23 Jul 2025 (30 Days)",
    credentialId: "NT_B41FSD290",
    badge: "ISO 9001:2015 CERTIFIED",
    image: "/certificates/novitech_fullstack_certificate.webp",
    description: "Successfully completed an intensive 30-day MasterClass covering full-stack web engineering, frontend UI architectures, backend API services, and modern database integration. Certified under ISO 9001:2015 quality standards (Cert ID: NT_B41FSD290).",
  },
  {
    id: "zen1-cert",
    title: "IoT Industrial Internship Certificate",
    issuer: "ZEN 1 TECHPARK, Coimbatore (HPE Partner)",
    date: "22 Jun 2026 - 25 Jul 2026 (34 Days)",
    credentialId: "23CSE15 (MSME & AICTE)",
    badge: "HPE PARTNER / ISO 9001",
    image: "/certificates/zen1_internship_certificate.webp",
    description: "Official internship certification for 34 days of intensive hardware-software engineering, sensor telemetry, and embedded microcontroller automation. Recognised by HPE, MSME (Govt. of India), and AICTE.",
  },
  {
    id: "kongu-iot-bootcamp-cert",
    title: "Hands-on IoT Bootcamp: Idea to Prototype",
    issuer: "Kongu Engineering College, Perundurai (Autonomous)",
    date: "10 April 2026",
    credentialId: "KEC-CSE-IIPC-2026",
    badge: "AUTONOMOUS / IIPC CELL",
    image: "/certificates/kongu_iot_bootcamp_certificate.webp",
    description: "Hands-on technical workshop certificate presented by the Department of Computer Science & Engineering and Industry Institute Partnership Cell (IIPC) at Kongu Engineering College for successfully translating IoT concepts into working physical prototypes.",
  },
];

export const careerGoal = {
  title: "Current Career Goal",
  statement: "Building strong expertise in Java Full Stack Development and Artificial Intelligence, with a long-term goal of becoming an AI Engineer.",
  supportingText: "Dedicated to mastering robust backend systems, relational databases, and modern web architectures while integrating intelligent AI workflows to solve real-world problems.",
};

export const interestsList: string[] = [
  "Artificial Intelligence & LLMs",
  "Full Stack Web Development",
  "Prompt Engineering",
  "Microcontrollers & IoT Systems",
  "Java Object-Oriented Architecture",
  "Open Source Developer Tools",
];
