import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="container h-[650px] flex flex-col justify-center items-center ">
      <div>
        <h1 className=" sm:text-6xl lg:text-7xl text-4xl font-semibold uppercase text-center">
          Karan <span className="text-black/30">Roushan</span>
        </h1>
        <p className="sm:text-4xl lg:text-5xl text-2xl font-light text-white/50  text-center">
          Full Stack Web Developer
        </p>
      </div>
      <ButtonGroup className="p-6 flex justify-center items-center">
        <Button variant="flat" href="#" as={Link}>Projects</Button>
        <Button href="#" as={Link}>Resume</Button>
      </ButtonGroup>
    </div>
  );
};

export default Hero;
