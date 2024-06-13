import React from "react";
import Skills from "./skills";
import About from "./about";
const Info = () => {
  return (
    <div className="p-2">
      <div className="lg:grid lg:grid-cols-12 ">
        <div className="col-span-6">
          <About />
        </div>
        <div className="col-span-6">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default Info;
