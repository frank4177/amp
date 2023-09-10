"use client";

import { Fade, Bounce } from "react-awesome-reveal";
import React, { useState } from "react";
import InputField from "../../formElements/Inputs/InputField";
import toast, { Toaster } from "react-hot-toast";

import {
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import Button from "@/components/buttons";
import OTPForm from "../OTPForm";
import Link from "next/link";

const LoginForm = () => {
  const [passwordReveal, setPasswordReveal] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(false);

  const inputData = [
    {
      title: "Email",
      type: "email",
      width: "460",
      placeholder: "Place holder",
      iconStart: <AiOutlineMail size={19} />,
    },
    {
      title: "Password",
      type: `${passwordReveal ? "text" : "password"}`,
      width: "460",
      placeholder: "Place holder",
      iconStart: <AiOutlineLock size={19} />,
      iconEnd: passwordReveal ? (
        <AiOutlineEyeInvisible
          size={18}
          className="cursor-pointer"
          onClick={() => handlePasswordReveal()}
        />
      ) : (
        <AiOutlineEye
          className="cursor-pointer"
          size={18}
          onClick={() => handlePasswordReveal()}
        />
      ),
    },
  ];

  const handlePasswordReveal = () => {
    setPasswordReveal((prev) => !prev);
    console.log("ooo");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setLogin(true);
    // toast.success('Here is your toast.')
  };

  return (
    <>
      {login ? (
        <Fade
          duration={500}
          direction="right"
          className="max-w-[460px] box-border self-center w-full m-auto"
        >
          <OTPForm />
        </Fade>
      ) : (
        <Bounce
          duration={700}
          className="max-w-[460px] box-border self-center w-full m-auto"
        >
          <form
            className="max-w-[460px] box-border self-center w-full m-auto"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="mb-[30px]">
              <p className=" text-[32px] font-[600]">Welcome Back</p>
              <p className="font-[400] text-[13px]">
                Log in to your account to continue
              </p>
            </div>

            {/* Input boxes */}
            <div className="space-y-5">
              {inputData.map((item) => (
                <InputField data={item} key={item.title} />
              ))}
            </div>

            {/* Forgot password and Remember */}
            <div className="flex flex-row items-center justify-between mt-2">
              <p className="flex flex-row items-center gap-2">
                <input type="checkbox" className="w-[15px] h-[15px]" />
                <span className="text-[13px]">Remember me</span>
              </p>

              <p className="text-[13px] font-[600] cursor-pointer">
                <Link href="/reset">Forgot Password</Link>
              </p>
            </div>

            {/* Button */}
            <div className="mt-8">
              <Button title="Login" />
            </div>

            {/* Create account */}
            <div className="flex flex-row items-center justify-center gap-3 mt-2">
              <p className="flex flex-row items-center gap-2">
                <span className="text-[13px]">Don’t have an account?</span>
              </p>
              <p className="text-[13px] font-[600] cursor-pointer text-darkGreen">
              <Link href="/register">Create account</Link>
                
              </p>
            </div>
          </form>
        </Bounce>
      )}
      <Toaster />
    </>
  );
};

export default LoginForm;
