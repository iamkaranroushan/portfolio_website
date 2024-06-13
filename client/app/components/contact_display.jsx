import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
const Contact_display = () => {
  const socialLogo = [
    { icon: <IoLogoGithub /> },
    { icon: <FaLinkedin/> }
];

  return (
    <div className="lg:p-0 pb-4">
      <Card className="w-full lg:rounded-e-none shadow-none">
        <CardBody className="bg-white/20 lg:w-[500px] h-[600px] sm:w-[600px] w-[350px] p-10">
          <h1 className="text-7xl font-light ">
            <span className="bg-gradient-to-tr from-purple-500 to-red-500 bg-clip-text text-transparent">
              Connect
            </span>{" "}
             with me
          </h1>
          <p className="text-3xl text-white/40">
            on <span className="font-bold">social network. </span>
          </p>
          <span className="flex flex-wrap py-4 gap-2">
            {socialLogo.map((social, idx) => (
              <span key={idx} className="text-4xl cursor-pointer transform transition-transform duration-300 hover:scale-110">
                {social.icon}
              </span>
            ))}
          </span>
          <p className="text-xl bg-gradient-to-r to-cyan-500 from-purple-500 p-2"> </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default Contact_display;
