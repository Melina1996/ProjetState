import React from "react";
import { useEffect } from "react";
import Each_service from "./Each_service";

export default function Overview(props) {

  //in order to afterwards match the id of my component with the respective name in this array
  let serviceNames = ["Online service","Larger storage","Customizable profile"]

  return (
    <div className="w-[100%] h-[70%] flex flex-col gap-3">
        
      <div className="w-[100%] h-[80%] flex-col gap-3 bg-[#F3F4FDff] rounded-xl">

        <div className="w-[100%] h-[50%] rounded-xl flex">
            
          <div className="w-[50%] flex flex-col justify-center items-start p-5">
            
            <p className='text-[#012A5Bff] md:text-[18px] text-[15px] font-semibold'>
              {props.chosenPlan}({props.plan})
            </p>

            <button className="underline underline-offset-1 md:text-[15px] text-[12px]" onClick={()=> props.setStep(2)}>Change</button>

          </div>

          <div className="w-[50%] flex justify-end items-center md:pr-6 p-4">
            <p className='text-[#012A5Bff] text-[18px] font-semibold'>${props.finalPrice}{props.plan == "yearly" ? "/yr" : "/mo"}</p>
          </div>
        </div>

        <div className="w-[100%] gap-3 flex flex-col justify-center items-center border-t-2 p-4">
            {props.services.map((element, id) => {
            return element ? (
              //name corresponding to value that has same ID within array "serviceName" as my ceated component here 
                <Each_service name={serviceNames[id]} key={id} plan={props.plan} priceServiceOnline= {props.priceServiceOnline}
                setPriceServiceOnline = {props.setPriceServiceOnline}
                priceServiceStorage = {props.priceServiceStorage}
                setPriceServiceStorage = {props.setPriceServiceStorage}
                priceServiceProfile = {props.priceServiceProfile}
                setPriceServiceProfile = {props.setPriceServiceProfile}/>
            ) : (
                ""
            );
            })}
        </div>
      </div>

      <div className="w-[100%] h-[20%] flex gap-3">
        <div className="w-[50%] h-[100%] flex justify-start items-center p-3">
          <p className="text-[15px]">Total per ({props.plan == "yearly" ? "Year" : "Month"})</p>
        </div>

        <div className="w-[50%] h-[100%] flex justify-end items-center p-3">

        {/* sum: add price of my service to sum if it has been selected to "TRUE". In order to get name of respective TRUE-value, I created a second array with the names and use the unique-id to match the corresponding values*/}
          <p className="text-[#5956F9ff] text-xl font-semibold">$
            {(props.services[0] == true ? props.priceServiceOnline : 0) +
              (props.services[1] == true ? props.priceServiceStorage : 0) +
              (props.services[2] == true ? props.priceServiceProfile : 0) +
              props.finalPrice}{props.plan == "yearly" ? "/yr" : "/mo"}
          </p>
        </div>
      </div>
    </div>
  );
}
