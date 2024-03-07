import React from "react";
import Input from "./Input";

export default function Personal(props) {
  return (
    <div className="w-[100%] md:h-[80%] flex flex-col gap-6">
      <Input
        inputTitle={"Your name is:"}
        placeholder={"Type here"}
        inputType={"text"}
        setTextInput={props.setTextInput}
        setMailInput={props.setMailInput}
        setNumberInput={props.setNumberInput}
      />

      <Input
        inputTitle={"Your email is:"}
        placeholder={"Type here"}
        inputType={"email"}
        setTextInput={props.setTextInput}
        setMailInput={props.setMailInput}
        setNumberInput={props.setNumberInput}
      />

      <Input
        inputTitle={"Your phone number is:"}
        placeholder={"Type here"}
        inputType={"telephone"}
        setTextInput={props.setTextInput}
        setMailInput={props.setMailInput}
        setNumberInput={props.setNumberInput}
      />
    </div>
  );
}
