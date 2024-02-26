import React from 'react'
import Checkbox from './Checkbox'

export default function Add_ons(props) {
  return (
    <div className='w-[100%] h-[70%] flex flex-col gap-3'>

    <Checkbox service={"Online service"} description={"Access to multiplayet games"} price={props.plan == "yearly" ? "$10/yr" : "$1/mo"}  setOnline={props.setOnline} setStorage={props.setStorage} setProfile={props.setProfile}/>

    <Checkbox service={"Larger storage"} description={"Access to multiplayet games"} price={props.plan == "yearly" ? "$20/yr" : "$2/mo"} setOnline={props.setOnline} setStorage={props.setStorage} setProfile={props.setProfile}/>

    <Checkbox service={"Customizable Profile"} description={"Curstom theme on your profile"} price={props.plan == "yearly" ? "$20/yr" : "$2/mo"}setOnline={props.setOnline} setStorage={props.setStorage} setProfile={props.setProfile}/>

    </div>
  )
}
