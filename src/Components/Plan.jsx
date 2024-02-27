import React from 'react'
import { useState } from "react"
import EachPlan from './EachPlan'
import Arcade from "../assets/img/icon-arcade.svg"
import Advanced from "../assets/img/icon-advanced.svg"
import Pro from "../assets/img/icon-pro.svg"


export default function Plan(props) {


  return (

    <div className='w-[100%] h-[70%] flex flex-col md:gap-3 gap-6'>

        <div className='w-[100%] h-[70%] flex md:flex-row flex-col justify-center items-center gap-4'>

            <EachPlan id={1} setPrice={props.setPrice} icon={Arcade} namePlan={"Arcade"} price={props.plan == "yearly" ? 90 : 9} chosePlan={props.chosePlan} chosenPlan={props.chosenPlan} plan={props.plan}/>

            <EachPlan id={2} setPrice={props.setPrice}  icon={Advanced} namePlan={"Advanced"} price={props.plan == "yearly" ? 120 : 12} chosePlan={props.chosePlan} chosenPlan={props.chosenPlan} plan={props.plan}/>

            <EachPlan id={3} setPrice={props.setPrice}  icon={Pro} namePlan={"Pro"} price={props.plan == "yearly" ? 150 : 15} chosePlan={props.chosePlan} chosenPlan={props.chosenPlan} plan={props.plan}/>

        </div>

        <div className='w-[100%] md:h-[20%] h-[70px] flex justify-center items-center gap-4 bg-[#F3F4FDff] rounded-xl'>

          <p className='text-[#012A5Bff] font-semibold'>Monthly</p>

          <input onChange={() => props.toggle()} type="checkbox" className="toggle [--tglbg:#012A5Bff] bg-white hover:bg-white"/>

          <p className='text-[#012A5Bff] font-semibold'>Yearly</p>

        </div>




    </div>
  )
}
