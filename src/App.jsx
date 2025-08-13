import React from "react";
import { Route, Routes } from "react-router-dom"; 
import Footer from "./components/Footer"; 
import Cart from "./pages/Cart";
import Home from "./pages/Home";
const App = () => {
  return (
    <div className="bg-[#fdf1e7]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
