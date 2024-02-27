import React from "react";

export default function Steps(props) {
  return (
    <div className="w-[100%] md:ml-6 gap-4 flex md:justify-start justify-center items-center">
      <div
        className={`rounded-full md:w-[40px] md:h-[40px] w-[20px] h-[20px] ${
          props.number == props.currentStep
            ? "bg-[#BEE0FBff] border-[#C8C8C8ff]"
            : "border-white bg-none"
        }  border-2 border-solid flex justify-center items-center`}
      >
        <p
          className={`font-semibold text-[8px] md:text-[18px] ${
            props.number == props.currentStep
              ? "text-[#012A5Cff]"
              : "text-white"
          }`}
        >
          {props.number}
        </p>
      </div>

      <div className="flex flex-col text-white">
        <p className="md:text-[18px] text-[8px]">{props.header}</p>
        <p className="font-semibold md:text-[18px] text-[8px]">{props.subheader}</p>
      </div>
    </div>
  );
}
