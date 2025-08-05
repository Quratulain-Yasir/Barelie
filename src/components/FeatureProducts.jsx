import React from "react";
import featurep1 from "../assets/feature-p-1.jpg"; 
import featurep2 from "../assets/feature-p-2.jpg"; 
import featurep3 from "../assets/feature-p-3.jpg"; 
import box1 from "../assets/box1.png"; 
import box4 from "../assets/box4.png"; 
const FeatureProducts = () => {
  return (
<div className="py-8">
  <h2 className="text-center text-3xl font-semibold my-8">Featured Products</h2>

  <div className="grid grid-cols-2 gap-0 max-w-4xl mx-auto">
    <div className="aspect-square p-6 flex flex-col items-center justify-center gap-2  bg-cover bg-center w-full"  style={{ backgroundImage: `url(${box1})` }}>
          <img src={featurep1} alt="feature_product" className="h-50 rounded-md" />
        <h3 className="text-xl">Retinol Night Cream</h3>
        <p className="text-xs">Age-Defying Power</p>
        <button className="border border-black rounded-md px-4 py-2 hover:shadow-md text-xs">ADD TO CART</button>      
    </div>
    {/* box2 */}
    <div className="aspect-square bg-stone-100 p-6 flex flex-col items-center justify-center gap-2">
        <img src={featurep2} alt="feature_product" className="h-50 rounded-md" />
        <h3 className="text-xl">Hydrating Serum</h3>
        <p className="text-xs">The Glow Booster</p>
        <button className="border border-black rounded-md px-4 py-2 hover:shadow-md text-xs">ADD TO CART</button>
    </div>
    {/* box3 */}
    <div className="aspect-square bg-stone-100 p-6 flex flex-col items-center justify-center gap-2">
        <img src={featurep3} alt="feature_product" className="h-50 rounded-md" />
        <h3 className="text-xl">Hydrating Lip Bam</h3>
        <p className="text-xs">Protect & Perfet</p>
        <button className="border border-black rounded-md px-4 py-2 hover:shadow-md text-xs">ADD TO CART</button>
    </div>
    <div className="aspect-square p-6 flex flex-col items-center justify-center gap-2  bg-cover bg-center w-full"  style={{ backgroundImage: `url(${box4})` }}>
        <p className="text-xs px-14 text-center">Powerful, skin-loving formulas desgined to hydrate, repair and grow-because your skin deserves the best</p>
        <button className="border border-black rounded-md px-4 py-2 hover:shadow-md text-xs">VIEW ALL PRODUCTS</button>        
    </div>
  </div>
</div>

  );
};

export default FeatureProducts;
