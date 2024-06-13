import Nav from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import About from "./components/about.jsx";
import Skills from "./components/skills.jsx";
import Info from "./components/info.jsx";
import Projects from "./components/projects.jsx";
import Contact from "./components/contact.jsx";

import React from "react";

const homepage = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center bg-white/40 max-w-[1080px]">
      <Hero />
      <Info />
      <Projects />
      <Contact />
    </div>
  );
};

export default homepage;
