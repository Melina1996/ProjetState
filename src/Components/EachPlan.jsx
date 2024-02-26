import React from 'react'
import { useState,useRef } from "react"

export default function EachPlan(props) {


  const[active,setActive]=useState(false)

  const[style,setStyle]=useState("")

  function test(e){
    console.log(e.target)

  }
  


  return (
    <div className='w-[30%] h-[100%] flex justify-center items-center'>

    <button onClick={(e)=> {props.chosePlan(props.namePlan),props.setPrice(props.price), test(e)}} className={`${active ? "bg-[#EFEFEFff] border-[#C196ECff]" : "bg-none border-[#C8C8C8ff]"} hover:border-[#C196ECff] my-btn flex flex-col w-[100%] h-[70%] justify-center items-start border-2 border-solid p-4 rounded-xl`}>

        <img src={props.icon} alt="" />

        <div className='mt-10'>

            <p className='text-[#012A5Cff] font-semibold'>{props.namePlan}</p>

            <p className='text-[#C8C8C8ff]'>${props.price}/{props.plan == "yearly" ? "yr" : "mo"}</p>

        </div>

    </button>


    </div>
  )
}
