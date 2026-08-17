// src/data/portfolio.ts

export const personalInfo = {
  name: "KARTHIKEYAN S",
  shortName: "Karthikeyan",
  nickname: "Karthi",
  headline: "Java Developer | Full Stack Web Developer",
  intro: "Seeking an opportunity as a Java Developer or Full Stack Web Developer to apply my programming skills, contribute to real-world software development projects, continuously learn modern technologies, and grow into a professional software engineer while delivering high-quality solutions.",
  about: "I am a Fourth-Year Computer Science and Engineering student at M.P. Nachimuthu M. Jaganathan Engineering College with a CGPA of 7.94 / 10. My journey combines hands-on IoT internship experience at ZEN 1 TECHPARK with full stack web development and Object-Oriented Java applications.",
  objective: "Seeking an opportunity as a Java Developer or Full Stack Web Developer to apply my programming skills, contribute to real-world software development projects, continuously learn modern technologies, and grow into a professional software engineer while delivering high-quality solutions.",
  location: "Salem, Tamil Nadu, India",
  email: "karthikeyankarthikeyan1710@gmail.com",
  phone: "+91 8838726100",
  github: "https://github.com/KARTHI212006",
  linkedin: "https://www.linkedin.com/in/karthikeyan-s-467313382",
  instagram: "https://instagram.com/itz_karthi_k_k",
  motto: "Code. Create. Innovate.",
  profileImage: "/profile.jpg",
  resumeUrl: "/KARTHIKEYAN_S_Resume.pdf",
};

export const education = [
  {
    degree: "Bachelor of Engineering (B.E.)",
    field: "Computer Science and Engineering",
    institution: "M.P. Nachimuthu M. Jaganathan Engineering College",
    location: "Salem / Erode, Tamil Nadu",
    graduationYear: "Expected 2027",
    cgpa: "7.94 / 10",
    status: "Fourth Year (Currently Pursuing)",
    icon: "🎓",
    color: "#8B5CF6",
    highlights: [
      "CGPA: 7.94 / 10 — Solid Academic Record in CSE",
      "Focused on Java Development, Data Structures, OOP & Web Technologies",
      "Completed IoT Internship & Full Stack Web Projects",
    ],
  },
];

export const internship = {
  company: "ZEN 1 Tech Park",
  location: "Coimbatore, Tamil Nadu",
  domain: "Internet of Things (IoT)",
  duration: "25 June 2026 – 25 July 2026",
  role: "IoT Engineering Intern",
  description:
    "Completed an intensive, hands-on internship focused on IoT technologies, embedded systems, and practical hardware-software project development. Worked with IoT devices, integrated sensors, assisted in testing and debugging, and gained real-world IoT development experience.",
  learnings: [
    "Worked with IoT devices and embedded systems hardware",
    "Integrated soil moisture sensors and relay control logic",
    "Assisted in testing, debugging, and validation of embedded circuits",
    "Learned real-world IoT development practices and team collaboration",
  ],
  icon: "🌐",
  color: "#10B981",
};

export const stats = [
  { label: "Projects Completed", value: 3, suffix: "+" },
  { label: "Programming Languages", value: 3, suffix: "+" },
  { label: "Certifications", value: 3, suffix: "+" },
  { label: "Internship", value: 1, suffix: "" },
];

export const interests = [
  { name: "Prompt Engineering", icon: "✨", desc: "Designing optimized prompts, AI agent workflows & context frameworks" },
  { name: "Artificial Intelligence", icon: "🤖", desc: "LLMs, Neural Networks & cutting-edge AI tools" },
  { name: "Java Development", icon: "☕", desc: "OOP, data structures & console application development" },
  { name: "Full Stack Development", icon: "🌐", desc: "HTML, CSS, JavaScript — building responsive web apps" },
  { name: "Gaming Technology", icon: "🕹️", desc: "Exploring game design, mechanics & interactive experiences" },
  { name: "Story-Based Games", icon: "🎮", desc: "Immersive storytelling, world-building & narrative gameplay" },
  { name: "Software Development", icon: "💻", desc: "Clean architecture, algorithms & scalable software systems" },
];

export const skillsCategory = [
  {
    title: "Programming Languages",
    icon: "💻",
    description: "Core programming fundamentals & web scripting languages",
    skills: [
      { name: "Java", level: 85, icon: "☕", color: "#007396", tag: "Advanced" },
      { name: "Python", level: 65, icon: "🐍", color: "#3776AB", tag: "Intermediate" },
      { name: "JavaScript", level: 75, icon: "⚡", color: "#F7DF1E", tag: "Intermediate" },
    ],
  },
  {
    title: "Frontend",
    icon: "🎨",
    description: "Building responsive, modern user interfaces",
    skills: [
      { name: "HTML5", level: 90, icon: "🌐", color: "#E34F26", tag: "Advanced" },
      { name: "CSS3", level: 85, icon: "🎨", color: "#1572B6", tag: "Advanced" },
    ],
  },
  {
    title: "Tools & Concepts",
    icon: "🛠️",
    description: "Developer tools, version control & core CS concepts",
    skills: [
      { name: "Git", level: 75, icon: "🔀", color: "#F05032", tag: "Intermediate" },
      { name: "GitHub", level: 78, icon: "🐙", color: "#8B5CF6", tag: "Intermediate" },
      { name: "MySQL", level: 60, icon: "🗄️", color: "#4479A1", tag: "Basic" },
      { name: "VS Code", level: 90, icon: "🖥️", color: "#007ACC", tag: "Advanced" },
      { name: "OOP Concepts", level: 88, icon: "📦", color: "#10B981", tag: "Advanced" },
      { name: "Data Structures", level: 75, icon: "🧮", color: "#EC4899", tag: "Intermediate" },
    ],
  },
  {
    title: "Currently Learning",
    icon: "🚀",
    description: "Actively expanding my backend & framework knowledge",
    skills: [
      { name: "Spring Boot", level: 30, icon: "🌱", color: "#6DB33F", tag: "Learning" },
      { name: "JDBC", level: 35, icon: "🔗", color: "#4479A1", tag: "Learning" },
      { name: "React", level: 40, icon: "⚛️", color: "#61DAFB", tag: "Learning" },
    ],
  },
];

export const skills = skillsCategory.map((cat) => ({
  category: cat.title,
  icon: cat.icon,
  items: cat.skills,
}));

export const projects = [
  {
    id: 1,
    title: "Smart Irrigation System",
    subtitle: "IoT-Based Automated Precision Water Management",
    description:
      "Developed an IoT-based Smart Irrigation System using soil moisture sensors to automate irrigation and improve water conservation.",
    fullDescription:
      "Built with microcontrollers and soil moisture sensors, this Smart Irrigation System detects soil dryness and triggers automated water pumps. The system reads real-time sensor data, applies threshold-based logic, and activates relay control to ensure optimal crop moisture while conserving water resources.",
    features: [
      "Real-time Soil Moisture Sensing & Threshold Detection",
      "Automated Relay Control for Precision Irrigation",
      "Low-Power Embedded Hardware Operations",
      "Visual Alert System for Dry/Wet States",
    ],
    tech: ["IoT", "Embedded Systems", "Arduino", "Soil Moisture Sensor"],
    image: "/projects/irrigation.jpg",
    color: "#10B981",
    category: "IoT",
    githubUrl: "https://github.com/KARTHI212006",
    liveUrl: "",
    featured: true,
    emoji: "🌱",
  },
  {
    id: 2,
    title: "Gaming Vault",
    subtitle: "Responsive Gaming News & Showcase Portal",
    description:
      "Gaming Vault is a responsive website where users can explore the latest gaming news, watch official game trailers, and view current prices of popular games.",
    fullDescription:
      "GameVault is an immersive gaming portal designed with a modern high-end dark interface, smooth animations, and responsive layouts. Users can explore the latest gaming news, watch official trailers for upcoming titles, and check current game prices — all in a beautifully crafted web experience.",
    features: [
      "Modern Dark Gaming UI with glassmorphic cards",
      "Fully Responsive Layout across all device screens",
      "Gaming News Feed & Trailer Showcase",
      "Current Pricing Information for Popular Games",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/projects/gamevault.jpg",
    color: "#8B5CF6",
    category: "Web Development",
    githubUrl: "https://github.com/KARTHI212006",
    liveUrl: "https://github.com/KARTHI212006",
    featured: true,
    emoji: "🎮",
  },
  {
    id: 3,
    title: "Bus Booking Management System",
    subtitle: "Java Console Application with OOP Architecture",
    description:
      "Developed a Java console application that allows users to view available buses, book tickets, cancel bookings, and manage passenger information using OOP concepts.",
    fullDescription:
      "A fully functional Bus Booking Management System built as a Java console application. The system uses Object-Oriented Programming principles — including classes, objects, inheritance, and encapsulation — to manage bus schedules, ticket booking, seat availability, cancellation flows, and passenger records.",
    features: [
      "View Available Buses & Seat Availability",
      "Book & Cancel Tickets with Confirmation",
      "Passenger Information Management",
      "OOP-Driven Architecture (Classes, Inheritance, Encapsulation)",
    ],
    tech: ["Java"],
    image: "/projects/bus.jpg",
    color: "#F59E0B",
    category: "Java Application",
    githubUrl: "https://github.com/KARTHI212006",
    liveUrl: "",
    featured: true,
    emoji: "🚌",
  },
];

export const experience = [
  {
    title: "IoT Engineering Intern",
    company: "ZEN 1 Tech Park, Coimbatore",
    period: "25 June 2026 – 25 July 2026",
    description:
      "Hands-on internship in IoT technology, embedded systems, sensor integration, and automated actuation systems.",
    type: "internship",
    icon: "🌐",
    color: "#10B981",
  },
  {
    title: "B.E. Computer Science & Engineering",
    company: "M.P. Nachimuthu M. Jaganathan Engineering College",
    period: "2023 – 2027",
    description:
      "Pursuing BE Degree with focus on Data Structures, Java Development, Web Development & OOP.",
    type: "education",
    icon: "🎓",
    color: "#8B5CF6",
  },
];

export const certificates = [
  {
    title: "30 Days MasterClass in Full Stack Web Development",
    issuer: "Online Platform",
    date: "2025",
    icon: "🌐",
    color: "#06B6D4",
    credentialId: "FSWD-30DAY-2025",
    skillsVerified: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Web Projects"],
    description: "Intensive 30-day masterclass covering the full stack web development lifecycle from HTML fundamentals to JavaScript interactivity and responsive design.",
  },
  {
    title: "AI Bootcamp (IoT)",
    issuer: "ZEN 1 Tech Park",
    date: "July 2026",
    icon: "🔌",
    color: "#10B981",
    credentialId: "AI-IOT-BOOTCAMP-2026",
    skillsVerified: ["IoT", "Arduino", "Sensors", "Embedded Systems", "AI Integration"],
    description: "Completed an AI-integrated IoT bootcamp covering embedded hardware, sensor data acquisition, and automation logic in real-world systems.",
  },
  {
    title: "AI For Everyone",
    issuer: "DeepLearning.AI",
    date: "2025",
    icon: "🤖",
    color: "#8B5CF6",
    credentialId: "DL-AI4E-2025",
    skillsVerified: ["AI Strategy", "Machine Learning Concepts", "Neural Networks Intro", "AI Workflow"],
    description: "Foundational AI course by Andrew Ng covering how AI works, its business applications, and building an AI-first mindset for non-technical and technical audiences.",
  },
];

export const nowLearning = [
  { name: "Spring Boot", icon: "🌱", color: "#6DB33F", desc: "Java backend framework for REST APIs", progress: 30 },
  { name: "JDBC", icon: "🔗", color: "#4479A1", desc: "Java Database Connectivity for MySQL", progress: 35 },
  { name: "React", icon: "⚛️", color: "#61DAFB", desc: "Frontend library for dynamic web UIs", progress: 40 },
];

export const testimonials = [
  {
    name: "ZEN 1 Tech Park Mentor",
    role: "IoT Project Lead",
    company: "ZEN 1 Tech Park",
    avatar: "ZT",
    content:
      "Karthikeyan demonstrated great dedication and problem-solving skill during his IoT internship. His technical growth and teamwork were commendable.",
    rating: 5,
    color: "#10B981",
  },
];

export const services = [
  {
    icon: "☕",
    title: "Java Development",
    description:
      "Building console applications, OOP-based systems, and Java back-end logic using clean, well-structured code.",
    color: "#007396",
    features: ["OOP Architecture", "Java Console Apps", "Data Structures", "Problem Solving"],
  },
  {
    icon: "🌐",
    title: "Full Stack Web Development",
    description:
      "Crafting modern, responsive web applications using HTML5, CSS3, and JavaScript with glassmorphism aesthetics.",
    color: "#06B6D4",
    features: ["Responsive UI/UX", "HTML5 & CSS3", "JavaScript Interactivity", "Performance & SEO"],
  },
  {
    icon: "✨",
    title: "Prompt Engineering",
    description:
      "Designing optimized prompt structures, agent behaviors, and context frameworks for ChatGPT, Claude AI, and Gemini AI.",
    color: "#8B5CF6",
    features: ["System Prompt Architecture", "AI Workflow Automation", "LLM Fine-tuning", "Custom Assistant Design"],
  },
  {
    icon: "🔌",
    title: "IoT Systems Prototyping",
    description:
      "Building smart embedded solutions, sensor monitoring systems, and automated micro-controller hardware integrations.",
    color: "#10B981",
    features: ["Arduino & Sensors", "Automated Actuation", "Sensor Data Acquisition", "Embedded Logic"],
  },
];

export const funFacts = [
  "☕ Passionate Java Developer building real-world console applications",
  "🌐 Full Stack Web Developer specializing in HTML, CSS & JavaScript",
  "🔌 Completed IoT Internship @ ZEN 1 Tech Park, Coimbatore",
  "🎮 Passionate about Story-driven & Gaming Technology",
  "📚 Fourth-Year B.E. CSE Student with CGPA 8.1/10",
  "📍 Based in Salem, Tamil Nadu, India",
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certifications", href: "#certificates" },
  { label: "Interests", href: "#interests" },
  { label: "Contact", href: "#contact" },
];
