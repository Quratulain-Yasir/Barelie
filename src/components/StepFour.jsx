import React from "react";
import {quizData4} from "../assets/assets.js"
const StepFour = ({handleOptionClick , selectedOption }) => {
 
  return (
    <>
    {quizData4.map((items) => (
<div key={items.id}>
          <h3 className="mb-8 mt-5 text-xl font-serif">
{items.question}
      </h3>
      <div className="grid grid-cols-2 gap-4 mb-10">
        
{
    items.options.map((item,index)=>(
          <button key={index}
            onClick={() => handleOptionClick(item.id)}
            className={`py-3 px-4 rounded-md cursor-pointer transition-all duration-300 ${
              selectedOption === item.id
                ? "bg-[#1e1e1e] text-white border-none"
                : "bg-[#fff8f0] text-black border border-gray-300"
            }`}
          >
             {item.label}
          </button>
    ))
}
        
      </div>
</div>
      ))}
    </>
  );
};

export default StepFour;
