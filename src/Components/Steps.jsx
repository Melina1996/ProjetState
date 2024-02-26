import React from 'react'

export default function Steps(props) {
  return (

    <div className='w-[100%] ml-6 gap-4 flex justify-start items-center text-white'>

            <div className='rounded-full w-[40px] h-[40px] border-white border-2 border-solid flex justify-center items-center'>

            <p className='text-white font-semibold'>{props.number}</p>

            </div>
            

            <div className='flex flex-col'>
                <p className='text-[10px]'>{props.header}</p>
                <p className='font-semibold'>{props.subheader}</p>
            </div>
    </div>
  )
}
