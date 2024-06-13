import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiJavascript,
  SiReact,
  SiNodeDotJs,
  SiGraphql,
  SiMongodb,
  SiExpress,
  SiNextui,
  SiSocketdotio 
} from "react-icons/si";
import { FaNodeJs, FaGithub  } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
const Skills = () => {
  
  const skillIcons = [
    { icon: <TiHtml5 />, name: "HTML 5" },
    { icon: <IoLogoCss3 />, name: "CSS 3" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <RiTailwindCssFill />, name: "TailwindCSS" },
    { icon: <SiNextui />, name: "NextUI" },
    { icon: <TbBrandNextjs />, name: "Next.js" },
    { icon: <SiReact />, name: "React" },
    { icon: <FaNodeJs />, name: "NodeJS" },
    { icon: <SiExpress />, name: "ExpressJs" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiSocketdotio />, name: "Socket.io" },
    { icon: <FaGithub />, name: "Github" },
    // Add more skills as needed
  ];
  return (
    <div className="">
      <Card className="w-full lg:rounded-s-none shadow-none">
        <CardHeader className="bg-white/10 lg:rounded-s-none flex justify-center items-center">
          <h1 className="text-xl">Skills</h1>
        </CardHeader>
        <CardBody className="bg-white/20 h-[600px] lg:w-[500px] sm:w-[600px] w-[350px] p-4">
          <div className="p-4">
            <div className="grid sm:grid-cols-12 grid-cols-6  flex-wrap sm:gap-8 gap-10">
              {skillIcons.map((skill, index) => (
                <li
                  key={index}
                  className="col-span-2 sm:col-span-4 lg:col-span-3 flex flex-col items-center justify-center "
                >
                  <span className="sm:text-5xl text-3xl pb-2">{skill.icon}</span>
                  <span className="sm:text-md text-sm">{skill.name}</span>
                </li>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Skills;
