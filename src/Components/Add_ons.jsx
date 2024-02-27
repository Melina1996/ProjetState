import React from "react";
import Checkbox from "./Checkbox";

export default function Add_ons(props) {
  return (
    <div className="w-[100%] h-[70%] flex flex-col gap-3">
      <Checkbox
        service={"Online service"}
        description={"Access to multiplayet games"}
        price={props.plan == "yearly" ? 10 : 1}
        setOnline={props.setOnline}
        setStorage={props.setStorage}
        setProfile={props.setProfile}
        plan={props.plan}
        checkOnline={props.checkOnline}
        setCheckOnline={props.setCheckOnline}
        checkStorage={props.checkStorage}
        setCheckStorage={props.setCheckStorage}
        checkProfile={props.checkProfile}
        setCheckProfile={props.setCheckProfile}
      />

      <Checkbox
        service={"Larger storage"}
        description={"Access to multiplayet games"}
        price={props.plan == "yearly" ? 20 : 2}
        setOnline={props.setOnline}
        setStorage={props.setStorage}
        setProfile={props.setProfile}
        plan={props.plan}
        checkOnline={props.checkOnline}
        setCheckOnline={props.setCheckOnline}
        checkStorage={props.checkStorage}
        setCheckStorage={props.setCheckStorage}
        checkProfile={props.checkProfile}
        setCheckProfile={props.setCheckProfile}
      />

      <Checkbox
        service={"Customizable profile"}
        description={"Custom theme on your profile"}
        price={props.plan == "yearly" ? 20 : 2}
        setOnline={props.setOnline}
        setStorage={props.setStorage}
        setProfile={props.setProfile}
        plan={props.plan}
        checkOnline={props.checkOnline}
        setCheckOnline={props.setCheckOnline}
        checkStorage={props.checkStorage}
        setCheckStorage={props.setCheckStorage}
        checkProfile={props.checkProfile}
        setCheckProfile={props.setCheckProfile}
      />
    </div>
  );
}
