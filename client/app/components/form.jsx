import { Card, CardBody } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

import FormTemplate from "./fromTemplate";
const Form = () => {
  return (
    <div className="lg:p-0 pb-4">
      <Card className="w-full lg:rounded-s-none shadow-none">
        <CardBody className=" bg-white/20 lg:w-[500px] h-[600px] sm:w-[600px] w-[350px]">
          <FormTemplate />
        </CardBody>
      </Card>
    </div>
  );
};

export default Form;
