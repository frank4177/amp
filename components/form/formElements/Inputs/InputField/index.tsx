import { authInputDataType } from "@/types";
import React from "react";
import styles from "./index.module.css"

interface IinputProps {
  data: authInputDataType;
}

const InputField = ({ data }: IinputProps) => {
  const inStyle = {
    input: {
      maxWidth: `${data?.width}px`,
      height: `${data?.height}px`,
    },
  };

  return (
    <>
      <div className="mt-2 flex flex-col">
        <label htmlFor="" className="font-[600] text-[14px] mb-1">
          {data?.title ? data?.title : "Title"}
          <span className="text-red-700">{data?.required ? "*" : null}</span>
        </label>

        <div style={inStyle.input} className={styles.inputWrap}>
          <span>{data?.iconStart}</span>
          <input 
            type={data?.type}
            className="placeholder:text-[14px] text-[13px] w-full outline-none border-none "
            placeholder={`${data?.placeholder}`}
          />
          <span>{data?.iconEnd}</span>
        </div>
      </div>
    </>
  );
};

export default InputField;
