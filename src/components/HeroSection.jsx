import img1 from "../assets/hero1.jpg";
import img2 from "../assets/hero2.jpg";
import img3 from "../assets/hero3.jpg"; 
import { MdCallMade } from "react-icons/md";
import Navbar from "./Navbar";


const HeroSection = () => {
  return (
    <section className="bg-primary">
      <Navbar />
      <div className="max-w-4xl mx-auto flex flex-col  pt-11 pb-12 px-4 sm:pt-11 sm:pb-20 md:px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-wider font-semibold text-gray-900 mb-4">
          Glow Naturally. <br /> Radiate Confidence.
        </h1>
        <p className="text-base sm:text-lg text-gray-800 max-w-xl mx-auto mb-6">
          Your skin deserves more than just care—it deserves transformation. Discover science-backed skincare designed for lasting beauty.
        </p>
<button className="bg-yellow-200 hover:bg-yellow-300 text-black font-semibold py-2 sm:py-3 px-5 sm:px-6 rounded-md inline-flex items-center self-center gap-2  hover:scale-105 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out">
  Get Free Skin Assessment
  <MdCallMade className="text-lg" />
</button>

        {/* Image Section */}
        <div className="relative flex justify-center items-center mt-14 md:mt-22 h-52 sm:h-60 sm:gap-6">
          {/* Left Image */}
          <img
            src={img1}
            alt="Model 1"
            className="z-0 w-29 sm:w-40 md:w-50 h-40 sm:h-52 md:h-65 object-cover rounded-xl shadow-xl transform -rotate-16 sm:-rotate-19 -mr-4 sm:-mr-12 border border-white"
          />

          {/* Center Image */}
          <img
            src={img2}
            alt="Model 2"
            className="z-10 w-32 sm:w-44 md:w-55 h-44 sm:h-56 md:h-75 object-cover rounded-xl shadow-2xl border border-white mb-5"
          />

          {/* Right Image */}
          <img
            src={img3}
            alt="Model 3"
            className="z-0 w-29 sm:w-40 md:w-50 h-40 sm:h-52 md:h-65 object-cover rounded-lg shadow-xl transform rotate-15 sm:rotate-18 -ml-4 sm:-ml-12 border border-white"
          />
        </div>
        
      </div>
      
    </section>
  );
};

export default HeroSection;
