import { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import Personal from "./Components/Personal";
import Header from "./Components/Header";
import Plan from "./Components/Plan";
import Add_ons from "./Components/Add_ons";
import Overview from "./Components/Overview";
import Thanks from "./Components/Thanks";

function App() {
  const [currentStep, setStep] = useState(1);

  const [chosenPlan, chosePlan] = useState("");

  const [finalPrice, setPrice] = useState("");

  const [myStyle, setStyle] = useState("bg-none border-[#C8C8C8ff]");

  const [textInput, setTextInput] = useState("");


  const [mailInput, setMailInput] = useState("");

  const [numberInput, setNumberInput] = useState("");



  const [plan, setPlan] = useState("monthly");

  function toggle() {
    if (plan == "yearly") {
      setPlan("monthly");
    } else {
      setPlan("yearly");
    }
  }

  const [online, setOnline] = useState([{ price: 0 }]);

  const [storage, setStorage] = useState([{ price: 0 }]);

  const [profile, setProfile] = useState([{ price: 0 }]);

  const [checkOnline, setCheckOnline] = useState(false);
  const [checkStorage, setCheckStorage] = useState(false);
  const [checkProfile, setCheckProfile] = useState(false);

  const services = [online, storage, profile];

  console.log(services);

  let headerInfo = [
    {
      header: "Personal info",
      subtext: "Please provide your name, email address, and phone number.",
    },
    {
      header: "Select your plan",
      subtext: "You have the option of monthly or yearly billing",
    },
    {
      header: "Pick add-ons",
      subtext: "Add-ons help enhance your gaming experience.",
    },
    {
      header: "Finishing up",
      subtext: "Double-check everything looks OK before confirming.",
    },
    { header: "", subtext: "" },
  ];

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#F0F4FDff] font-ubuntu">
      <div className="w-[900px] h-[600px] bg-white flex justify-center items-center rounded-xl">
        <div className="w-[90%] h-[90%] flex justify-center items-center gap-10">
          <Sidebar currentStep={currentStep} />

          <div className="w-[60%] h-[90%] flex flex-col justify-start items-start">
            <Header
              header={
                currentStep == 1
                  ? headerInfo[0].header
                  : currentStep == 2
                  ? headerInfo[1].header
                  : currentStep == 3
                  ? headerInfo[2].header
                  : currentStep == 4
                  ? headerInfo[3].header
                  : currentStep == 5
                  ? headerInfo[4].header
                  : ""
              }
              subtext={
                currentStep == 1
                  ? headerInfo[0].subtext
                  : currentStep == 2
                  ? headerInfo[1].subtext
                  : currentStep == 3
                  ? headerInfo[2].subtext
                  : currentStep == 4
                  ? headerInfo[3].subtext
                  : currentStep == 5
                  ? headerInfo[4].subtext
                  : ""
              }
            />

            {currentStep == 1 ? (
              <Personal
                setTextInput={setTextInput}
                setMailInput={setMailInput}
                setNumberInput={setNumberInput}
              />
            ) : currentStep == 2 ? (
              <Plan
                chosePlan={chosePlan}
                chosenPlan={chosenPlan}
                toggle={toggle}
                plan={plan}
                setPrice={setPrice}
                myStyle={myStyle}
                setStyle={setStyle}
              />
            ) : currentStep == 3 ? (
              <Add_ons
                setOnline={setOnline}
                setStorage={setStorage}
                setProfile={setProfile}
                checkOnline={checkOnline}
                setCheckOnline={setCheckOnline}
                checkStorage={checkStorage}
                setCheckStorage={setCheckStorage}
                checkProfile={checkProfile}
                setCheckProfile={setCheckProfile}
                plan={plan}
              />
            ) : currentStep == 4 ? (
              <Overview
                setStep={setStep}
                services={services}
                storage={storage}
                profile={profile}
                online={online}
                chosenPlan={chosenPlan}
                plan={plan}
                finalPrice={finalPrice}
              />
            ) : currentStep == 5 ? (
              <Thanks />
            ) : (
              ""
            )}

            {currentStep < 5 ? (
              <div className="h-[10%] w-[100%] flex justify-center items-center">
                <div className="w-[50%] flex justify-start items-center">
                  <button
                    onClick={() =>
                      currentStep > 1 ? setStep(currentStep - 1) : ""
                    }
                    className="text-[#012A5Cff] font-semibold"
                  >
                    Go back
                  </button>
                </div>

                <div className="w-[50%] flex justify-end items-center">
                  <button
                    onClick={() => currentStep == 1 && textInput.length == 0 || mailInput.length == 0 || numberInput.length == 0 ||
                      currentStep == 2 && chosenPlan == ""
                        ? ""
                        : setStep(currentStep + 1)
                    }
                    className={`${
                      currentStep == 4 ? "bg-[#4A4CFCff]" : "bg-[#012A5Cff]"
                    } rounded-lg text-white p-3 hover:bg-[#003E89ff]`}
                  >
                    {currentStep == 4 ? "Confirm" : "Next step"}
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
