import React from "react";
import { Route, Router } from "react-router-dom";
 import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import InfiniteCarousel from "./components/InfiniteCarousel";
import FeatureProducts from "./components/FeatureProducts";

const App = () => {
  return (
 
<div className="bg-[#fdf1e7]">
       <Navbar />
      <HeroSection />
      <InfiniteCarousel />
      <FeatureProducts />
    </div>
 
 
  );
};

export default App;
