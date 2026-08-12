import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import NowLearning from './components/sections/NowLearning';
import Projects from './components/sections/Projects';
import Achievements from './components/sections/Achievements';
import Certificates from './components/sections/Certificates';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <ThemeProvider>
      {/* Animated Aurora Background Blobs */}
      <div className="aurora-bg">
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
      </div>

      {/* Luxury Custom Cursor */}
      <CustomCursor />

      {/* Cinematic 0-100% Loading Screen */}
      <LoadingScreen onComplete={handleLoadComplete} />

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* Main Content */}
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <ScrollProgress />
            <Navbar onOpenResume={() => setIsResumeOpen(true)} />

            <main>
              {/* 1. Hero */}
              <Hero onOpenResume={() => setIsResumeOpen(true)} />

              {/* 2. About (includes Education, Internship, Interests) */}
              <About />

              {/* 3. Skills */}
              <Skills />

              {/* 4. Now Learning */}
              <NowLearning />

              {/* 5. Projects */}
              <Projects />

              {/* 6. Achievements (animated counters) */}
              <Achievements />

              {/* 7. Certifications */}
              <Certificates />

              {/* 8. Services */}
              <Services />

              {/* 9. Contact */}
              <Contact />
            </main>

            <Footer onOpenResume={() => setIsResumeOpen(true)} />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
