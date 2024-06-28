import { Button, Input } from '@nextui-org/react'
import React from 'react'
import { AiTwotoneMail } from "react-icons/ai";
const FormTemplate = () => {
  return (
    <div className="flex flex-col gap-2 p-10">
            <h1 className="hidden lg:block text-2xl text-start pl-1 bg-gradient-to-tr from-purple-500 to-orange-600 bg-clip-text text-transparent">
              Mail me{" "}
            </h1>
            <Input
              size="lg"
              placeholder="your name"
              type="text"
              className="form-input"
            ></Input>
            <Input
              size="lg"
              placeholder="your@email.com"
              type="email"
              className="form-input"
            ></Input>
            <textarea
              placeholder="your message"
              className="h-[250px] pl-3 pt-4 rounded-xl text-md w-full focus:outline-none placeholder:text-white/60 bg-black/40"
            ></textarea>
            <Button
              startContent={<AiTwotoneMail />}
              variant="solid"
              size="lg"
              className="w-full bg-black/30 text-white/60"
            >
              send mail
            </Button>
          </div>
  )
}

export default FormTemplate