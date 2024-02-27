import React from 'react'
import Steps from './Steps'

export default function Sidebar(props) {
  return (
    <div className='md:bg-sidebarOne bg-no-repeat bg-cover md:w-[35%] md:h-[100%] bg-sidebarTwo w-[100%] h-[150px] rounded-xl'>

       <div className='flex md:w-[80%] w-[100%] h-[100%] md:flex-col flex-row md:justify-start justify-center md:pt-10 md:items-start items-center md:gap-8 rounded-xl'>

        <Steps number={"1"} header={"STEP 1"} subheader={"YOUR INFO"} currentStep={props.currentStep}/>

        <Steps number={"2"} header={"STEP 2"} subheader={"SELECT PLAN"} currentStep={props.currentStep}/>

        <Steps number={"3"} header={"STEP 3"} subheader={"ADD-ONS"} currentStep={props.currentStep}/>

        <Steps number={"4"} header={"STEP 4"} subheader={"SUMMARY"} currentStep={props.currentStep}/>

       </div>

    </div>
  )
}
