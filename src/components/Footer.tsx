import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Mail, Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { navLinks, personalInfo } from '../data/portfolio';
import { soundFx } from '../utils/audio';

interface FooterProps {
  onOpenResume?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
    { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <footer className="relative bg-[#020617] border-t border-white/10 pt-16 pb-8 z-10">
      {/* Top gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand & Motto */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600/30 to-sky-500/30 border border-blue-500/40 flex items-center justify-center font-heading font-extrabold text-lg text-blue-300">
                K
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight gradient-text-luxury">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              Java Developer • Full Stack Web Developer • Prompt Engineer. Fourth-Year B.E. CSE Student from Salem, Tamil Nadu, India. Building impactful software with clean code & creativity.
            </p>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 inline-block">
              <span className="text-xs font-accent text-amber-400 font-bold tracking-wider">
                "{personalInfo.motto}"
              </span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-all duration-300"
                  aria-label={label}
                  onMouseEnter={() => soundFx.playHover()}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-sky-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-heading">
              {navLinks.slice(0, 4).map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      soundFx.playClick();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-sky-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-purple-400 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-heading">
              {navLinks.slice(4).map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      soundFx.playClick();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-purple-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    soundFx.playClick();
                    if (onOpenResume) onOpenResume();
                  }}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  View Resume
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p className="flex items-center gap-1.5">
            © 2026 {personalInfo.name}. All Rights Reserved. Built with
            <Heart size={13} className="text-red-500 fill-red-500 mx-0.5" />
            using HTML, CSS, JavaScript
          </p>
          <div className="flex items-center gap-2 text-slate-600">
            <Code2 size={12} />
            <span>Java Developer | Full Stack Web Developer | Prompt Engineer</span>
          </div>
        </div>
      </div>

      {/* Back To Top Floating Action Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-sky-500 text-white flex items-center justify-center shadow-xl shadow-blue-500/30 z-[90] cursor-pointer border border-white/20"
        aria-label="Scroll to top"
        onMouseEnter={() => soundFx.playHover()}
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;
