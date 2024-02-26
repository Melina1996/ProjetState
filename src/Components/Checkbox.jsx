import React from 'react'
import { useEffect,useState } from "react"

export default function Checkbox(props) {


    function changeBox(e){

        if(e.target.attributes.getNamedItem('my-data').value == "Online service"){
            props.setOnline(e.target.checked)
        } else if (e.target.attributes.getNamedItem('my-data').value == "Larger storage"){
            props.setStorage(e.target.checked)
        } else if(e.target.attributes.getNamedItem('my-data').value == "Customizable profile"){
            props.setProfile(e.target.checked)
        }

    }

  return (
    <div>
        <div className="flex justify-center items-center w-[100%] border-2 border-solid border-[#C8C8C8ff] p-3 rounded-xl">

            <label className="cursor-pointer flex justify-start items-center w-[80%] gap-4">

                <input my-data={props.service} onChange={(e) => changeBox(e)} type="checkbox" className="checkbox checkbox-sm border-[#C8C8C8ff] checked:border-[#8E3E90ff] [--chkbg:#8E3E90ff] [--chkfg:white]" />
                
                <div>

                    <p className='font-semibold text-[#012A5Cff]'>{props.service}</p>
                    <p>{props.description}</p>

                </div>


            </label>

            <div className="cursor-pointer flex justify-end items-center w-[20%]">

                <p></p>


            </div>

        </div>
    </div>
  )
}
