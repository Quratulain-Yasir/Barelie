import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets.js";




const Navbar = () => {
    const [menu , setMenu] = useState(false)
  return (
    <nav className="w-full py-4 bg-gradient-to-r from-[#fff0e1] to-[#ffac54]">
      <div className="flex items-center justify-between text-sm px-4 sm:px-10 mb-5 ">
        {/* Logo */}
        <div className="text-2xl font-serif font-bold text-gray-800">
          Healora
        </div>

        {/* Centered Nav Links */}
        <ul className="hidden md:flex items-start gap-5 font-medium">
                    <NavLink to="/">
            <li className="hover:underline cursor-pointer">Home</li>
          </NavLink>
          <NavLink to="/products">
            <li className="hover:underline cursor-pointer">Products</li>
          </NavLink>
          <NavLink to="/quiz">
            <li className="hover:underline cursor-pointer">Quiz</li>
          </NavLink>
          <NavLink to="/testimonials">
            <li className=" hover:underline cursor-pointer">Testimonials</li>
          </NavLink>
                    <NavLink to="/contact">
            <li className="hover:underline cursor-pointer">Contact</li>
          </NavLink>
        </ul>

<div className="flex items-center gap-4">
          {/* CTA Button */}
        <button className="bg-gray-900 hover:bg-[#fdf1e7] hover:text-black text-white px-5 py-2 rounded-md text-sm font-semibold transition ">
          Shop Now
        </button>
<img onClick={()=> setMenu(true)} src={assets.menu_icon} alt="menu_icon" className="w-6 md:hidden" />
                 {/* for small screen */}
<div
  className={`md:hidden fixed right-0 top-0 bottom-0 z-20 overflow-hidden bg-[#fdf1e7] transition-all duration-500 ease-in-out ${
    menu ? 'max-h-screen opacity-100 w-full' : 'max-h-0 opacity-0 w-0'
  }`}
>
<div className="flex items-center justify-between px-5 py-6">
  <img onClick={() => setMenu(false)} className="w-7" src={assets.cross_icon} alt="cross_icon" />
</div>
<ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
  <NavLink to="/" onClick={()=> setMenu(false)}>
  <p className="px-4 py-2 hover:underline cursor-pointer">Home</p>
  </NavLink>

    <NavLink to="/products" onClick={()=> setMenu(false)}>
  <p className="px-4 py-2 hover:underline cursor-pointer">Products</p>
  </NavLink>
  
    <NavLink to="/quiz" onClick={()=> setMenu(false)}>
  <p className="px-4 py-2 hover:underline cursor-pointer">Quiz</p>
  </NavLink>
  
    <NavLink to="/testimonials" onClick={()=> setMenu(false)}>
  <p className="hover:underline cursor-pointer px-4 py-2">Testimonials</p>
  </NavLink>
      <NavLink to="/contact" onClick={()=> setMenu(false)}>
  <p className="hover:underline cursor-pointer px-4 py-2">Contact</p>
  </NavLink>
</ul>
       </div>
</div>
      </div>
    </nav>
  );
};

export default Navbar;
