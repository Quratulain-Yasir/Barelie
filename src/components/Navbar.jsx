import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";

import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navigate = useNavigate();
  // function to navigate
  const goToCart = () => {
    navigate("/cart")
  }
  return (
    <nav className="w-full pt-9 pb-4 bg-transparent">
      <div className="flex items-center justify-between text-sm px-4 sm:px-10 mb-5 ">
        {/* Logo */}
        <div className="text-2xl font-serif font-bold text-gray-800">
          Barelie
        </div>

        {/* Centered Nav Links */}
        <ul className="hidden md:flex items-start gap-5 font-medium">
          <NavLink to="/">
            <li className="hover:underline cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">Home</li>
          </NavLink>
          <NavLink to="/products">
            <li className="hover:underline cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">Products</li>
          </NavLink>
          <Link to="quiz" smooth={true} duration={500} offset={-50}>
            <li className="hover:underline cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">Quiz</li>
          </Link>
          <Link to="testimonials" smooth={true} duration={500} offset={-50}>
            <li className=" hover:underline cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">Testimonials</li>
          </Link>
          <Link to="contact" smooth={true} duration={500} offset={-50}>
            <li className="hover:underline cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">Contact</li>
          </Link> 
        </ul>

        <div className="flex items-center gap-4">
          {/* CTA Button */}
          <button className="bg-gray-900 hover:bg-[#fdf1e7] hover:text-black text-white  px-2 sm:px-5 py-2 rounded-md text-sm sm:font-semibold  hover:scale-105 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out">
            Shop Now
          </button>
          {/* cart */}
          <IoIosCart size={24} onClick={goToCart} className="cursor-pointer hover:text-zinc-800 hover:scale-105 transition-all duration-300 ease-in-out" />
          {/* menu for mobile */}
          <IoMenu
            onClick={() => setMenu(true)}
            className=" md:hidden"
            size={28}
          />
          {/* for small screen */}
          <div
            className={`md:hidden fixed right-0 top-0 bottom-0 z-20 overflow-hidden bg-[#fdf1e7] transition-all duration-500 ease-in-out ${
              menu ? "max-h-screen opacity-100 w-full" : "max-h-0 opacity-0 w-0"
            }`}
          >
            <div className="flex items-center justify-between px-5 py-6">
              <RxCross1 onClick={() => setMenu(false)} size={28} />
            </div>
            <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
              <NavLink to="/" onClick={() => setMenu(false)}>
                <li className="px-4 py-2 hover:underline cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
                  Home
                </li>
              </NavLink>

              <NavLink to="/products" onClick={() => setMenu(false)}>
                <li className="px-4 py-2 hover:underline cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
                  Products
                </li>
              </NavLink>

              <Link to="quiz" 
                smooth={true}
                duration={600}
                offset={-50} onClick={() => setMenu(false)}>
                <li className="px-4 py-2 hover:underline cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
                  Quiz
                </li>
              </Link>

              <Link
                to="testimonials"
                smooth={true}
                duration={600}
                offset={-50}
                onClick={() => setMenu(false)}
              >
                <li className=" hover:underline cursor-pointer px-4 py-2 hover:scale-105 transition-all duration-300 ease-in-out">
                  Testimonials
                </li>
              </Link>

              <Link to="contact"
                smooth={true}
                duration={600}
                offset={-50} onClick={() => setMenu(false)}>
                <li className="hover:underline cursor-pointer px-4 py-2 hover:scale-105 transition-all duration-300 ease-in-out">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
