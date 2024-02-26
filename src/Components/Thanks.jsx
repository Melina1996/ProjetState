import React from 'react'
import Thank from "../assets/img/icon-thank-you.svg"

export default function Thanks() {
  return (
    <div className='w-[100%] flex flex-col justify-center items-center gap-3'>

        <img className='w-[100px] h-[100px]' src={Thank} alt="" />

        <h1 className='text-[35px] text-[#012A5Cff] font-semibold'>Thank you!</h1>

        <p className='text-center'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>

    </div>
  )
}
