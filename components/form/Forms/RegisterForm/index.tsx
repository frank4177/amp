"use client";

import React, { useState } from "react";
import InputField from "../../formElements/Inputs/InputField";
import PhoneNumberInput from "../../formElements/Inputs/phoneNumberInput";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineLock,
} from "react-icons/ai";
import Button from "@/components/buttons";
import { Fade, Bounce, Hinge } from "react-awesome-reveal";
import OTPForm from "../OTPForm";
import Link from "next/link";

const NameInputData = {
  title: "Full Name / Business name",
  type: "text",
  width: "460",
  placeholder: "Name",
  required: true,
};

const EmailInputData = {
  title: "Email",
  type: "email",
  width: "460",
  placeholder: "Email",
  required: true,
};

const RegisterForm = () => {
  const [passwordReveal, setPasswordReveal] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(false);

  const PasswordInputData = {
    title: "Password",
    type: `${passwordReveal ? "text" : "password"}`,
    width: "460",
    height: "42",
    placeholder: "Place holder",
    required: true,
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
  };

  const handlePasswordReveal = () => {
    setPasswordReveal((prev) => !prev);
    console.log("ooo");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setLogin(true);
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
        <form
          className="max-w-[460px] box-border self-center w-full m-auto flex flex-col gap-1"
          onSubmit={(e) => handleSubmit(e)}
        >
          {/* Title */}
          <div className="">
            <p className="font-semibold text-[32px]">Get Started</p>
            <p className="font-[400] text-[13px]">
              Create an AmaPay account to get started
            </p>
          </div>

          {/* Inputs */}
          <InputField data={NameInputData} />
          <InputField data={EmailInputData} />
          <PhoneNumberInput width="460" required={true} title="Phone number" />
          <InputField data={PasswordInputData} />

          {/* Password note */}
          <p className="text-[14px] text-gray-400">
            Password must contain an Uppercase letter, lower case letter,
            <br /> a special character and a number
          </p>

          {/* Button */}
          <div className="mt-8">
            <Button title="Create Account" />
          </div>

          {/* Login account */}
          <div className="flex flex-row items-center justify-center gap-3 ">
            <p className="flex flex-row items-center gap-2">
              <span className="text-[14px]">Already have an account?</span>
            </p>
            <p className="text-[14px] font-[600] cursor-pointer text-darkGreen">
              <Link href="/login">Login</Link>
            </p>
          </div>

          {/* Confirmation note */}
          <p className="text-center text-[14px] text-gray-400 ">
            By creating an account, you agree to our
            <br />{" "}
            <span className="font-bold text-black cursor-pointer">
              Privacy Policy
            </span>{" "}
            and{" "}
            <span className="font-bold text-black cursor-pointer">
              Terms of use.
            </span>
          </p>
        </form>
      )}
    </>
  );
};

export default RegisterForm;
