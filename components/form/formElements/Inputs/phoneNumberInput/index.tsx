"use client";

import React, { useState } from "react";
import "../phoneNumberInput/index.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface IPhoneProps {
  title?: string;
  width?: string;
  placeholder?: string;
  required?: boolean;
}

const PhoneNumberInput = ({
  title,
  width,
  placeholder,
  required,
}: IPhoneProps) => {
  const [value, setValue] = useState<string>();

  const style = {
    input: {
      maxWidth: `${width}px`,
      width: "100%",
      border: "1px solid #989FAD",
      borderRadius: "8px",
    },
  };

  return (
    <>
      <div className="mt-2 flex flex-col">
        <label htmlFor="" className="font-[600] text-[14px] mb-1">
          {title ? title : "Title"}
          <span className="text-red-700">{required ? "*" : null}</span>
        </label>
        <PhoneInput
          country={"ng"}
          value={value}
          onChange={(phone) => setValue(phone)}
          inputStyle={{
            maxWidth: `${width}px`,
            width: "100%",
            height: "41px",
            border: "1px solid #989FAD",
          }}
        />
      </div>
    </>
  );
};

export default PhoneNumberInput;
