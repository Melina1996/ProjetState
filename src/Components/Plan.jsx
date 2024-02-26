import React from 'react'
import { useState } from "react"
import EachPlan from './EachPlan'
import Arcade from "../assets/img/icon-arcade.svg"
import Advanced from "../assets/img/icon-advanced.svg"
import Pro from "../assets/img/icon-pro.svg"


export default function Plan(props) {

  return (

    <div className='w-[100%] h-[70%] flex flex-col gap-3'>

        <div className='w-[100%] h-[70%] flex justify-center items-center gap-4'>

            <EachPlan setPrice={props.setPrice} icon={Arcade} namePlan={"Arcade"} price={props.plan == "yearly" ? "$90/yr" : "$9/mo"} chosePlan={props.chosePlan}/>

            <EachPlan setPrice={props.setPrice}  icon={Advanced} namePlan={"Advanced"} price={props.plan == "yearly" ? "$120/yr" : "$12/mo"} chosePlan={props.chosePlan}/>

            <EachPlan setPrice={props.setPrice}  icon={Pro} namePlan={"Pro"} price={props.plan == "yearly" ? "$150/yr" : "$15/mo"} chosePlan={props.chosePlan}/>

        </div>

        <div className='w-[100%] h-[20%] flex justify-center items-center gap-4 bg-[#F3F4FDff] rounded-xl'>

          <p className='text-[#012A5Bff] font-semibold'>Monthly</p>

          <input onChange={() => props.toggle()} type="checkbox" className="toggle [--tglbg:#012A5Bff] bg-white hover:bg-white" defaultChecked/>

          <p className='text-[#012A5Bff] font-semibold'>Yearly</p>

        </div>




    </div>
  )
}
