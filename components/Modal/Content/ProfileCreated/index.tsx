import React from "react";
import Modal from "../..";
import Image from "next/image";
import greenCheck from "../../../../public/assets/images/greenCheck.png";
import {AiOutlineWarning} from "react-icons/ai"
import Button from "@/components/buttons";

const ProfileCreatedModal = () => {
  return (
    <>
      <Modal>
        <div className="max-w-[480px] w-full min-h-[387px] bg-white flex flex-col items-center gap-5 py-5 rounded-[12px] box-border px-5">
          <Image src={greenCheck} alt="check" width={50} height={100} />
          <p className="text-[18px] font-[700]">Profile Created</p>
          <p className="text-center text-gray-400 text-[14px] font-[400]">
            Your profile for Amapay has been successfully created. <br /> Please
            proceed to the Onboarding process
          </p>

          <div className="border-l-[3px] border-l-darkOrange bg-[#FFF9F2] flex flex-row items-center">
            <AiOutlineWarning size={25} className="min-w-[30px]" color="#E18308"/>
            <p className="text-[13px] leading-6 p-2">
              Please note that the onboarding process will take you an estimate of 15-20 minutes to complete. Your informations are automatically
              saved should you decide to leave and return at a later time.
            </p>
          </div>

          <div className="flex flex-row gap-2 items-center w-full justify-center">
            <Button background="white" color="black" width={200} title="Cancel"/>
            <Button width={200} title="Proceed"/>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProfileCreatedModal;
