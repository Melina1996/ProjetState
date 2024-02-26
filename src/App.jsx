import { useState,useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import Personal from "./Components/Personal";
import Header from "./Components/Header";

function App() {

  const[currentStep,setStep]=useState(0)

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#F0F4FDff]">
      <div className="w-[900px] h-[600px] bg-white flex justify-center items-center rounded-xl">
        <div className="w-[90%] h-[90%] flex justify-center items-center gap-10">
          <Sidebar />

          <div className="w-[60%] h-[90%] flex flex-col justify-start items-start">
            <Header />

            {/* {currentStep == 0 ?  */}

              <Personal />

            {/* //   : currentStep == 1 ?



            // } */}

            

            <div className="h-[10%] w-[100%] flex justify-center items-center">

              <div className="w-[50%] flex justify-start items-center">

                <button onClick={()=> currentStep > 0 ? setStep(currentStep-1) : ""} className="text-[#012A5Cff] font-semibold">
                  Go back
                </button>

              </div>

              <div className="w-[50%] flex justify-end items-center">

                <button onClick={()=> currentStep <5 ? setStep(currentStep+1) : ""} className="bg-[#012A5Cff] rounded-lg text-white p-3">
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
