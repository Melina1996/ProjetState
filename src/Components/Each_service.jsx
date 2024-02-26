import React from 'react'

export default function Each_service(props) {

  return (

        <div key={props.id} className='w-[100%] h-[20%] rounded-xl flex'> 

            <div className='w-[48%] h-[100%] flex flex-col justify-center items-start pl-6'>

                <p>{props.element.name}</p>

            </div>

            <div className='w-[48%] h-[100%] flex justify-end items-center pr-6'>

                <p className='text-[#012A5Bff] text-[15px] font-semibold'>+${props.element.price}{props.plan == "yearly" ? "/yr" : "/mo"}</p>

            </div>

        </div>
  )
}
