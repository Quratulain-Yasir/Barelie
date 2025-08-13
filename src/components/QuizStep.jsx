import React, { useState } from "react";
import { toast } from "react-toastify";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import { FaArrowRight } from "react-icons/fa";

export default function QuizStep() {
  const [selectedOption, setSelectedOption] = useState("");
  const [step, setStep] = useState(1);

  const handleOptionClick = (id) => {
    setSelectedOption(id);
  };

  const handleContinue = () => {
    if (!selectedOption) {
      toast.error("Kindly select an option to continue");
      return;
    }
    // You can handle step increments or form submission here
    if (step < 5) {
      setStep(step + 1);
      setSelectedOption("")
      // Reset selection or keep it based on your flow
    } else {
      toast.success(`Completed! Selected: ${selectedOption}`);
      // alert(`Completed! Selected: ${selectedOption}`);
    }
  };

  return (
    <div className="max-w-[600px] mx-auto p-5 bg-[#fff8f0] border border-black border-t-4 rounded-lg font-sans text-center">
      {step === 1 && (
        <StepOne
          selectedOption={selectedOption}
          handleOptionClick={handleOptionClick}
        />
      )}
      {step === 2 && (
        <StepTwo
          selectedOption={selectedOption}
          handleOptionClick={handleOptionClick}
        />
      )}
      {step === 3 && (
        <StepThree
          selectedOption={selectedOption}
          handleOptionClick={handleOptionClick}
        />
      )}
      {step === 4 && (
        <StepFour
          selectedOption={selectedOption}
          handleOptionClick={handleOptionClick}
        />
      )}
      {step === 5 && (
        <StepFive
          selectedOption={selectedOption}
          handleOptionClick={handleOptionClick}
        />
      )}
      <button
        onClick={handleContinue}
        className="py-3 px-4 rounded-md cursor-pointer transition-all duration-300 bg-yellow-200 text-black text-md inline-flex gap-2 items-center"
      >
        Continue <FaArrowRight />{" "}
      </button>

      <div className="mt-10 flex justify-center gap-6">
        {[1, 2, 3, 4, 5].map((s) => (
          <div
            key={s}
            onClick={() => setStep(s)}
            title={`Step ${s}`}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              s === step
                ? "border-2 border-black bg-black"
                : "border border-gray-300 bg-gray-50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
