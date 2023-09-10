"use client";

import React, { useState } from "react";
import styles from "./index.module.css";
import Button from "@/components/buttons";
import AuthCode from "react-auth-code-input";
import ProfileCreatedModal from "@/components/Modal/Content/ProfileCreated";
import { usePathname } from "next/navigation";
import toast, { Toaster } from 'react-hot-toast';

const OTPForm = () => {
  const pathname = usePathname();
  const [childPin, setChildPin] = useState("");
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleChildChange = () => {
    setChildPin("");
  };

  console.log(pathname)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setOpenModal(true)
  };

  return (
    <>
      <form className="max-w-[460px] box-border self-center w-full m-auto" onSubmit={(e)=> handleSubmit(e)}>
        <div className="mb-[30px]">
          <p className="font-semibold text-[32px]">Enter Your OTP</p>
          <p className="font-[400] text-[13px] leading-9">
            A 6 digit OTP (One Time Password) has been sent to your phone <br />{" "}
            “+234 81x xxx xx85”, Please enter the code below.
          </p>
        </div>

        {/* Input OTP */}
        <AuthCode
          allowedCharacters="numeric"
          inputClassName={styles.otp}
          onChange={handleChildChange}
        />

        <p className="text-[15px] font-[600] cursor-pointer text-darkGreen text-center mt-[30px]">
          Resend code in 1:00
        </p>

        {/* Button */}
        <div className="mt-[50px]">
          <Button title="Confirm" />
        </div>

        {/*  */}
        <div className="flex flex-row items-center justify-center gap-3 mt-2">
          <p className="flex flex-row items-center gap-2">
            <span className="text-[13px]">Trouble logging in?</span>
          </p>

          <p className="text-[13px] font-[600] cursor-pointer text-darkGreen">
            Contact support
          </p>
        </div>
      </form>
      {openModal && pathname === "/register" ? <ProfileCreatedModal/> : null}
      <Toaster />
    </>
  );
};

export default OTPForm;
