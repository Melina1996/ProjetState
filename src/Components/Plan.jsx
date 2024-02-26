import React from 'react'
import { useState } from "react"
import EachPlan from './EachPlan'
import Arcade from "../assets/img/icon-arcade.svg"
import Advanced from "../assets/img/icon-advanced.svg"
import Pro from "../assets/img/icon-pro.svg"


export default function Plan(props) {

    const[plan,setPlan]=useState("yearly")

   function toggle(){
    if(plan == "yearly"){
      setPlan("monthly")
    } else {
      setPlan("yearly")
    }
   }

  return (

    <div className='w-[100%] h-[70%] flex flex-col gap-3'>

        <div className='w-[100%] h-[70%] flex justify-center items-center gap-4'>

            <EachPlan icon={Arcade} plan={"Arcade"} price={plan == "yearly" ? "$90/yr" : "$9/mo"} chosePlan={props.chosePlan}/>

            <EachPlan icon={Advanced} plan={"Advanced"} price={plan == "yearly" ? "$120/yr" : "$12/mo"} chosePlan={props.chosePlan}/>

            <EachPlan icon={Pro} plan={"Pro"} price={plan == "yearly" ? "$150/yr" : "$15/mo"} chosePlan={props.chosePlan}/>

        </div>

        <div className='w-[100%] h-[20%] flex justify-center items-center gap-4 bg-[#F3F4FDff] rounded-xö'>

          <p className='text-[#012A5Bff] font-semibold'>Monthly</p>

          <input onChange={() => toggle()} type="checkbox" className="toggle [--tglbg:#012A5Bff] bg-white hover:bg-white" defaultChecked/>

          <p className='text-[#012A5Bff] font-semibold'>Yearly</p>

        </div>




    </div>
  )
}
