import React from "react";
import { useEffect } from "react";
import Each_service from "./Each_service";

export default function Overview(props) {
  return (
    <div className="w-[100%] h-[70%] flex flex-col gap-3">
        
      <div className="w-[100%] h-[80%] flex-col gap-3 bg-[#F3F4FDff] rounded-xl">

        <div className="w-[100%] h-[50%] rounded-xl flex">
            
          <div className="w-[50%] h-[100%] flex flex-col justify-center items-start pl-6">
            <p className='text-[#012A5Bff] text-[18px] font-semibold'>
              {props.chosenPlan}({props.plan})
            </p>

            <button className="underline underline-offset-1" onClick={()=> props.setStep(2)}>Change</button>
          </div>

          <div className="w-[50%] h-[100%] flex justify-end items-center pr-6">
            <p className='text-[#012A5Bff] text-[18px] font-semibold'>${props.finalPrice}{props.plan == "yearly" ? "/yr" : "/mo"}</p>
          </div>
        </div>

        <div className="w-[100%] h-[50%] gap-3 flex flex-col justify-center items-center border-t-2">
            {props.services.map((element, id) => {
            return element.state ? (
                <Each_service element={element} key={id} plan={props.plan}/>
            ) : (
                ""
            );
            })}
        </div>
      </div>

      <div className="w-[100%] h-[20%] flex gap-3">
        <div className="w-[50%] h-[100%] flex justify-start items-center pl-6">
          <p className="text-[15px]">Total per ({props.plan == "yearly" ? "Year" : "Month"})</p>
        </div>

        <div className="w-[50%] h-[100%] flex justify-end items-center pr-6">
          <p className="text-[#5956F9ff] text-xl font-semibold">$
            {(props.online.price != undefined ? props.online.price : 0) +
              (props.storage.price != undefined ? props.storage.price : 0) +
              (props.profile.price != undefined ? props.profile.price : 0) +
              props.finalPrice}{props.plan == "yearly" ? "/yr" : "/mo"}
          </p>
        </div>
      </div>
    </div>
  );
}
