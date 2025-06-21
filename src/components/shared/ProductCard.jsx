import React from 'react';

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-32 object-cover" />
      <div className="p-2">
        <h3 className="font-semibold text-teal-700 text-sm">{name}</h3>
        <p className="text-gray-700 text-xs">₹{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
