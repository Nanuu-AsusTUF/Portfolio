import React from "react";
import { useState } from "react";
import "./index.css";

import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
};

export default App;
