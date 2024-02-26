import { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import Personal from "./Components/Personal";
import Header from "./Components/Header";
import Plan from "./Components/Plan";

function App() {
  const [currentStep, setStep] = useState(1);

  let headerInfo = [{header: "Personal info", subtext: "Please provide your name, email address, and phone number."},{header: "Select your plan", subtext: "You have the option of monthly or yearly billing"},{header: "Pick add-ons", subtext: "Add-ons help enhance your gaming experience."},{header: "Finishing up", subtext: "Double-check everything looks OK before confirming."},{header:"",subtext:""}];

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#F0F4FDff]">
      <div className="w-[900px] h-[600px] bg-white flex justify-center items-center rounded-xl">
        <div className="w-[90%] h-[90%] flex justify-center items-center gap-10">
          <Sidebar currentStep={currentStep} />

          <div className="w-[60%] h-[90%] flex flex-col justify-start items-start">

            <Header header={currentStep == 1 ? headerInfo[0].header : currentStep == 2 ? headerInfo[1].header : currentStep == 3 ? headerInfo[2].header : currentStep == 4? headerInfo[3].header : currentStep == 5 ? headerInfo[4].header : ""} subtext={currentStep == 1 ? headerInfo[0].subtext : currentStep == 2 ? headerInfo[1].subtext : currentStep == 3 ? headerInfo[2].subtext : currentStep == 4? headerInfo[3].subtext : currentStep == 5 ? headerInfo[4].subtext : ""}/>

            {currentStep == 1 ? 

            <Personal />

            : currentStep == 2 ?

            <Plan /> :
            ""



              }

            <div className="h-[10%] w-[100%] flex justify-center items-center">
              <div className="w-[50%] flex justify-start items-center">
                <button
                  onClick={() =>
                    currentStep > 0 ? setStep(currentStep - 1) : ""
                  }
                  className="text-[#012A5Cff] font-semibold"
                >
                  Go back
                </button>
              </div>

              <div className="w-[50%] flex justify-end items-center">
                <button
                  onClick={() =>
                    currentStep < 5 ? setStep(currentStep + 1) : ""
                  }
                  className="bg-[#012A5Cff] rounded-lg text-white p-3"
                >
                  Next step
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
