import React from "react";
import { useState } from "react";
import "./index.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/about";
import Skill from "./components/skill";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
      </main>
    </>
  );
};

export default App;
