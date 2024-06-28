import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";
import Contact_display from "./contact_display";
import Form from "./form";
import FormTemplate from "./fromTemplate";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
const Contact = () => {
  const socialLogo = [
    { icon: <IoLogoGithub /> },
    { icon: <FaLinkedin/> }
];
  return (
    <div className="p-4">
      <h1 className=" text-center text-4xl font-bold pb-10 lg:hidden">
        Contact me
      </h1>
      <div className="lg:grid lg:grid-cols-12 hidden">
        <div className="col-span-6">
          <Contact_display />
        </div>
        <div className="col-span-6">
          <Form />
        </div>
      </div>
      <div>
        <Card className="w-full lg:hidden shadow-none">
          <CardBody className="bg-white/20 h-[600px] sm:w-[600px] w-[350px]">
            <FormTemplate />
            <div className="flex flex-col justify-center items-center">
              <p className="text-white/40">connect with me on social networks</p>
              <span className="flex flex-wrap pt-2 gap-2">
              {socialLogo.map((social, idx) => (
                <span key={idx} className="text-4xl cursor-pointer transform transition-transform duration-300 hover:scale-110">
                  {social.icon}
                </span>
              ))}
            </span>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
