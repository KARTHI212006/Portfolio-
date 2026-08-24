/**
 * KARTHIKEYAN S — INTERACTIVE DEVELOPER TERMINAL
 * Real-working JavaScript CLI component
 */

export function initTerminal() {
  const terminalInput  = document.getElementById('terminal-input');
  const terminalOutput = document.getElementById('terminal-output');
  const terminalBody   = document.querySelector('.terminal-body');

  if (!terminalInput || !terminalOutput) return;

  const COMMANDS = {
    help: `Available commands:
  • <span class="cmd-highlight">whoami</span>      - Display developer identity
  • <span class="cmd-highlight">about</span>       - Developer background & education
  • <span class="cmd-highlight">skills</span>      - Technical stack & capabilities
  • <span class="cmd-highlight">projects</span>    - Key software & IoT projects
  • <span class="cmd-highlight">experience</span>  - Industrial internship details
  • <span class="cmd-highlight">goal</span>        - Career vision & target role
  • <span class="cmd-highlight">contact</span>     - Email & social profiles
  • <span class="cmd-highlight">version</span>     - Environment details
  • <span class="cmd-highlight">clear</span>       - Clear terminal output`,

    whoami: `<span class="cmd-cyan">KARTHIKEYAN S</span> — AI & Software Developer
Roles: Java Full Stack Developer | Prompt Engineer | AI Developer
Location: Salem, Tamil Nadu, India
Motto: <span class="cmd-purple">CODE. CREATE. INNOVATE.</span>`,

    about: `<span class="cmd-title">EDUCATION & BACKGROUND</span>
Degree: B.E. Computer Science and Engineering (2023 - 2027)
College: M.P. Nachimuthu M. Jaganathan Engineering College, Erode
CGPA: 7.94 / 10
Schooling: Sengunthar Matric Higher Sec School, Salem`,

    skills: `<span class="cmd-title">TECHNICAL ECOSYSTEM</span>
  [Programming]  Java, Python, JavaScript (ES6+)
  [Web Dev]      HTML5, CSS3, Vanilla JS
  [Databases]    MySQL, JDBC
  [Tools & AI]   Git, GitHub, Prompt Engineering, ChatGPT, Claude, Gemini AI`,

    projects: `<span class="cmd-title">FEATURED PROJECTS</span>
  1. <span class="cmd-cyan">GAMEVAULT</span> — Modern gaming portal (HTML5, CSS3, JS)
  2. <span class="cmd-cyan">SMART IRRIGATION SYSTEM</span> — IoT automated soil sensing & water control (Arduino, Sensors)
  3. <span class="cmd-cyan">BUS BOOKING MANAGEMENT SYSTEM</span> — Java & MySQL booking application (Java, JDBC, SQL)`,

    experience: `<span class="cmd-title">INDUSTRIAL INTERNSHIP</span>
Company: ZEN 1 Tech Park, Coimbatore
Domain: Internet of Things (IoT)
Duration: 22 June 2026 – 25 July 2026 (34 Days)
Focus: Microcontroller programming, sensor data acquisition, hardware automation`,

    goal: `<span class="cmd-purple">TARGET CAREER VISION</span>
🎯 Role: AI Engineer at Google
Focus: Building intelligent software systems that solve real-world problems at scale.`,

    contact: `<span class="cmd-title">CONTACT INFORMATION</span>
📧 Email:     karthikeyankarthikeyan1710@gmail.com
🐙 GitHub:    https://github.com/KARTHI212006
💼 LinkedIn:  https://www.linkedin.com/in/karthikeyan-s-467313382
📷 Instagram: @itz_karthi_k_k`,

    version: `<span class="cmd-cyan">Karthikeyan Dev CLI v2.4</span> [x86_64-vanilla-js]
Core: HTML5 / CSS3 / Vanilla JS (ES6)
Zero Heavy Frameworks | 100% Custom Motion System`
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

    if (COMMANDS[cmd]) {
      responseLine.innerHTML = COMMANDS[cmd];
    } else {
      responseLine.innerHTML = `<span class="cmd-error">Command not found: '${escapeHtml(original)}'. Type <span class="cmd-highlight">'help'</span> for available commands.</span>`;
    }

    terminalOutput.appendChild(responseLine);

    if (terminalBody) {
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  }

  function escapeHtml(text) {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
}
