import React from 'react'

export default function Each_service(props) {
  return (
        <div key={props.id} className='w-[100%] h-[40%] rounded-xl flex'> 

            <div className='w-[50%] h-[100%] flex flex-col justify-center items-start pl-6'>

                <p>{props.element.name}</p>

            </div>

            <div className='w-[50%] h-[100%] flex justify-end items-center pr-6'>

                <p>{props.element.price}</p>

            </div>

        </div>
  )
}
