import React from 'react';
import { FaShippingFast, FaUndoAlt, FaHeadset, FaArrowRight } from 'react-icons/fa';

const Features = () => {
  return (
    <div className="bg-teal-500 text-white py-8">
      <div className="container mx-auto grid grid-cols-4 gap-4 items-center text-center">
        {/* Fast Shipping */}
        <div className="flex flex-col items-center border-r-2">
          <FaShippingFast className="text-4xl mb-2" />
          <h3 className="font-bold text-2xl">Fast Shipping</h3>
          <p>Fast Shipping at your doorstep.</p>
        </div>

        {/* Free Returns */}
        <div className="flex flex-col items-center border-r-2">
          <FaUndoAlt className="text-4xl mb-2" />
          <h3 className="font-bold text-2xl">Free Returns</h3>
          <p>Free return if products are damaged.</p>
        </div>

        {/* Support 24/7 */}
        <div className="flex flex-col items-center border-r-2">
          <FaHeadset className="text-4xl mb-2" />
          <h3 className="font-bold text-2xl">Support 24/7</h3>
          <p>24/7 and 365 days support is available.</p>
        </div>

        {/* Seller Login */}
        <div className="flex items-center justify-center">
          <FaArrowRight className="text-4xl mr-2" />
          <h3 className="font-bold text-2xl">Seller Login</h3>
        </div>
      </div>
    </div>
  );
};

export default Features;
