"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Education from "@/components/education";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Certificates from "@/components/certificates";
import CareerGoal from "@/components/career-goal";
import Interests from "@/components/interests";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <CareerGoal />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
