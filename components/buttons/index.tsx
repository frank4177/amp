import { buttonType } from "@/types";
import React from "react";


const Button = (props: buttonType) => {
  const { width, title, background,color, height, handleClick } = props;
  const inStyle = {
    btn: {
      maxWidth: `${width ? width : null}px`,
      background: `${background ? background :"black"}`,
      color: `${color ? color : "white"}`,
      height: `${height ? height : 40}px`,
    },
  };
  return (
    <>
      <button
        className="border-[2px] border-black tex-[14px] w-full rounded-[8px]"
        style={inStyle.btn}
      >
        {title ? title : "Title"}
      </button>
    </>
  );
};

export default Button;
