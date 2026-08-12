import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, ExternalLink, Sparkles, ArrowRight, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo, stats } from '../../data/portfolio';
import { soundFx } from '../../utils/audio';

const roles = [
  'Java Developer',
  'Full Stack Web Developer',
  'Prompt Engineer',
  'AI Enthusiast',
];

interface HeroProps {
  onOpenResume?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? current.slice(0, displayText.length - 1)
            : current.slice(0, displayText.length + 1)
        );
      }, isDeleting ? 35 : 75);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToAbout = () => {
    soundFx.playClick();
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
    { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Ambient Radial Lights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] bg-blue-700/20 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] bg-sky-500/15 pointer-events-none" />
      <div className="absolute top-3/4 left-1/2 w-[300px] h-[300px] rounded-full blur-[120px] bg-purple-700/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-8rem)]">

          {/* Left Column - Intro & Title */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-semibold tracking-wider"
            >
              <Sparkles size={16} className="text-sky-400 animate-pulse" />
              <span>Welcome to My Portfolio</span>
            </motion.div>

            {/* Greeting + Main Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-heading font-extrabold text-4xl sm:text-6xl xl:text-7xl leading-tight tracking-tight text-white"
            >
              Hi, I'm <br />
              <span className="gradient-text-luxury">
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* Animated Role Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-2 text-xl sm:text-3xl font-heading font-semibold text-sky-400 h-10"
            >
              <span>{displayText}</span>
              <span className="w-1 h-7 bg-sky-400 animate-pulse rounded-full" />
            </motion.div>

            {/* Professional Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              I am a passionate <span className="text-sky-300 font-semibold">Fourth-Year CSE student</span> with a strong interest in Java Development, Full Stack Web Development, Prompt Engineering, and AI. I enjoy solving real-world problems through software and continuously learning new technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  soundFx.playClick();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="btn-luxury-primary"
              >
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>

              <button
                onClick={() => {
                  soundFx.playClick();
                  if (onOpenResume) onOpenResume();
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="btn-luxury-secondary"
              >
                <span>Download Resume</span>
                <ExternalLink size={18} />
              </button>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  soundFx.playClick();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="btn-luxury-secondary"
              >
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Social Icons & Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10"
            >
              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500/50 hover:bg-sky-500/10 transition-all duration-300"
                    aria-label={label}
                    onMouseEnter={() => soundFx.playHover()}
                    onClick={() => soundFx.playClick()}
                  >
                    <Icon size={18} />
                  </a>
                ))}
                {/* Phone display */}
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-2 text-xs text-slate-400 hover:text-sky-300 transition-colors"
                  aria-label="Phone"
                >
                  <Phone size={14} />
                  <span>{personalInfo.phone}</span>
                </a>
              </div>

              {/* Quick Counter Badges */}
              <div className="flex items-center gap-4 text-xs">
                {stats.slice(0, 2).map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-heading font-extrabold text-base text-sky-400">
                      {item.value}{item.suffix}
                    </span>
                    <span className="text-slate-400 font-medium text-[11px]">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column - Profile Photo */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center lg:translate-x-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group w-full max-w-[340px]"
            >
              {/* Animated Outer Orbit Ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600 via-sky-500 to-purple-500 opacity-30 blur-xl group-hover:opacity-60 transition duration-700 animate-pulse" />

              {/* Glass Frame wrapper around profile.jpg (Unblocked photo) */}
              <div className="relative w-full h-[400px] sm:h-[430px] rounded-3xl overflow-hidden glass-panel p-2.5 transition-transform duration-500 group-hover:scale-[1.01]">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Glass Name Card placed cleanly below photo frame */}
              <div className="mt-3.5 p-4 rounded-2xl bg-[#0A0A12]/90 backdrop-blur-xl border border-blue-500/30 text-center shadow-xl transition-all duration-300 group-hover:border-blue-500/50">
                <h3 className="font-heading font-extrabold text-lg sm:text-xl tracking-wide bg-gradient-to-r from-blue-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
                  {personalInfo.name}
                </h3>
                <p className="text-sky-400 text-xs font-semibold mt-1">
                  Java Developer & Full Stack Web Developer
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-2.5">
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-mono border border-blue-500/30">
                    B.E. CSE '27
                  </span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono border border-emerald-500/30">
                    IoT Intern
                  </span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono border border-amber-500/30">
                    CGPA 8.1
                  </span>
                </div>
              </div>

              {/* Floating Pill Badge 1 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 px-4 py-2 rounded-2xl glass-panel text-xs font-bold font-heading text-blue-300 flex items-center gap-2 border border-blue-500/40 shadow-xl"
              >
                <span className="text-sm">☕</span> Java Developer
              </motion.div>

              {/* Floating Pill Badge 2 */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-[370px] -left-4 px-4 py-2 rounded-2xl glass-panel text-xs font-bold font-heading text-sky-300 flex items-center gap-2 border border-sky-500/40 shadow-xl z-10"
              >
                <span className="text-sm">✨</span> Prompt Engineer
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 hover:text-sky-300 transition-colors cursor-pointer z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
        onMouseEnter={() => soundFx.playHover()}
      >
        <span className="text-[10px] font-heading font-semibold uppercase tracking-widest text-slate-500">
          Scroll Down
        </span>
        <ChevronDown size={18} className="text-sky-400" />
      </motion.button>
    </section>
  );
};

export default Hero;
