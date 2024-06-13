import { Card, CardBody, CardHeader, Button } from "@nextui-org/react";
import React from "react";
import Link from "next/link";
const About = () => {
  return (
    <div id="about" className="lg:p-0 pb-4">
      <Card className="w-full lg:rounded-e-none shadow-none">
        <CardHeader className="bg-white/10 lg:rounded-e-none flex justify-center items-center">
          <h1 className="text-xl">About</h1>
        </CardHeader>
        <CardBody className="flex items-center bg-white/20 lg:w-[500px] h-[600px] sm:w-[600px] w-[350px]">
          <div className="p-6 sm:p-8">
            <p className="  about-para">
              I am a <span className="gradient-text">Full Stack Web Developer </span> based in India.
            </p>
            <p className=" about-para">
              I do learn web technologies and implement those learning into
              creating wonderful Web Applications.
            </p>
            <p className=" about-para">
              I use <span className="gradient-text">MERN Stack </span> for creating full stack web application.
            </p>
            <p className=" about-para">
              I do both <span className="gradient-text">Frontend </span> and <span className="gradient-text">Backend  </span> as per the project requires.
              I usually choose <span className="gradient-text">NextJS </span>  as the web framework for creating the projects as it provide both frontend and backend services and easy to use.
            </p>
            <p className=" about-para"> 
            As for now, I am still a learner, learning and practicing technologies and adapting to the changes and trends in web industries. 
            </p>
          </div>
          <div className="hidden sm:block">
          <Button href="#about" as={Link}>See Resume</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default About;
