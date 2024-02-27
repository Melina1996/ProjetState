import React from "react";

export default function Header(props) {
  return (
    <div className="w-[100%] h-[20%]">
      <h1 className="text-[#012A5Bff] text-[35px] font-semibold">
        {props.header}
      </h1>
      <p className="text-[#C8C8C8ff] text-[15px]">{props.subtext}</p>
    </div>
  );
}
