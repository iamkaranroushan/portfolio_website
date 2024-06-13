import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";
import Contact_display from "./contact_display";
import Form from "./form";

const Contact = () => {
  return (
    <div className="p-4">
      <h1 className=" text-center text-4xl font-bold pb-10 lg:hidden">Contact me</h1>
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
          <CardBody className="flex items-center bg-white/20 h-[600px] sm:w-[600px] w-[350px]"></CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
