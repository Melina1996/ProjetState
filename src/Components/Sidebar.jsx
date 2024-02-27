import React from 'react'
import Steps from './Steps'

export default function Sidebar(props) {
  return (
    <div className='md:bg-sidebarOne mt-4 md:mt-0 bg-sidebarTwo bg-no-repeat bg-cover w-[100%] h-[30%] md:w-[35%] md:h-[90%] rounded-xl'>

       <div className='flex w-[100%] h-[100%] md:flex-col flex-row justify-start md:pt-10 md:items-start itens-center gap-8 rounded-xl'>

        <Steps number={"1"} header={"STEP 1"} subheader={"YOUR INFO"} currentStep={props.currentStep}/>

        <Steps number={"2"} header={"STEP 2"} subheader={"SELECT PLAN"} currentStep={props.currentStep}/>

        <Steps number={"3"} header={"STEP 3"} subheader={"ADD-ONS"} currentStep={props.currentStep}/>

        <Steps number={"4"} header={"STEP 4"} subheader={"SUMMARY"} currentStep={props.currentStep}/>

       </div>

    </div>
  )
}
