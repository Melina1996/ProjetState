import React from "react";
import { useState, useEffect } from "react"

export default function Each_service(props) {

  //my useEffect allows me to update the price variable of my 3 services according to the change of the toggle for "year" or "month"
  useEffect(()=>{

    if(props.name == "Online service"){
      props.setPriceServiceOnline(props.plan == "yearly" ? 10 : 1)
    } 
    
    if(props.name == "Larger storage"){
      props.setPriceServiceStorage(props.plan == "yearly" ? 20 : 2)
    }

    if(props.name == "Customizable profile"){
      props.setPriceServiceProfile(props.plan == "yearly" ? 20 : 2)
    }

  },[props.toggled])

  return (
    <div key={props.id} className="w-[100%] rounded-xl flex justify-center items-center">
      <div className="w-[48%] flex flex-col justify-center items-start">
        <p className="md:text-[15px] text-[12px]">{props.name}</p>
      </div>

      <div className="w-[48%] flex justify-end items-center">
        <p className="text-[#012A5Bff] text-[15px] font-semibold">
          {/* depending on the name of the selected service, I put the price */}
          +${props.name == "Online service" ? props.priceServiceOnline : props.name == "Larger storage" ? props.priceServiceStorage : props.name == "Customizable profile" ? props.priceServiceProfile : ""}
          {props.plan == "yearly" ? "/yr" : "/mo"}
        </p>
      </div>
    </div>
  );
}
