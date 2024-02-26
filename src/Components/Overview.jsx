import React from 'react'

export default function Overview(props) {
  return (
    <div className='w-[100%] h-[70%] flex flex-col gap-3'>

        <div className='w-[100%] h-[80%] flex-col gap-3 bg-[#F3F4FDff] rounded-xl'>

            <div className='w-[100%] h-[40%] rounded-xl flex'> 

                <div className='w-[50%] h-[100%] flex flex-col justify-center items-start pl-6'>

                    <p>{props.chosenPlan}({props.plan})</p>

                    <button>Change</button>

                </div>

                <div className='w-[50%] h-[100%] flex justify-end items-center pr-6'>

                    <p>{props.finalPrice}</p>

                </div>

            </div>
        

            {props.services.map((element, id) => {


              return (

                element.state ? 

                <div key={id} className='w-[100%] h-[40%] rounded-xl flex'> 

                    <div className='w-[50%] h-[100%] flex flex-col justify-center items-start pl-6'>

                        <p>{element.name}</p>

                    </div>

                    <div className='w-[50%] h-[100%] flex justify-end items-center pr-6'>

                    <p>{element.price}</p>

                    </div>

                </div> :
                ""

                )
              })
          } 


        </div>

        <div className='w-[100%] h-[20%] flex gap-3'>

            <div className='w-[50%] h-[100%] flex justify-start items-center'>

                <p>Total per month</p>

            </div>

            <div className='w-[50%] h-[100%] flex justify-end items-center'>

                <p>$16/montj</p>

            </div>

        </div>

    </div>
  )
}
