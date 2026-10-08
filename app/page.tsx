"use client";

import React from "react";
import BootLoader from "@/components/boot-loader";
import ScrollProgress from "@/components/scroll-progress";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Terminal from "@/components/terminal";
import About from "@/components/about";
import Education from "@/components/education";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Milestones from "@/components/milestones";
import Certificates from "@/components/certificates";
import CareerGoal from "@/components/career-goal";
import Interests from "@/components/interests";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between relative bg-[#050816]">
      {/* Cinematic HUD Boot Loader */}
      <BootLoader />

      {/* Real-time Scroll Progress Bar */}
      <ScrollProgress />

      {/* Main Navigation Header */}
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Terminal />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Milestones />
        <Certificates />
        <CareerGoal />
        <Interests />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
