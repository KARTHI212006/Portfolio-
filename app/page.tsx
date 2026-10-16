import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import SiteMotion from "@/components/site-motion";
import ScrollCanvasBackground from "@/components/scroll-canvas-background";

export default function Home() {
  return (
    <>
      <ScrollCanvasBackground />
      <a
        href="#main"
        className="sr-only z-[80] rounded-full bg-fg px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <SiteMotion />
    </>
  );
}
