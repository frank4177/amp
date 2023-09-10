import LoginForm from "@/components/form/Forms/LoginForm";
import Image from "next/image";
import React from "react";
import loginImage from "../../public/assets/images/loginImage.png";
import Logo from "@/components/shared/Logo";

const LoginPage = () => {
  return (
    <>
      <div>
        <div className="flex flex-row min-h-[100vh]">
          <div className="w-[50%] p-6  flex flex-col z-2">
            <div className="self-start justify-self-start">
              <Logo />
            </div>
            <LoginForm />
          </div>

          <div className="w-[60%] z-10 min-h-[100vh]">
            <Image
              src={loginImage}
              alt="dashboard"
              width={4068}
              height={4468}
              className="object-cover h-[100vh]"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
