import React from "react";
import { useEffect, useState } from "react";

export default function Checkbox(props) {

 //Change value of my variable that stores "true" or "false" depending on whether the box is checked. Need this info to accordingly change the style of my checkbox AND for the overview in order to only display the TRUE-services
 
 function changeBox(e) {
    if (e.target.attributes.getNamedItem("my-data").value == "Online service") {
      props.setCheckOnline(!props.checkOnline);
    } else if (
      e.target.attributes.getNamedItem("my-data").value == "Larger storage"
    ) {
      props.setCheckStorage(!props.checkStorage);
    } else if (
      e.target.attributes.getNamedItem("my-data").value ==
      "Customizable profile"
    ) {
      props.setCheckProfile(!props.checkProfile);
    }
  }

  return (
    <div>
      <div
      //condition in order to change style of checkbox once clicked (for that use the same variable than for the style of my check)
        className={`flex justify-center items-center w-[100%] border-2 border-solid p-3 rounded-xl hover:border-[#943C94ff] ${props.service == "Online service" && props.checkOnline || props.service == "Larger storage" && props.checkStorage || props.service == "Customizable profile" && props.checkProfile?
        ("bg-[#EFEFEFff] border-[#943C94ff]") : "bg-white border-[#C8C8C8ff]"} `}
      >
        <label className="cursor-pointer flex justify-start items-center w-[80%] gap-4">
          <input
          // this is needed in order to manage the style: to be able to maintain the checked boxes even when leaving display and returning
            checked={
              props.service == "Online service" && props.checkOnline
                ? true
                : props.service == "Larger storage" && props.checkStorage
                ? true
                : props.service == "Customizable profile" && props.checkProfile
                ? true
                : ""
            }
            my-data={props.service}
            onChange={(e) => changeBox(e)}
            type="checkbox"
            className={`checkbox checkbox-sm checked:border-[#8E3E90ff] [--chkbg:#8E3E90ff] [--chkfg:white]`}
          />

          <div>
            <p className="font-semibold text-[#012A5Cff] md:text-[17px] text-[15px]">{props.service}</p>
            <p className="md:text-[15px] text-[12px]">{props.description}</p>
          </div>
        </label>

        <div className="cursor-pointer flex justify-end items-center w-[20%]">
          <p>
            ${props.price}/{props.plan == "yearly" ? "yr" : "mo"}
          </p>
        </div>
      </div>
    </div>
  );
}
