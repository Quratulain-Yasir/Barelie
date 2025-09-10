import React from "react";
import Navbar from "../components/Navbar";
import { products } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";

const Products = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto flex flex-col pt-11 pb-12 px-4 sm:pt-11 sm:pb-20 md:px-6 text-center">
        <div className="w-full grid sm:grid-cols-4 grid-cols-auto gap-4 gap-y-6">
          {products.map((item, index) => (
            <div
              key={index}
              className="border border-[#f4a330] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              <img className="bg-cyan-100" src={item.image} alt="teacher_pro" />
              <div className="p-4 bg-[#feddaf]">
                <div className="flex items-center gap-15 text-center text-green-500">
                  <div className="inline-flex items-center gap-3">
                    <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                    <p className="text-[0.8rem]">Avaliable</p>
                  </div>
                  {/* cart */}
                  <FaCartArrowDown
                    size={21}
                    onClick={() => {
                      navigate(`/cart`);
                      scrollTo(0, 0);
                    }}
                    className="cursor-pointer text-black hover:text-zinc-800 hover:scale-105 transition-all duration-300 ease-in-out"
                  />
                </div> 
                <p className="text-gray-900 text-lg font-medium text-start">
                  {item.name}
                </p>
                <p className="text-gray-600 text-xs text-end">sold : {item.sold}</p>
                <p className="text-gray-700 text-sm text-start">Rs. {item.fees}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
