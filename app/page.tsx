import Navbar from "@/components/navbar";
import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Curve from "@/components/curve";
import SiteMotion from "@/components/site-motion";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[80] rounded-full bg-fg px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <About />
        <Skills />
        {/* dark -> light */}
        <Curve topClass="text-ink" bottomClass="bg-paper" />
        <Experience />
        {/* light -> dark */}
        <Curve topClass="text-paper" bottomClass="bg-ink" />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <SiteMotion />
    </>
  );
}
