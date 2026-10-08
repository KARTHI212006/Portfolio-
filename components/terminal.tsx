"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Sparkles, Send, CornerDownLeft, RotateCcw } from "lucide-react";
import { personalInfo, projectsList, experienceList, certificatesList } from "@/lib/data";

interface TerminalLine {
  id: string;
  type: "input" | "output" | "system" | "error";
  text?: string;
  html?: React.ReactNode;
}

const COMMAND_LIST = [
  "help",
  "whoami",
  "about",
  "skills",
  "projects",
  "experience",
  "certs",
  "stats",
  "goal",
  "contact",
  "resume",
  "matrix",
  "hire",
  "clear",
];

export default function Terminal() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [isMatrixMode, setIsMatrixMode] = useState(false);
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      id: "init-1",
      type: "system",
      html: (
        <div className="text-slate-300">
          Welcome to <span className="text-accent-cyan font-bold">Karthikeyan Dev CLI v3.0</span>. Type{" "}
          <span className="text-amber-300 font-mono font-semibold">&apos;help&apos;</span> for available commands or{" "}
          <span className="text-emerald-400 font-mono font-semibold">&apos;hire&apos;</span> for recruiter fast-track mode.
        </div>
      ),
    },
  ]);

  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [lines]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    // Add to input history
    setHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    // Append user input line
    const userLine: TerminalLine = {
      id: `usr-${Date.now()}`,
      type: "input",
      text: trimmed,
    };

    if (trimmed === "clear") {
      setLines([]);
      setInputVal("");
      return;
    }

    let outputNode: React.ReactNode;

    switch (trimmed) {
      case "help":
        outputNode = (
          <div className="space-y-1.5 text-slate-300">
            <div className="text-accent-cyan font-semibold mb-1">AVAILABLE COMMANDS:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs">
              <div><span className="text-amber-300 font-mono font-semibold">whoami</span> - Developer identity & focus</div>
              <div><span className="text-amber-300 font-mono font-semibold">about</span> - Background & education</div>
              <div><span className="text-amber-300 font-mono font-semibold">skills</span> - Technical ecosystem matrix</div>
              <div><span className="text-amber-300 font-mono font-semibold">projects</span> - Production software showcase</div>
              <div><span className="text-amber-300 font-mono font-semibold">experience</span> - Industrial IoT internship</div>
              <div><span className="text-amber-300 font-mono font-semibold">certs</span> - Official verified credentials</div>
              <div><span className="text-amber-300 font-mono font-semibold">stats</span> - Real-time metrics & CGPA</div>
              <div><span className="text-amber-300 font-mono font-semibold">goal</span> - Long-term Google AI vision</div>
              <div><span className="text-amber-300 font-mono font-semibold">contact</span> - Email, GitHub & LinkedIn</div>
              <div><span className="text-amber-300 font-mono font-semibold">resume</span> - View official PDF resume</div>
              <div><span className="text-emerald-400 font-mono font-semibold">hire</span> - Recruiter executive telemetry</div>
              <div><span className="text-violet-400 font-mono font-semibold">matrix</span> - Toggle cyberpunk matrix mode</div>
              <div><span className="text-rose-400 font-mono font-semibold">clear</span> - Clear terminal screen</div>
            </div>
          </div>
        );
        break;

      case "whoami":
        outputNode = (
          <div className="space-y-1 text-slate-300">
            <div>
              <span className="text-accent-cyan font-bold text-sm">KARTHIKEYAN S</span> —{" "}
              <span className="text-emerald-400 font-semibold">JAVA FULL STACK DEVELOPER</span>
            </div>
            <div>Core: Java, Backend Systems, Modern Web & Relational Databases (MySQL)</div>
            <div>Specialization: AI Prompt Engineering, LLM Integration & Intelligent Workflows</div>
            <div>Location: Salem, Tamil Nadu, India</div>
            <div className="text-emerald-400 font-mono">● STATUS: AVAILABLE FOR OPPORTUNITIES (CSE 2027)</div>
            <div className="text-violet-400 font-mono text-xs">MOTTO: CODE. CREATE. INNOVATE.</div>
          </div>
        );
        break;

      case "about":
        outputNode = (
          <div className="space-y-1 text-slate-300">
            <div className="text-accent-cyan font-semibold">ACADEMIC & BACKGROUND</div>
            <div>Degree: B.E. Computer Science and Engineering (2023 – 2027)</div>
            <div>Institution: M.P. Nachimuthu M. Jaganathan Engineering College, Erode</div>
            <div>
              Current Metric: <span className="text-accent-cyan font-bold">7.94 / 10 CGPA</span>
            </div>
            <div>School: Sengunthar Matric Higher Secondary School, Salem</div>
            <div>Focus: Object-Oriented Software Design, Relational Database Systems & Applied AI</div>
          </div>
        );
        break;

      case "skills":
        outputNode = (
          <div className="space-y-1 text-slate-300">
            <div className="text-accent-cyan font-semibold mb-1">TECHNICAL ECOSYSTEM MATRIX:</div>
            <div><span className="text-sky-300 font-mono">[Core & Backend]</span> Java (OOP, Collections, JDBC), Python, C</div>
            <div><span className="text-sky-300 font-mono">[Web & Frontend]</span> HTML5, CSS3 (Glassmorphism), JavaScript (ES6+), Next.js, Tailwind</div>
            <div><span className="text-sky-300 font-mono">[Databases]</span> MySQL, Relational Schema Architecture, SQL Optimization</div>
            <div><span className="text-violet-300 font-mono">[Applied AI]</span> Prompt Engineering, LLM Workflows, ChatGPT, Claude, Gemini API</div>
            <div><span className="text-amber-300 font-mono">[Dev & Tools]</span> Git, GitHub, VS Code, Postman, Vercel, Embedded IoT (Arduino)</div>
          </div>
        );
        break;

      case "projects":
        outputNode = (
          <div className="space-y-2 text-slate-300">
            <div className="text-accent-cyan font-semibold">PRODUCTION SOFTWARE SHOWCASE ({projectsList.length}):</div>
            {projectsList.map((p, idx) => (
              <div key={p.id} className="pl-2 border-l-2 border-accent-cyan/40">
                <div className="font-semibold text-white">
                  {idx + 1}. <span className="text-accent-cyan">{p.title}</span> [{p.category}]
                </div>
                <div className="text-xs text-slate-400">{p.shortDesc}</div>
                <div className="text-xs text-amber-300/80 font-mono mt-0.5">Tech: {p.tech.join(" • ")}</div>
              </div>
            ))}
          </div>
        );
        break;

      case "experience":
        outputNode = (
          <div className="space-y-1 text-slate-300">
            <div className="text-accent-cyan font-semibold">INDUSTRIAL EXPERIENCE:</div>
            {experienceList.map((exp) => (
              <div key={exp.id} className="pl-2 border-l-2 border-emerald-500/40">
                <div className="text-emerald-400 font-bold">{exp.company} — {exp.role}</div>
                <div className="text-xs text-slate-400">{exp.period} ({exp.duration}) | {exp.location}</div>
                <div className="text-xs text-slate-300 mt-1">{exp.description}</div>
              </div>
            ))}
          </div>
        );
        break;

      case "certs":
      case "certifications":
        outputNode = (
          <div className="space-y-2 text-slate-300">
            <div className="text-accent-cyan font-semibold">OFFICIAL VERIFIED CREDENTIALS ({certificatesList.length}):</div>
            {certificatesList.map((c, idx) => (
              <div key={c.id} className="pl-2 border-l-2 border-violet-500/40 text-xs">
                <div className="font-semibold text-white">
                  {idx + 1}. <span className="text-violet-300">{c.title}</span>
                </div>
                <div className="text-slate-400">{c.issuer} | {c.date}</div>
                <div className="text-emerald-400/90 font-mono">Credential ID: {c.credentialId || "Verified"}</div>
              </div>
            ))}
          </div>
        );
        break;

      case "stats":
        outputNode = (
          <div className="space-y-1 text-slate-300 font-mono text-xs">
            <div className="text-accent-cyan font-bold font-sans text-sm mb-1">VERIFIED DEVELOPER HUD TELEMETRY</div>
            <div>[✓] Academic CGPA:        <span className="text-accent-cyan font-bold">7.94 / 10</span> (B.E. Computer Science)</div>
            <div>[✓] Verified Credentials: <span className="text-accent-cyan font-bold">{certificatesList.length} Official Certifications</span></div>
            <div>[✓] Industrial Training:  <span className="text-emerald-400 font-bold">34 Days</span> (ZEN 1 Tech Park IoT)</div>
            <div>[✓] MasterClass:          <span className="text-emerald-400 font-bold">30 Days</span> (NoviTech Full Stack)</div>
            <div>[✓] Verified Projects:    <span className="text-violet-400 font-bold">{projectsList.length} Production Systems</span></div>
            <div>[✓] Core Technologies:    <span className="text-amber-300 font-bold">12+ Practical Tools</span></div>
          </div>
        );
        break;

      case "goal":
        outputNode = (
          <div className="space-y-1 text-slate-300">
            <div className="text-violet-400 font-bold">TARGET CAREER VISION</div>
            <div>🎯 Long-Term Goal: <span className="text-accent-cyan font-bold">AI Engineer at Google</span></div>
            <div className="text-xs text-slate-400 leading-relaxed">
              Engineering scalable, human-centered software systems powered by intelligent neural reasoning, robust backend architectures, and production-grade full-stack implementations.
            </div>
          </div>
        );
        break;

      case "contact":
        outputNode = (
          <div className="space-y-1 text-slate-300">
            <div className="text-accent-cyan font-semibold">DIRECT COMMUNICATION CHANNELS:</div>
            <div>✉️ Email: <a href={`mailto:${personalInfo.email}`} className="text-accent-cyan hover:underline">{personalInfo.email}</a></div>
            <div>🐙 GitHub: <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-accent-cyan hover:underline">{personalInfo.github}</a></div>
            <div>💼 LinkedIn: <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent-cyan hover:underline">linkedin.com/in/karthikeyan-s-467313382</a></div>
            <div>📷 Instagram: <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer" className="text-violet-300 hover:underline">@itz_karthi_k_k</a></div>
          </div>
        );
        break;

      case "resume":
        outputNode = (
          <div className="space-y-2 text-slate-300">
            <div className="text-accent-cyan font-bold">📄 OFFICIAL RESUME ACCESS</div>
            <div className="text-xs">Opening official resume PDF viewer / direct download:</div>
            <a
              href={personalInfo.resumeUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-accent-cyan/20 border border-accent-cyan/50 text-accent-cyan font-mono text-xs hover:bg-accent-cyan hover:text-black transition-colors"
            >
              DOWNLOAD RESUME PDF 📥
            </a>
          </div>
        );
        break;

      case "matrix":
        setIsMatrixMode((prev) => !prev);
        outputNode = (
          <div className="text-emerald-400 font-mono">
            [CYBERPUNK MATRIX MODE: {!isMatrixMode ? "ENABLED 🟢" : "DISABLED ⚪"}]
          </div>
        );
        break;

      case "hire":
        outputNode = (
          <div className="space-y-2 p-3 rounded-lg border border-emerald-500/30 bg-emerald-950/20 text-slate-200">
            <div className="text-emerald-400 font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              RECRUITER FAST-TRACK TELEMETRY
            </div>
            <div className="text-xs space-y-1">
              <div>Candidate: <strong className="text-white">KARTHIKEYAN S</strong> (B.E. CSE, Class of 2027)</div>
              <div>Primary Strengths: <span className="text-emerald-300">Java Backend, MySQL/JDBC, Full Stack Web & AI Workflows</span></div>
              <div>Academic Record: <span className="text-accent-cyan font-bold">7.94 / 10 CGPA</span></div>
              <div>Industrial Credentials: <span className="text-amber-300">34-day ZEN 1 IoT Internship + 30-day Full Stack MasterClass</span></div>
              <div>Availability: <span className="text-emerald-400 font-semibold">Immediate Internship & Entry Software Engineering Roles</span></div>
            </div>
            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href="#contact"
                className="px-3 py-1 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs rounded transition-colors"
              >
                Schedule Interview
              </a>
              <a
                href={personalInfo.resumeUrl}
                download
                className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white font-mono text-xs rounded border border-white/20 transition-colors"
              >
                Direct Resume Download
              </a>
            </div>
          </div>
        );
        break;

      default:
        outputNode = (
          <div className="text-rose-400 text-xs">
            Command not recognized: &apos;{trimmed}&apos;. Type <span className="text-amber-300 font-mono font-semibold">&apos;help&apos;</span> to see all available commands.
          </div>
        );
    }

    const resLine: TerminalLine = {
      id: `out-${Date.now()}`,
      type: "output",
      html: outputNode,
    };

    setLines((prev) => [...prev, userLine, resLine]);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(inputVal);
    } else if (e.key === "Tab") {
      e.preventDefault();
      const current = inputVal.trim().toLowerCase();
      if (!current) return;
      const match = COMMAND_LIST.find((c) => c.startsWith(current));
      if (match) {
        setInputVal(match);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(history[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= history.length) {
        setHistoryIndex(-1);
        setInputVal("");
      } else {
        setHistoryIndex(nextIndex);
        setInputVal(history[nextIndex]);
      }
    }
  };

  const quickCommands = ["help", "hire", "stats", "projects", "skills", "certs", "clear"];

  return (
    <section id="terminal" className="relative py-20 overflow-hidden">
      {/* Background ambient glow */}
      <div className="bg-glow-cyan top-1/2 left-0 -translate-y-1/2 opacity-30" />
      <div className="bg-glow-violet bottom-0 right-1/4 opacity-25" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono mb-3">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>DEVELOPER CLI // v3.0</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
            Interactive <span className="text-gradient-cyan">Terminal</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-cyan to-accent-violet mx-auto my-3 rounded-full" />
          <p className="text-muted-foreground text-sm">
            Type commands below or click quick action chips to inspect verified credentials, telemetry, and recruiter mode.
          </p>
        </div>

        {/* Terminal Window Card */}
        <div
          className={`max-w-3xl mx-auto rounded-2xl border transition-all duration-300 shadow-2xl overflow-hidden font-mono ${
            isMatrixMode
              ? "border-emerald-500/60 bg-[#020d06] shadow-[0_0_40px_rgba(16,185,129,0.25)] text-emerald-400"
              : "border-cyan-500/30 bg-[#070c1e]/90 backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.15)] text-slate-200"
          }`}
        >
          {/* Terminal Titlebar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#030612]/90 border-b border-white/10 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-slate-400 font-medium">karthikeyan@developer:~ (bash)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-accent-cyan bg-accent-cyan/10 px-2 py-0.5 rounded border border-accent-cyan/20">
                OS: ACTIVE
              </span>
              <button
                onClick={() => executeCommand("clear")}
                title="Clear screen"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Terminal Body Logs */}
          <div
            ref={terminalBodyRef}
            onClick={() => inputRef.current?.focus()}
            className="p-4 sm:p-6 h-[340px] sm:h-[380px] overflow-y-auto space-y-3 text-xs sm:text-sm select-text cursor-text scrollbar-thin scrollbar-thumb-cyan-500/20"
          >
            {lines.map((line) => (
              <div key={line.id}>
                {line.type === "input" ? (
                  <div className="flex items-center gap-2 text-accent-cyan font-bold">
                    <span className="text-slate-500">karthikeyan@developer:~$</span>
                    <span className="text-white">{line.text}</span>
                  </div>
                ) : (
                  <div>{line.html || line.text}</div>
                )}
              </div>
            ))}
          </div>

          {/* Terminal Input Line */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#030612]/95 border-t border-white/10">
            <span className="text-accent-cyan text-xs sm:text-sm whitespace-nowrap">
              karthikeyan@developer:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'help', 'hire', 'stats'..."
              className="flex-1 bg-transparent text-white font-mono text-xs sm:text-sm focus:outline-none placeholder:text-slate-600"
              autoComplete="off"
              spellCheck="false"
            />
            <button
              onClick={() => executeCommand(inputVal)}
              className="p-1.5 rounded bg-accent-cyan/20 text-accent-cyan hover:bg-accent-cyan hover:text-black transition-colors"
              title="Submit command"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick Command Chips */}
          <div className="px-4 py-2 bg-[#020510] border-t border-white/5 flex items-center gap-1.5 flex-wrap text-[11px]">
            <span className="text-slate-500 font-mono mr-1">Quick:</span>
            {quickCommands.map((q) => (
              <button
                key={q}
                onClick={() => executeCommand(q)}
                className="px-2 py-0.5 rounded bg-white/5 hover:bg-accent-cyan/20 border border-white/10 hover:border-accent-cyan/40 text-slate-300 hover:text-accent-cyan transition-colors font-mono cursor-pointer"
              >
                {q}
              </button>
            ))}
            <span className="text-slate-600 text-[10px] ml-auto hidden sm:inline font-mono">
              [Press Tab to autocomplete]
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
