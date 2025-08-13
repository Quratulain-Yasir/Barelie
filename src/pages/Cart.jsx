import React from 'react';
import { FaTrashAlt, FaPlus, FaMinus, FaEdit } from 'react-icons/fa';
import featurep1 from "../assets/feature-p-1.jpg";
import featurep2 from "../assets/feature-p-2.jpg";
import featurep3 from "../assets/feature-p-3.jpg";
import CartSummary from '../components/CartSummary';
import Navbar from '../components/Navbar';

const cartItems = [
  {
    id: 1,
    name: 'Glow BB Cream',
    shade: 'Natural',
    image: featurep1,
    originalPrice: 2100,
    discountedPrice: 1850,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Facial Kit Bundle Deal',
    image: featurep2,
    originalPrice: 4050,
    discountedPrice: 3600,
    quantity: 1,
  },  {
    id: 3,
    name: 'LipBam',
    image: featurep3 ,
    originalPrice: 2050,
    discountedPrice: 1600,
    quantity: 1,
  },
];

export default function Cart() {
  return (
<>
<Navbar />
    <div className="min-h-screen px-4 py-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#fff0e1] to-[#ffac54] py-4 text-white text-2xl font-semibold text-center py-4">
        SHOPPING CART
      </div>
{/* table container */}
<div className='sm:mx-10 mx-6'>
        {/* Table Headings */}
<div className="hidden sm:block">
        <div className="grid grid-cols-5 font-bold mt-8 px-4 gap-10">
        <div className='col-span-2'>PRODUCT</div>
        <div className='col-span-1'>PRICE</div>
        <div className='col-span-1'>QUANTITY</div>
        <div className="col-span-1 text-right">TOTAL</div>
      </div>
</div>

      <hr className="my-2 text-gray-400" />

      {/* Items */}
{cartItems.map((item) => (
  <div
    key={item.id}
    className="grid grid-cols-5 items-center py-6 border-b border-gray-400 px-4 gap-3"
  >
    {/* Product Image + Info */}
    <div className="col-span-2 flex flex-col sm:flex-row gap-4 items-center">
      <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />

      {/* Mobile-only spacer */}
      <div className="px-10 py-10 sm:hidden"></div>

      {/* Product Details */}
      <div className="hidden sm:block">
        <h3 className="font-semibold">{item.name}</h3>
        {item.shade && (
          <p className="text-sm">
            Shade: <span className="text-gray-500 font-medium">{item.shade}</span>
          </p>
        )}
        <div className="flex gap-2 mt-2 text-xl text-gray-600">
          <FaEdit className="cursor-pointer" size={16} />
          <FaTrashAlt className="cursor-pointer" size={16} />
        </div>
      </div>
    </div>

    {/* Price */}
    <div className="hidden sm:flex flex-col gap-1 col-span-1">
      <p className="line-through text-gray-500 text-sm">Rs.{item.originalPrice.toLocaleString()}</p>
      <p className="text-red-600 font-semibold">Rs.{item.discountedPrice.toLocaleString()}</p>
    </div>

    {/* Quantity */}
    <div className="hidden sm:flex items-center border px-4 py-1 rounded-full w-max gap-4 col-span-1">
      <FaTrashAlt className="text-gray-500 cursor-pointer" />
      <span className="text-lg font-medium">{item.quantity}</span>
      <FaPlus className="text-gray-500 cursor-pointer" />
    </div>

    {/* Total */}
    <div className="hidden sm:block text-right font-semibold col-span-1">
      Rs.{(item.discountedPrice * item.quantity).toLocaleString()}
    </div>

    {/* Mobile view only (stacked version) */}
  {/* mobile specific Detail */}
<div className='flex flex-col gap-2 sm:hidden'>
  {/* product detail */}
            <div className='text-sm sm:mt-2 w-50'>
              <h3 className="font-md">{item.name}</h3>
              {item.shade && <p>Shade: <span className="font-semibold text-xs text-gray-500">{item.shade}</span></p>}
              <div className="flex gap-2 mt-2 text-xl text-gray-600">
                <FaEdit className="cursor-pointer" size={16} />
                <FaTrashAlt className="cursor-pointer" size={16} />
              </div>
            </div>

          {/* Price */}
          <div className='w-50 flex gap-5'>
            <p className="line-through text-gray-500">Rs.{item.originalPrice.toLocaleString()}</p>
            <p className="text-red-600 font-semibold">Rs.{item.discountedPrice.toLocaleString()}</p>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center border px-4 py-1 rounded-full w-max gap-6">
            <FaTrashAlt className="text-gray-500 cursor-pointer" />
            <span className="text-lg font-medium">{item.quantity}</span>
            <FaPlus className="text-gray-500 cursor-pointer" />
          </div>

          {/* Total */}
          <div className="text-right font-semibold">
            Rs.{(item.discountedPrice * item.quantity).toLocaleString()}
          </div>
</div>
  </div>
))}

</div>
{/* cart summary */}
<CartSummary />

    </div>
</>
  );
}
