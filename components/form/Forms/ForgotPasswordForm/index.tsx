"use client";

import { Fade, Bounce } from "react-awesome-reveal";
import React, { useState } from "react";
import InputField from "../../formElements/Inputs/InputField";

import {
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import Button from "@/components/buttons";
import OTPForm from "../OTPForm";

const ForgotPasswordForm = () => {
  const [passwordReveal, setPasswordReveal] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(false);

  const inputData = {
    title: "Email",
    type: "email",
    width: "460",
    placeholder: "Place holder",
    iconStart: <AiOutlineMail size={19} />,
  };

  const handlePasswordReveal = () => {
    setPasswordReveal((prev) => !prev);
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
        <Bounce
          duration={700}
          className="max-w-[460px] box-border self-center w-full m-auto"
        >
          <form
            className="max-w-[460px] box-border self-center w-full m-auto"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="mb-[30px]">
              <p className=" text-[32px] font-[600]">Forgot Your Password?</p>
              <p className="font-[400] text-[13px]">
                Regain Access to Your Account
              </p>
            </div>

            {/* Input box */}
            <InputField data={inputData} />

            {/* Button */}
            <div className="mt-8">
              <Button title="Send OTP" />
            </div>

            {/* Create account */}
            <div className="flex flex-row items-center justify-center gap-3 mt-2">
              <p className="flex flex-row items-center gap-2">
                <span className="text-[13px]">Don’t have an account?</span>
              </p>
              <p className="text-[13px] font-[600] cursor-pointer text-darkGreen">
                Create account
              </p>
            </div>
          </form>
        </Bounce>
      )}
    </>
  );
};

export default ForgotPasswordForm;
