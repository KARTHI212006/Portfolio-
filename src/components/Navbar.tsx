import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Volume2, VolumeX, FileText } from 'lucide-react';
import { navLinks } from '../data/portfolio';
import { soundFx } from '../utils/audio';

interface NavbarProps {
  onOpenResume?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 180) {
          setActiveLink(`#${section}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    soundFx.playClick();
    setActiveLink(href);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleSound = () => {
    const enabled = soundFx.toggleSound();
    setSoundEnabled(enabled);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-400"
        style={{
          backdropFilter: isScrolled ? 'blur(24px)' : 'blur(0px)',
          backgroundColor: isScrolled ? 'rgba(5, 5, 10, 0.85)' : 'transparent',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
          boxShadow: isScrolled ? '0 10px 40px rgba(0, 0, 0, 0.5)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* K Brand Emblem Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-3 no-underline group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onMouseEnter={() => soundFx.playHover()}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center font-heading font-extrabold text-lg bg-gradient-to-br from-purple-600/30 to-cyan-500/30 border border-purple-500/40 text-purple-300 shadow-lg shadow-purple-500/20 group-hover:border-cyan-400 transition-all duration-300">
              K
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight gradient-text-luxury">
                KARTHIKEYAN S
              </span>
              <span className="text-[10px] tracking-widest uppercase font-mono text-sky-400/80 font-semibold -mt-1">
                Java & Full Stack Dev
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = activeLink === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`relative font-heading text-sm font-semibold tracking-wide transition-colors duration-300 py-1 ${
                    isActive ? 'text-purple-300 font-bold' : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-cyan-400 to-amber-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Controls: Audio + Resume Button */}
          <div className="flex items-center gap-3">
            {/* Audio Toggle */}
            <motion.button
              onClick={handleToggleSound}
              onMouseEnter={() => soundFx.playHover()}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="p-2.5 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-slate-300 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
              title={soundEnabled ? 'Mute Sound FX' : 'Enable Sound FX'}
            >
              {soundEnabled ? <Volume2 size={18} className="text-cyan-400" /> : <VolumeX size={18} className="text-slate-500" />}
            </motion.button>

            {/* Resume Button */}
            <motion.button
              onClick={() => {
                soundFx.playClick();
                if (onOpenResume) onOpenResume();
              }}
              onMouseEnter={() => soundFx.playHover()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:inline-flex btn-luxury-primary text-xs sm:text-sm !py-2.5 !px-5"
            >
              <FileText size={16} />
              <span>Resume</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                soundFx.playClick();
                setMobileOpen(!mobileOpen);
              }}
              className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:border-purple-500/40"
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div key="open" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 z-[99] lg:hidden bg-[#0A0A12]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`block py-3 px-4 rounded-xl font-heading text-sm font-semibold transition-all ${
                    activeLink === link.href
                      ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    if (onOpenResume) onOpenResume();
                  }}
                  className="btn-luxury-primary w-full justify-center text-sm"
                >
                  <FileText size={16} />
                  <span>View / Download Resume</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
