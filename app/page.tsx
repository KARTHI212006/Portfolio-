import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TableOfContents from "@/components/table-of-contents";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import ToolsAndTech from "@/components/tools-and-tech";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import SiteMotion from "@/components/site-motion";
import ScrollCanvasBackground from "@/components/scroll-canvas-background";

export default function Home() {
  return (
    <>
      <ScrollCanvasBackground />
      <div className="cinematic-scrim fixed inset-0 z-[1] pointer-events-none" aria-hidden="true" />
      <a
        href="#main"
        className="sr-only z-[80] rounded-full bg-fg px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="relative z-10">
        <Hero />
        <TableOfContents />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <ToolsAndTech />
        <Contact />
      </main>
      <Footer />
      <SiteMotion />
    </>
  );
}
