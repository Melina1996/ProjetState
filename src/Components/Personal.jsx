import React from "react";
import Input from "./Input";

export default function Personal(props) {
  return (
    <div className="w-[100%] h-[80%] flex flex-col gap-5">
      <Input
        inputTitle={"Your name is:"}
        placeholder={"Vingt-Six"}
        inputType={"text"}
        setTextInput={props.setTextInput}
        setMailInput={props.setMailInput}
        setNumberInput={props.setNumberInput}
      />

      <Input
        inputTitle={"Your email is:"}
        placeholder={"vingt_six@email.com"}
        inputType={"email"}
        setTextInput={props.setTextInput}
        setMailInput={props.setMailInput}
        setNumberInput={props.setNumberInput}
      />

      <Input
        inputTitle={"Your phone number is:"}
        placeholder={"eg.+1 234 567 890"}
        inputType={"telephone"}
        setTextInput={props.setTextInput}
        setMailInput={props.setMailInput}
        setNumberInput={props.setNumberInput}
      />
    </div>
  );
}
