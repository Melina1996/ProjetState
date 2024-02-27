import React from "react";
import { useState, useEffect } from "react";

export default function Input(props) {
  //in order to directly read user input and display it in my p
  const [input, setInput] = useState("");

  function changeInput(type) {
    if (type == "text") {
      props.setTextInput(input);
    } else if (type == "email") {
      props.setMailInput(input);
    } else if (type == "telephone") {
      props.setNumberInput(input);
    }
  }

  return (
    <div className="flex flex-col justify-center items-start">
      <p className="text-[#012A5Cff] text-[14px] md:text-[16px] font-semibold tracking-wider">
        {props.inputTitle} {input}
      </p>

      {/* onChange function for display of my user input */}
      <input
        onChange={(e) => {
          setInput(e.target.value), changeInput(props.inputType);
        }}
        type={props.inputType}
        placeholder={props.placeholder}
        className="pl-2 bg-white border-2 border-solid border-[#C8C8C8ff] rounded-lg h-[50px] w-[100%] flex justify-center items-center focus:border-[#943C94ff] focus:outline-none"
      />
    </div>
  );
}
