import { Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import React from "react";
import { RiNextjsLine } from "react-icons/ri";
import { SiSanity, SiMongodb, SiSocketdotio } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const Projects = () => {
  const chatApp = [
    { logo: <RiNextjsLine /> },
    { logo: <FaNodeJs /> },
    { logo: <SiSocketdotio /> },
    { logo: <SiMongodb /> },
  ];
  //TODO: import different tech logo for apps below and map according to them
  // const portfolioApp = [{}]
  // const gameApp = [{}]

  return (
    <div className="py-4 ">
      <h1 className="text-4xl text-center font-bold pb-10">Projects</h1>
      <div className="grid grid-cols-12 gap-4 ">
        <Card className="card-grids">
          <CardHeader className="project-header">
            <div className="project-tech">
              {chatApp.map((tech, idx) => (
                <span key={idx} className="text-2xl">
                  {tech.logo}
                </span>
              ))}
            </div>
            <div>
              <Button>Live Demo</Button>
            </div>
          </CardHeader>
          <CardBody className="project-cardbody"></CardBody>
          <CardFooter className="project-footer">
            This is a real time messaging application
          </CardFooter>
        </Card>
        <Card className="card-grids">
          <CardHeader className="project-header">
            <div className="project-tech">
              {chatApp.map((tech, idx) => (
                <span key={idx} className="text-2xl">
                  {tech.logo}
                </span>
              ))}
            </div>
            <div>
              <Button>Live Demo</Button>
            </div>
          </CardHeader>
          <CardBody className="project-cardbody"></CardBody>
          <CardFooter className="project-footer">
            This is portfolio application
          </CardFooter>
        </Card>
        <Card  className="card-grids">
          <CardHeader className="project-header">
            <div className="project-tech">
              {chatApp.map((tech, idx) => (
                <span key={idx} className="text-2xl">
                  {tech.logo}
                </span>
              ))}
            </div>
            <div>
              <Button>Live Demo</Button>
            </div>
          </CardHeader>
          <CardBody className="project-cardbody"></CardBody>
          <CardFooter className="project-footer">
            this is a web based gaming application
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
