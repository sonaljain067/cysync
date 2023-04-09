import { useState } from "react";
import {XCircleIcon} from '@heroicons/react/24/outline'
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/outline";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

interface PopupProps {
  onClose: () => void;
}

const handlePopup: React.FC<PopupProps> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [s1Wallet, setS1Wallet] = useState(false);
  const [s1Coin, setS1Coin] = useState(false);
  const [s1Card, setS1Card] = useState(false);
  const [s2Address, setS2Address] = useState(false);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  
  // styles 
  const borderClass = "border-1 border-path absolute transform -translate-x-1/2 border-t-2";
  const headClass = "fixed top-0 left-0 w-full h-full bg-darkblack bg-opacity-10 flex items-center justify-center text-lightgray";
  const instruClass = "flex items-start mt-2 text-sm p-4 bg-lightblack border-2 border-offblack rounded w-[35rem] gap-4 font-bold";
  const hrClass = "border-1 border-offblack absolute transform -translate-x-1/2 border-t-2";
  const buttonClass = "rounded px-12 py-3 text-sm ml-auto border-12 border-offblack";

  const b1Style = s1Wallet === true ? "text-lightblue" : "";
  const a1Style = s1Wallet === true ? "text-darkorange" : "";
  const t1Style = s1Wallet === true ? " text-white ml-64": " text-lightblack";
  const b2Style = s1Coin === true ? "text-lightblue" : "";
  const a2Style = s1Coin === true ? "text-darkorange" : "";
  const t2Style = s1Coin === true ? " text-white": " text-lightblack";
  const b3Style = s1Card === true ? "text-lightblue" : "";
  const a3Style = s1Card === true ? "text-darkorange" : "";
  const t3Style = s1Card === true ? " text-white": " text-lightblack";
  const b4Style = s2Address === true ? "text-lightblue" : "";
  const a4Style = s2Address === true ? "text-darkorange" : "";
  const t4Style = s2Address === true ? " text-white": " text-lightblack";
  const stepStyle = "h-8 w-8 flex justify-center items-center rounded-2xl text-lg";
  const deviceStyle = currentStep >= 1 ? " text-white bg-darkorange" : " border-2 border-offblack";
  const verifyStyle = currentStep >= 2 ? " text-white bg-darkorange" : " border-2 border-offblack";
  const recieveStyle = currentStep == 3 ? " text-white bg-darkorange" : " border-2 border-offblack";
  const btn1Style = (s1Wallet === true && s1Coin === true && s1Card == true) ? buttonClass + " bg-darkorange text-white" : buttonClass;
  const btn2Style = s2Address === true ? buttonClass + " bg-darkorange text-white" : buttonClass;

  
  return (
    <div className={headClass}>
        <hr className={`${borderClass} w-[13.4rem] left-[52.2rem] top-[14.8rem]`} />
        <hr className={`${borderClass} w-[14.4rem] left-[68rem] top-[14.8rem]`} />

        <div className="bg-lightblack p-4 rounded-lg w-[50rem] h-[50rem]">
            <div className="flex justify-center pt-2 pl-80 gap-72">
                <div className="py-5 text-2xl text-white">Recieve</div>
                <button className="text-white hover:text-lightgray pl-42" onClick={onClose}>
                    <XCircleIcon className="w-8 h-8 text-lightgray" />
                </button>
            </div>

            <div className="flex flex-row p-14 gap-44 pl-32">
                <div className="flex flex-col">
                    <div className="">
                        <div className={`${stepStyle} ${deviceStyle} `}>
                            1
                        </div>
                    </div> 
                    <div className="-ml-3 pt-4 text-darkorange">
                    Device
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="ml-6">
                        <div className={`${stepStyle} ${verifyStyle}`}>
                                2
                            </div>
                        </div> 
                    <div className="pt-4">
                        Verification
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="ml-3">
                        <div className={`${stepStyle} ${recieveStyle}`}>
                                3
                            </div>
                        </div> 
                    <div className="pt-4">
                        Recieve
                    </div>
                </div>
            </div>

            <div className="mt-4">
              {currentStep === 1 && (
                <div className="flex flex-col gap-3 text-base pl-20">
                  <h4 className="text-md font-medium">Follow the instructions on device</h4>
                    <button className={instruClass} onClick={() => setS1Wallet(!s1Wallet)}>
                      <ArrowRightIcon className={`w-5 ${a1Style}`}/>
                      <div className={b1Style}>Select the Wallet On device</div>
                      <CheckIcon className = {`${t1Style} w-5 `}/>
                    </button>
                    <button className={instruClass} onClick={() => setS1Coin(!s1Coin)}>
                      <ArrowRightIcon className={`w-5 ${a2Style}`}/>
                      <div className={b2Style}>Select the Coin On device</div>
                      <CheckIcon className = {`${t2Style} w-5 ml-64`}/>
                    </button>
                    <button className={instruClass} onClick={() => setS1Card(!s1Card)}>
                      <ArrowRightIcon className={`w-5 ${a3Style}`}/>
                      <div className={b3Style}>Tap 1 card of any 4 cards</div>
                      <CheckIcon className = {`${t3Style} w-5 ml-64`}/>
                    </button>
                </div>
              )}

              {currentStep === 2 && (
                <div>
                  <div className="flex items-center flex-col gap-5 text-base">
                    <div className="flex items-center p-7 bg-lightblack border-2 border-offblack rounded w-[35rem] text-darkorange text-3xl font-bold">
                          25BKJNKNLJL58jdhfk26dnfds15
                    </div>
                    <h4 className="text-md font-medium my-4">Verify address on device</h4>
                      <button className={instruClass} onClick={() => setS2Address(!s2Address)}>
                        <ArrowRightIcon className={`w-5 ${a4Style}`}/>
                        <div className={b4Style}>Select the Wallet On device</div>
                        <CheckIcon className = {`${t4Style} w-5 ml-64`}/>
                      </button>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div>
                  <h4 className="text-xl font-bold pl-36 -mt-4 pb-4">Coin Address</h4>
                  <div className="flex items-center flex-col gap-2 text-base">
                    
                    <div className="flex items-center p-4 gap-6 border-2 border-offblack">
                      <div className="text-2xl text-darkorange font-bold ">
                        25BKJNKNLJL58jdhfk26dnfds15
                      </div>
                      <div className="p-2 bg-offblack text-lightorange rounded-md">Copy</div>
                    </div>

                    <h4 className="flex items-start text-md font-medium my-4 -ml-[21rem] gap-3 text-blue"> 
                    <ExclamationCircleIcon className="w-6 h-6"/>
                    Address Verified</h4>
                    <div className="border-2 border-blue px-12 py-3">
                      <button className="" onClick={() => setS2Address(true)}>
                          Re-verify
                        </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex mt-44 -ml-[30rem]">
              <hr className={`${hrClass} w-[50rem] left-[59.8rem] top-[49rem]`} />
              {currentStep == 2  && (
                <>
                  <button className={`${btn2Style}`} onClick={handlePrev}>
                    <div className="border-1 border-offblack text-red">
                      Prev
                    </div>
                  </button>
                </>
              )}

              {currentStep <= 2  && (
                <>
                  <button className={`${btn1Style} ${btn2Style}`} onClick={handleNext}>
                  <div className="border-1 border-offblack text-red">
                    Continue
                  </div>
                </button>
                </>
              )}
            </div>
        </div>
    </div>
  );
};


export default handlePopup;
