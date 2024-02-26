import React from 'react'
import Checkbox from './Checkbox'

export default function Add_ons(props) {
  return (
    <div className='w-[100%] h-[70%] flex flex-col gap-3'>

    <Checkbox service={"Online service"} description={"Access to multiplayet games"} price={"+10$/yr"} setOnline={props.setOnline} setStorage={props.setStorage} setProfile={props.setProfile}/>

    <Checkbox service={"Larger storage"} description={"Access to multiplayet games"} price={"+10$/yr"} setOnline={props.setOnline} setStorage={props.setStorage} setProfile={props.setProfile}/>

    <Checkbox service={"Customizable Profile"} description={"Curstom theme on your profile"} price={"+20$/yr"} setOnline={props.setOnline} setStorage={props.setStorage} setProfile={props.setProfile}/>

    </div>
  )
}
