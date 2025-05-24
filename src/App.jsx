import React from "react";
import { useState } from "react";
import "./index.css";
import ReactLenis from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  useGSAP(() => {
    const elemens = gsap.utils.toArray(".reveal-up");
    elemens.forEach((element) => {
      gsap.to(element, {
        ScrollTrigger: { trigger: element, scrub: true },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });
  });
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Contact />
        <Footer />
      </main>
    </ReactLenis>
  );
};

export default App;
