import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";
import Contact_display from "./contact_display";
import Form from "./form";


const Contact = () => {
  return (
    <div className="p-2 hidden lg:block">
      <div className="lg:grid lg:grid-cols-12 ">
        <div className="col-span-6">
          <Contact_display />
        </div>
        <div className="col-span-6">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
