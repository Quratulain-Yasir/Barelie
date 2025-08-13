import React from 'react';
import { MdCallMade } from "react-icons/md";

const GlowPromo = () => {
  return (
    <section
      className="w-full py-16 px-4 sm:px-6 md:px-10 text-center bg-gradient-one  animate-gradient"
      role="region"
      aria-label="30-day money-back skincare offer"
    >
      <p className="text-sm sm:text-base mb-4 text-gray-800">
        Ready for skin that looks as good as it feels?
      </p>
      
      <h1 className="text-2xl sm:text-4xl font-serif font-bold text-black leading-snug md:leading-tight mb-8 max-w-4xl mx-auto">
        Try it risk-free. <br className="hidden md:inline" />
        30-day money back guarantee.
      </h1>
      
 <a
  href="#"
  className="inline-flex gap-2 px-6 sm:px-8 py-3 rounded-md bg-black text-white text-xs sm:text-base uppercase tracking-wide transition-all duration-300 ease-in-out transform hover:bg-gray-900 hover:scale-105 hover:shadow-lg shadow-xl"
>
  Start your glow journey now <span><MdCallMade className="text-lg" /></span>
    
</a>

    </section>
  );
};

export default GlowPromo;
