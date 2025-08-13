import React from "react";
import featurep1 from "../assets/feature-p-1.jpg";
import featurep2 from "../assets/feature-p-2.jpg";
import featurep3 from "../assets/feature-p-3.jpg";

const FeatureProducts = () => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl sm:text-4xl font-semibold my-8">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  max-w-4xl mx-auto">
        {/* Box 1 */}
        <div className="aspect-square p-6 flex flex-col items-center justify-center gap-2 bg-gradient-one bg-cover bg-center w-full">
          <img
            src={featurep1}
            alt="feature_product"
            className="h-40 sm:h-48 object-contain rounded-md"
          />
          <h3 className="text-lg sm:text-xl text-center">Retinol Night Cream</h3>
          <p className="text-xs text-center">Age-Defying Power</p>
          <button className="border border-black rounded-md px-4 py-2 hover:shadow-md text-xs mt-2">
            ADD TO CART
          </button>
        </div>

        {/* Box 2 */}
        <div className="aspect-square bg-stone-100 p-6 flex flex-col items-center justify-center gap-2 ">
          <img
            src={featurep2}
            alt="feature_product"
            className="h-40 sm:h-48 object-contain rounded-md"
          />
          <h3 className="text-lg sm:text-xl text-center">Hydrating Serum</h3>
          <p className="text-xs text-center">The Glow Booster</p>
          <button className="border border-black rounded-md px-4 py-2 hover:shadow-md text-xs mt-2">
            ADD TO CART
          </button>
        </div>

        {/* Box 3 */}
        <div className="aspect-square bg-stone-100 p-6 flex flex-col items-center justify-center gap-2 border-t-1">
          <img
            src={featurep3}
            alt="feature_product"
            className="h-40 sm:h-48 object-contain rounded-md"
          />
          <h3 className="text-lg sm:text-xl text-center">Hydrating Lip Balm</h3>
          <p className="text-xs text-center">Protect & Perfect</p>
          <button className="border border-black rounded-md px-4 py-2 hover:shadow-md text-xs mt-2">
            ADD TO CART
          </button>
        </div>

        {/* Box 4 */}
        <div className="aspect-square p-6 flex flex-col items-center justify-center gap-4 bg-gradient-two bg-cover bg-center w-full">
          <p className="text-xs text-center px-6 sm:px-10">
            Powerful, skin-loving formulas designed to hydrate, repair and grow—because your skin deserves the best.
          </p>
          <button className="border border-black rounded-md px-4 py-2 hover:shadow-md text-xs">
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureProducts;

