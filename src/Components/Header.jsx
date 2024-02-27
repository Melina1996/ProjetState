import React from "react";

export default function Header(props) {
  return (
    <div className="w-[100%] md:h-[20%] h-[10%] pb-2 md:pb-0">
      <h1 className="text-[#012A5Bff] md:text-[35px] text-[25px] font-semibold">
        {props.header}
      </h1>
      <p className="text-[#C8C8C8ff] md:text-[15px] text-[12px]">{props.subtext}</p>
    </div>
  );
}
