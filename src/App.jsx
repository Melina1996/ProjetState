import { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import Personal from "./Components/Personal";
import Header from "./Components/Header";
import Plan from "./Components/Plan";
import Add_ons from "./Components/Add_ons";
import Overview from "./Components/Overview";

function App() {
  const [currentStep, setStep] = useState(1);

  const [chosenPlan, chosePlan] = useState("");

  const [finalPrice, setPrice] = useState("")

  const[plan,setPlan]=useState("monthly")

  function toggle(){
   if(plan == "yearly"){
     setPlan("monthly")
   } else {
     setPlan("yearly")
   }
  }

  const [online, setOnline] = useState([]);

  const [storage, setStorage] = useState([]);

  const [profile, setProfile] = useState([]);

  const services = [online,storage,profile]

  console.log(services)

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
    <div className="w-screen h-screen flex justify-center items-center bg-[#F0F4FDff]">
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
              <Personal />
            ) : currentStep == 2 ? (
              <Plan chosePlan={chosePlan} toggle={toggle} plan={plan} setPrice={setPrice}/>
            ) : currentStep == 3 ? (
              <Add_ons
                setOnline={setOnline}
                setStorage={setStorage}
                setProfile={setProfile}
                plan={plan}
              />
            ) : currentStep == 4 ? (
              <Overview services={services} chosenPlan={chosenPlan} plan={plan} finalPrice={finalPrice}/>
            ) : (
              ""
            )}

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
                    currentStep == 2 && chosenPlan == ""
                      ? ""
                      : setStep(currentStep + 1)
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
