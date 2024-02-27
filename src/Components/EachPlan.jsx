import React from 'react'
import { useState,useRef,useEffect } from "react"

export default function EachPlan(props) {

  return (
    <div className='md:w-[30%] md:h-[100%] w-[90%] flex justify-center items-center'>

    <button onClick={()=> {props.chosePlan(props.namePlan),props.setPrice(props.price)}} className={`${props.chosenPlan == props.namePlan ? ("bg-[#EFEFEFff] border-[#943C94ff]") : "bg-white"} hover:border-[#943C94ff] my-btn flex md:flex-col flex-row w-[100%] md:h-[70%] h-[100%] md:justify-center justify-start gap-4 md:gap-0 md:items-start items-center border-2 border-solid md:p-4 p-2 rounded-xl`}>

        <img src={props.icon} alt="" />

        <div className='md:mt-10 flex flex-col justify-start items-start'>

            <p className='text-[#012A5Cff] font-semibold'>{props.namePlan}</p>

            <p className='text-[#C8C8C8ff]'>${props.price}/{props.plan == "yearly" ? "yr" : "mo"}</p>

        </div>

    </button>

    </div>
  )
}
