import React from 'react';
import { FaArrowRight } from "react-icons/fa"; 
import SkincareUser from "../assets/Skincare-user.jpg";

const SkinStorySection = () => {
  return (
    <section className="py-16 px-6 md:px-30 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 flex flex-col">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            Your skin has a story. <br /> We help you rewrite it.
          </h2>

          <ul className="space-y-4 text-gray-700 mb-8 text-sm md:text-lg leading-relaxed">
            <li className="border-t pt-4">
              • Struggling with dullness, acne, or early aging?
            </li>
            <li className="border-t pt-4">
              • Tired of generic skincare that doesn’t deliver?
            </li>
            <li className="border-t pt-4">
              • Confused by endless skincare choices?
            </li>
            <li className="border-t pt-4">
              • Want results without the irritation?
            </li>
          </ul>

          <button className="bg-yellow-200 text-black px-5 py-3 font-medium rounded hover:bg-yellow-300 transition inline-flex gap-2 items-center w-full sm:w-[19rem]">
            Take our 30-second skin quiz  <FaArrowRight />{" "}
          </button>
        </div>

        {/* Right Side: Image */}
<div className="flex-1 sm:h-[400px] md:h-[500px] h-[300px]">
  <div className="aspect-square p-6 sm:py-15 flex items-center justify-center bg-gradient-three bg-cover bg-center min-h-[330px] h-full rounded-md">
    <img
      src={SkincareUser}
      alt="Skincare user"
      className="h-full object-contain rounded-md"
    />
  </div>
</div>

        
      </div>
    </section>
  );
};

export default SkinStorySection;
