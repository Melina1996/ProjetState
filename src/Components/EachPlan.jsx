import React from 'react'

export default function EachPlan(props) {
  return (
    <div className='w-[30%] h-[100%] flex justify-center items-center'>

    <button className='flex flex-col w-[100%] h-[70%] justify-center items-start border-2 border-[#C8C8C8ff] border-solid p-4 rounded-xl'>

        <img src={props.icon} alt="" />

        <div className='mt-10'>

            <p className='text-[#012A5Cff] font-semibold'>{props.plan}</p>

            <p className='text-[#C8C8C8ff]'>{props.price}</p>

        </div>

    </button>


    </div>
  )
}
