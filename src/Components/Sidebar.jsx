import React from 'react'
import Steps from './Steps'

export default function Sidebar(props) {
  return (
    <div className='bg-sidebarOne bg-no-repeat w-[40%] h-[100%] rounded-xl'>

       <div className='flex w-[80%] h-[100%] flex-col justify-start pt-10 items-start gap-4'>

        <Steps number={"1"} header={"STEP 1"} subheader={"YOUR INFO"} currentStep={props.currentStep}/>

        <Steps number={"2"} header={"STEP 2"} subheader={"SELECT PLAN"} currentStep={props.currentStep}/>

        <Steps number={"3"} header={"STEP 3"} subheader={"ADD-ONS"} currentStep={props.currentStep}/>

        <Steps number={"4"} header={"STEP 4"} subheader={"SUMMARY"} currentStep={props.currentStep}/>

       </div>

    </div>
  )
}
