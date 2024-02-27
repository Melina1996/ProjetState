import React from "react";

export default function Each_service(props) {
  return (
    <div key={props.id} className="w-[100%] rounded-xl flex justify-center items-center">
      <div className="w-[48%] flex flex-col justify-center items-start">
        <p className="md:text-[15px] text-[12px]">{props.element.name}</p>
      </div>

      <div className="w-[48%] flex justify-end items-center">
        <p className="text-[#012A5Bff] text-[15px] font-semibold">
          +${props.element.price}
          {props.plan == "yearly" ? "/yr" : "/mo"}
        </p>
      </div>
    </div>
  );
}
