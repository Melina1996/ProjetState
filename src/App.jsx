import { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import Personal from "./Components/Personal";
import Header from "./Components/Header";
import Plan from "./Components/Plan";
import Add_ons from "./Components/Add_ons";
import Overview from "./Components/Overview";
import Thanks from "./Components/Thanks";

function App() {

  //useState to change Display
  const [currentStep, setStep] = useState(1);

  //useState for the chosen plan (Arcade, Pro,etc.)
  const [chosenPlan, chosePlan] = useState("");

  //useState in order to determine price of my selected plan (value is changed on click on my plan-btn)
  const [finalPrice, setPrice] = useState([]);

  //useStates to store all of my input field values in a variable and then to be able to check whether they have been filled in or not with ".length"
  const [textInput, setTextInput] = useState("");

  const [mailInput, setMailInput] = useState("");

  const [numberInput, setNumberInput] = useState("");

  //useState for the payment yearly/monthly
  const [plan, setPlan] = useState("monthly");

  //TOGGLE btn: need useState in order to stock state of toggle-btn and keep its position saved when changing display and returning to display

  const[toggled,setToggle]=useState(false)

  //function for my toggle btn on page 2 in order to change my useState "plan" according to the toggle's result
  
  function toggle(e) {
    if (e.target.checked) {
      setPlan("yearly");
      setCheckOnline(false)
      setCheckStorage(false)
      setCheckProfile(false) 
    } else {
      setPlan("monthly");
      setCheckOnline(false)
      setCheckStorage(false)
      setCheckProfile(false)
    }
  }

  //CHECKBOXES

  //functionality: 3 useStateswith each an object for my 3 services that are later modified if chosen
  const [online, setOnline] = useState([{ price: 0 }]);

  const [storage, setStorage] = useState([{ price: 0 }]);

  const [profile, setProfile] = useState([{ price: 0 }]);

  //set the three objects into an array in order to be able to map over them in my Overview-Display
  const services = [online, storage, profile];

  //style: in order to maintain the checked style even when returning to the page, I need three useStates for each of the services that are set "true", when service has been checked. The built-in attribute "checked" is assigned the respective value (style didn't stay checked without this)
  const [checkOnline, setCheckOnline] = useState(false);

  const [checkStorage, setCheckStorage] = useState(false);

  const [checkProfile, setCheckProfile] = useState(false);

  //array with objects for each of the display's header
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
    <div className="w-screen md:h-screen h-fit flex justify-center items-center bg-[#F0F4FDff] font-ubuntu">
      
      <div className="w-[900px] md:h-[600px] h-fit bg-white flex justify-center items-center rounded-xl">

        <div className="md:w-[90%] w-[100%] md:h-[90%] md:pt-2 pt-0 flex md:flex-row flex-col justify-center items-center md:gap-10 gap-4">
          
          <Sidebar currentStep={currentStep} />

          <div className="md:w-[60%] w-[90%] md:h-[90%] flex flex-col justify-start items-start gap-5 md:gap-0">

            {/* header is displayed according to site */}
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
              // send input-useStates in order to assign them accordingly
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
                toggled={toggled}
                setToggle={setToggle}
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
              <div className="md:h-[10%] w-[100%] flex justify-center items-center pt-2 pb-2 md:pb-0 md:pt-0">
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
                    onClick={() =>
                      //disable btn "next" in case no plan and no prsonal info has been put in
                      (currentStep == 1 && textInput.length == 0) ||
                      mailInput.length == 0 ||
                      numberInput.length == 0 ||
                      (currentStep == 2 && chosenPlan == "")
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
