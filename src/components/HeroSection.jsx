import img1 from "../assets/hero1.jpg";
import img2 from "../assets/hero2.jpg";
import img3 from "../assets/hero3.jpg"; 
import { MdCallMade } from "react-icons/md";


const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#fff0e1] to-[#ffac54] py-16 px-4 md:py-20 md:px-6 text-center">
      <div className="max-w-4xl mx-auto flex flex-col">
        <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-wider font-semibold text-gray-900 mb-4">
          Glow Naturally. <br /> Radiate Confidence.
        </h1>
        <p className="text-base sm:text-lg text-gray-800 max-w-xl mx-auto mb-6">
          Your skin deserves more than just care—it deserves transformation. Discover science-backed skincare designed for lasting beauty.
        </p>
<button className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold py-2 sm:py-3 px-5 sm:px-6 rounded-md transition-all inline-flex items-center self-center gap-2">
  Get Free Skin Assessment
  <MdCallMade className="text-lg" />
</button>

        {/* Image Section */}
        <div className="relative flex justify-center items-center mt-14 md:mt-22 h-52 sm:h-60">
          {/* Left Image */}
          <img
            src={img1}
            alt="Model 1"
            className="z-0 w-24 sm:w-40 md:w-50 h-36 sm:h-52 md:h-65 object-cover rounded-xl shadow-xl transform -rotate-12 -mr-4 sm:-mr-12 border border-white"
          />

          {/* Center Image */}
          <img
            src={img2}
            alt="Model 2"
            className="z-10 w-28 sm:w-44 md:w-55 h-40 sm:h-56 md:h-75 object-cover rounded-xl shadow-2xl border border-white"
          />

          {/* Right Image */}
          <img
            src={img3}
            alt="Model 3"
            className="z-0 w-24 sm:w-40 md:w-50 h-36 sm:h-52 md:h-65 object-cover rounded-lg shadow-xl transform rotate-12 -ml-4 sm:-ml-12 border border-white"
          />
        </div>
        
      </div>
      
    </section>
  );
};

export default HeroSection;
