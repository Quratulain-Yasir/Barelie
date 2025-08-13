import React from 'react';

const CartSummary = () => {
  return (
    <div className="flex flex-col sm:flex-row p-6 gap-8 max-w-7xl mx-auto">
      {/* Left Side - Note & Coupon */}
      <div className="flex-1">
        {/* Order Note */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Add Order Note</h2>
          <textarea
            className="w-full h-36 p-4 border border-gray-300 rounded resize-none"
            placeholder="How can we help you?"
          />
        </div>

        {/* Coupon */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Coupon:</h2>
          <p className="text-gray-700 mb-2 text-sm">Coupon code will work on checkout page</p>
          <input
            type="text"
            className="w-full p-4 border border-gray-300 rounded"
            placeholder="Coupon code"
          />
        </div>
      </div>

      {/* Right Side - Summary */}
      <div className="w-full lg:w-1/3">
        <div className="bg-stone-100 border border-gray-200 rounded-lg p-6 shadow-md text-center relative">
          {/* Free Shipping Bar */}
          <div className="mb-4">
            <p className="text-green-600 mb-8 sm:font-medium">
              Congratulations! <span className="text-black">You've got free shipping!</span>
            </p>
            <div className="text-green-600 text-2xl absolute sm:top-11 top-17 right-6 ">🚚</div>
            <div className="w-full h-2 bg-green-600 bg-[repeating-linear-gradient(45deg,#fff_0,#fff_5px,#00c000_5px,#00c000_10px)] rounded-full mt-2"></div>

          </div>

          {/* Subtotal */}
          <div className="mt-6 mb-2 flex justify-between items-center text-xl font-semibold">
            <span>SUBTOTAL:</span>
            <span className="text-black">Rs.5,450</span>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm mb-6">
            Discount coupon can be added in checkout
          </p>

          {/* Checkout Button */}
          <button className="bg-pink-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-pink-600 transition">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
