import React from 'react';
import { useNavigate } from 'react-router';

const ProductCard = ({ id, image, name, price }) => {
  const navigate = useNavigate();
  return (
    <div 
    onClick={ () => navigate(`/buyer/product/${id}`)}
    className="bg-white rounded-xl shadow-md cursor-pointer ">
      <img src={image} alt={name} className="w-full h-32 object-cover rounded-t-xl" />
      <div className="p-2">
        <h3 className="font-semibold text-teal-700 text-sm">{name}</h3>
        <p className="text-gray-700 text-xs">₹{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
