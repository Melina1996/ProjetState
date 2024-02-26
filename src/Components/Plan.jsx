import React from 'react'
import { useState } from "react"
import EachPlan from './EachPlan'
import Arcade from "../assets/img/icon-arcade.svg"
import Advanced from "../assets/img/icon-advanced.svg"
import Pro from "../assets/img/icon-pro.svg"


export default function Plan() {

    const[plan,setPlan]=useState("year")

  return (

    <div className='w-[100%] h-[80%] flex flex-col gap-5'>

        <div className='w-[100%] h-[80%] flex justify-center items-center gap-4'>

            <EachPlan icon={Arcade} plan={"Arcade"} price={plan == "year" ? "$90/yr" : "$9/mo"}/>

            <EachPlan icon={Advanced} plan={"Advanced"} price={plan == "year" ? "$120/yr" : "$12/mo"}/>

            <EachPlan icon={Pro} plan={"Pro"} price={plan == "year" ? "$150/yr" : "$15/mo"}/>

        </div>

        <div className='w-[100%] h-[20%] flex justify-center items-center'>

            <input type="checkbox" className="toggle [--tglbg:yellow] bg-blue-500 hover:bg-blue-700 border-blue-500" checked />

        </div>




    </div>
  )
}
