import React from 'react';

const Card = ({ image, name, price }) => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-lg font-bold text-gray-600 mt-2">Price: ${price}</p>
        <button className="mt-4 w-full bg-[#49A6A2] text-white py-2 rounded-lg hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
