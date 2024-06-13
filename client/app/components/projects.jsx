import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";

const Projects = () => {
  return (
    <div className="py-4 ">
      <h1 className="text-4xl text-center font-bold text-white">Projects</h1>
      <div className="grid grid-cols-12 gap-4 py-10">
      <Card isPressable className="card-grids"> 
      <CardBody className="project-cardbody">
      </CardBody>
      </Card>
      <Card isPressable className="card-grids"> 
      <CardBody className="project-cardbody">
      </CardBody>
      </Card>
      <Card isPressable className="card-grids"> 
      <CardBody className="project-cardbody">
      </CardBody>
      </Card>
      
      
      </div>
    </div>
  );
};

export default Projects;
