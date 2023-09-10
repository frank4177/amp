import RegisterForm from '@/components/form/Forms/RegisterForm'
import Logo from '@/components/shared/Logo'
import Image from 'next/image'
import React from 'react'
import registerImage from "../../public/assets/images/registerImage.png";

const RegisterPage = () => {
  return (
      <>
      <div>
        <div className="flex flex-row min-h-[100vh]">
          <div className="w-[50%] p-6  flex flex-col z-2 ">
            <div className="self-start justify-self-start">
              <Logo />
            </div>
            <RegisterForm />
          </div>

          <div className="w-[60%] z-10 min-h-[100vh]">
            <Image
              src={registerImage}
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
  )
}

export default RegisterPage