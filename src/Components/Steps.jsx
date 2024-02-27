import React from "react";

export default function Steps(props) {
  return (
    <div className="w-[35%] md:w-[100%] md:ml-6 gap-4 flex justify-start items-center">
      <div
        className={`rounded-full w-[40px] h-[40px] ${
          props.number == props.currentStep
            ? "bg-[#BEE0FBff] border-[#C8C8C8ff]"
            : "border-white bg-none"
        }  border-2 border-solid flex justify-center items-center`}
      >
        <p
          className={`font-semibold text-[18px] ${
            props.number == props.currentStep
              ? "text-[#012A5Cff]"
              : "text-white"
          }`}
        >
          {props.number}
        </p>
      </div>

      <div className="flex flex-col text-white">
        <p className="md:text-[15px] text-[10px]">{props.header}</p>
        <p className="font-semibold md:text-[18px] text-[12px]">{props.subheader}</p>
      </div>
    </div>
  );
}
