import React from "react";
import { Button } from "../../components/index";
import { useNavigate } from "react-router";

function GoodsCard() {
  const navigate = useNavigate();
  const product = {
    title: "Deere Tractor",
    price: "500000",
    quantity: "50",
    image:
      "https://www.deere.co.in/assets/images/region-1/products/tractors/john-deere-e-series-cab.jpg",
  };
  return (
    <div className="flex flex-row items-start bg-white rounded-lg px-5 py-5 gap-4 border border-gray-200">
      <img
        src={product.image}
        alt={product.title}
        className="object-cover rounded-md w-25 h-25"
      />
      <div className="flex flex-col items-start w-full relative">
        <h2 className="text-lg font-semibold font-inter">{product.title}</h2>
        <p className="text-black font-inter">Price: ₹{product.price}</p>
        <p className="text-black font-inter">Stock: {product.quantity}</p>
        <div className="flex flex-row items-center gap-2">
          <Button
            onClick={() => navigate("/seller/edit-product/:id")}
            className="bg-teal-600 text-white px-8 rounded-sm mt-2 w-1/2"
          >
            Edit
          </Button>
          <Button className="bg-teal-600 text-white px-6 rounded-sm mt-2 w-1/2">
            Delete
          </Button>
        </div>
        <div 
        onClick={() => navigate(`/seller/product-detail/${product.id}`)}
        className="absolute right-0 top-1/3 -translate-y-1/2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon icon-tabler icons-tabler-filled icon-tabler-caret-right fill-indigo-950"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6c0 -.852 .986 -1.297 1.623 -.783l.084 .076l6 6a1 1 0 0 1 .083 1.32l-.083 .094l-6 6l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002l-.059 -.002l-.058 -.005l-.06 -.009l-.052 -.01l-.108 -.032l-.067 -.027l-.132 -.07l-.09 -.065l-.081 -.073l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057l-.002 -12.059z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default GoodsCard;
