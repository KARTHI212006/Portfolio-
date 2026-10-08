/**
 * KARTHIKEYAN S — SMART DEVELOPER CLI v3.0
 * Interactive bash-style terminal with recruiter easter eggs & live stats
 */

export function initTerminal() {
  const terminalInput  = document.getElementById('terminal-input');
  const terminalOutput = document.getElementById('terminal-output');
  const terminalBody   = document.querySelector('.terminal-body');

  if (!terminalInput || !terminalOutput) return;

  const COMMANDS = {
    help: `Available commands:
  • <span class="cmd-highlight">whoami</span>       - Developer identity & primary focus
  • <span class="cmd-highlight">about</span>        - Background, education & location
  • <span class="cmd-highlight">skills</span>       - Technical ecosystem & proficiency
  • <span class="cmd-highlight">projects</span>     - Production web, IoT & Java systems
  • <span class="cmd-highlight">experience</span>   - 34-day industrial IoT internship
  • <span class="cmd-highlight">certs</span>        - 3 official verified credentials & certifications
  • <span class="cmd-highlight">stats</span>        - Real-time verified metrics & CGPA
  • <span class="cmd-highlight">goal</span>         - Long-term engineering vision
  • <span class="cmd-highlight">contact</span>      - Email, GitHub & LinkedIn links
  • <span class="cmd-highlight">resume</span>       - View & download official resume
  • <span class="cmd-highlight">matrix</span>       - Activate cyberpunk matrix mode
  • <span class="cmd-highlight">hire</span>         - Recruiter fast-track interview mode
  • <span class="cmd-highlight">clear</span>        - Clear terminal screen`,

    whoami: `<span class="cmd-cyan font-bold">KARTHIKEYAN S</span> — <span class="cmd-green">JAVA FULL STACK DEVELOPER</span>
Supporting: <span class="cmd-highlight">Java • Spring Boot • JavaScript • MySQL • AI</span>
Secondary:  <span class="cmd-purple">AI & Software Developer</span>
Location:   Salem, Tamil Nadu, India
Status:     <span class="cmd-green font-bold">● OPEN TO OPPORTUNITIES</span>
Focus:      Building modern web apps, backend systems & AI-powered experiences`,

    about: `<span class="cmd-title">ACADEMIC & BACKGROUND</span>
Degree:      B.E. Computer Science and Engineering (2023 – 2027)
Institution: M.P. Nachimuthu M. Jaganathan Engineering College, Erode
Academic:    <span class="cmd-cyan font-bold">7.94 / 10 CGPA</span>
Focus:       Java Full Stack Development, Backend, Relational Databases & AI`,

    skills: `<span class="cmd-title">TECHNICAL ECOSYSTEM MATRIX</span>
  [Core Development] <span class="cmd-cyan">Java (OOP, Data Structures), MySQL, JDBC</span>
  [Web Development]  <span class="cmd-cyan">HTML5, CSS3, JavaScript (ES6+)</span>
  [Backend Systems]  <span class="cmd-cyan">Spring Boot, REST APIs, MySQL Relational Architecture</span>
  [Tools & DevOps]   <span class="cmd-highlight">Git, GitHub, VS Code, Postman, Vercel</span>
  [Artificial Intel] <span class="cmd-purple">Prompt Engineering, AI APIs, AI-Assisted Development</span>`,

    projects: `<span class="cmd-title">VERIFIED PRODUCTION PROJECTS (4)</span>
  1. <span class="cmd-cyan font-bold">GAMEVAULT</span> [Full-Stack Web Discovery Platform]
     → React + Vite + Supabase + Tailwind CSS + Framer Motion. AAA discovery & cart/wishlist.
  2. <span class="cmd-cyan font-bold">BUS BOOKING MANAGEMENT SYSTEM</span> [Java Backend & MySQL]
     → Java OOP architecture with JDBC relational persistence & seat reservation logic.
  3. <span class="cmd-cyan font-bold">EMPLOYEE ATTENDANCE TRACKING SYSTEM</span> [Java Swing Desktop App]
     → Java Swing UI + MySQL JDBC. Role-based auth, daily tracking & leave reports.
  4. <span class="cmd-cyan font-bold">SMART IRRIGATION SYSTEM</span> [IoT & Embedded Automation]
     → Soil moisture telemetry with Arduino microcontroller firmware & automated relay switching.`,

    experience: `<span class="cmd-title">INDUSTRIAL EXPERIENCE</span>
Organization: <span class="cmd-cyan font-bold">ZEN 1 TECHPARK</span>, Coimbatore, Tamil Nadu
Role:         IoT Intern
Duration:     22 June 2026 – 25 July 2026 (<span class="cmd-green font-bold">34 Days</span>)
Practical:    Sensor telemetry, microcontroller firmware, automated relay control & prototyping.`,

    certs: `<span class="cmd-title">OFFICIAL ACCREDITED CREDENTIALS (3)</span>
  1. <span class="cmd-cyan font-bold">30 Days MasterClass in Full Stack Development</span>
     • NoviTech R&D Pvt. Ltd. | Cert ID: NT_B41FSD290 | ISO 9001:2015
  2. <span class="cmd-green font-bold">IoT Industrial Internship Certificate (34 Days)</span>
     • ZEN 1 TECHPARK (HPE Partner, AICTE & MSME) | Roll: 23CSE15
  3. <span class="cmd-purple font-bold">Hands-on IoT Bootcamp: Idea to Prototype</span>
     • Kongu Engineering College (Autonomous, Perundurai) | IIPC Cell`,

    certifications: `<span class="cmd-title">OFFICIAL ACCREDITED CREDENTIALS (3)</span>
  1. <span class="cmd-cyan font-bold">30 Days MasterClass in Full Stack Development</span>
     • NoviTech R&D Pvt. Ltd. | Cert ID: NT_B41FSD290 | ISO 9001:2015
  2. <span class="cmd-green font-bold">IoT Industrial Internship Certificate (34 Days)</span>
     • ZEN 1 TECHPARK (HPE Partner, AICTE & MSME) | Roll: 23CSE15
  3. <span class="cmd-purple font-bold">Hands-on IoT Bootcamp: Idea to Prototype</span>
     • Kongu Engineering College (Autonomous, Perundurai) | IIPC Cell`,

    stats: `<span class="cmd-title">VERIFIED DEVELOPER TELEMETRY</span>
  [✓] Academic CGPA:        <span class="cmd-cyan font-bold">7.94 / 10</span> (B.E. Computer Science)
  [✓] Verified Credentials: <span class="cmd-cyan font-bold">3 Official Certifications</span>
  [✓] Industrial Training:  <span class="cmd-green font-bold">34 Days</span> (ZEN 1 Tech Park IoT Intern)
  [✓] MasterClass:          <span class="cmd-green font-bold">30 Days</span> (NoviTech Full Stack)
  [✓] Production Projects:  <span class="cmd-purple font-bold">4 Verified Engineering Systems</span>
  [✓] Core Technologies:    <span class="cmd-highlight font-bold">Java, Spring Boot, JS, MySQL, AI</span>`,

    goal: `<span class="cmd-purple font-bold">CURRENT CAREER GOAL</span>
Building strong expertise in Java Full Stack Development and Artificial Intelligence, with a long-term goal of becoming an AI Engineer.`,

    contact: `<span class="cmd-title">DIRECT COMMUNICATION CHANNELS</span>
  ✉️ Email:     <a href="mailto:karthikeyankarthikeyan1710@gmail.com" class="cmd-cyan">karthikeyankarthikeyan1710@gmail.com</a>
  🐙 GitHub:    <a href="https://github.com/KARTHI212006" target="_blank" rel="noopener" class="cmd-cyan">github.com/KARTHI212006</a>
  💼 LinkedIn:  <a href="https://www.linkedin.com/in/karthikeyan-s-467313382" target="_blank" rel="noopener" class="cmd-cyan">linkedin.com/in/karthikeyan-s-467313382</a>
  📷 Instagram: <span class="cmd-purple">@itz_karthi_k_k</span>`,

    resume: `<span class="cmd-cyan font-bold">RESUME ACCESS:</span>
📄 Karthikeyan S Resume (PDF) ready for download.
Opening direct download link...`,

    hire: `<span class="cmd-green font-bold">⚡ RECRUITER MODE ACTIVATED!</span>
Candidate Profile: <span class="cmd-cyan">KARTHIKEYAN S (Java Full Stack & AI)</span>
✓ Strong Object-Oriented Fundamentals (Java, JDBC, MySQL)
✓ Frontend & UI/UX Mastery (HTML5, Modern CSS, ES6+)
✓ Industrial IoT Experience & Proven Project Track Record
[Initiating direct contact protocol... Navigating to Contact Section]`,

    'sudo hire karthikeyan': `<span class="cmd-green font-bold">[ROOT PRIVILEGES GRANTED]</span>
===================================================
✓ CANDIDATE SELECTED FOR INTERVIEW! 😎
Authorization ID: RECRUITER_PASS_2026
Match Score: 9.8 / 10 (Full Stack + AI Ready)
===================================================
Opening contact form now... Let's build something remarkable!`
  };

  const commandList = Object.keys(COMMANDS);

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const rawInput = terminalInput.value.trim();
      terminalInput.value = '';
      if (!rawInput) return;

      const lowerCmd = rawInput.toLowerCase();
      processCommand(rawInput, lowerCmd);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const current = terminalInput.value.trim().toLowerCase();
      if (!current) return;

      const match = commandList.find(cmd => cmd.startsWith(current));
      if (match) {
        terminalInput.value = match;
      }
    }
  });

  function processCommand(original, cmd) {
    if (cmd === 'clear') {
      terminalOutput.innerHTML = '';
      return;
    }

    const commandLine = document.createElement('div');
    commandLine.className = 'terminal-line command-history';
    commandLine.innerHTML = `<span class="prompt-user">karthikeyan@developer</span>:<span class="prompt-dir">~</span>$ <span class="cmd-input-text">${escapeHtml(original)}</span>`;
    terminalOutput.appendChild(commandLine);

    const responseLine = document.createElement('div');
    responseLine.className = 'terminal-line command-response';

    if (cmd === 'matrix') {
      runMatrixEffect(responseLine);
    } else if (cmd === 'resume') {
      responseLine.innerHTML = COMMANDS.resume;
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = 'resume/KARTHIKEYAN_S_RESUME.pdf';
        link.download = 'KARTHIKEYAN_S_RESUME.pdf';
        link.target = '_blank';
        link.click();
      }, 500);
    } else if (cmd === 'hire' || cmd === 'sudo hire karthikeyan') {
      responseLine.innerHTML = COMMANDS[cmd];
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
          const nameField = document.getElementById('name');
          if (nameField) nameField.focus();
        }
      }, 1000);
    } else if (COMMANDS[cmd]) {
      responseLine.innerHTML = COMMANDS[cmd];
    } else {
      responseLine.innerHTML = `<span class="cmd-error">Command not found: '${escapeHtml(original)}'. Type <span class="cmd-highlight">'help'</span> to see available commands or try <span class="cmd-green">'hire'</span>!</span>`;
    }

    terminalOutput.appendChild(responseLine);

    if (terminalBody) {
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  }

  function runMatrixEffect(container) {
    container.innerHTML = `<div class="matrix-rain"><span class="cmd-green">01001011 01000001 01010010 01010100 01001000 01001001<br>SYSTEM ONLINE: NEURAL MATRIX ACTIVATED...<br>JAVA_CORE: OK | MYSQL_POOL: ACTIVE | AI_WORKFLOWS: SYNCED</span></div>`;
  }

  function escapeHtml(text) {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
}
