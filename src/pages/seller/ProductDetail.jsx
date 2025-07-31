import React from "react";
import { Button } from "../../components/index";
import { useNavigate } from "react-router";

function ProductDetail() {
  const navigate = useNavigate();
  return (
    <div className="bg-amber-50 min-h-screen p-4  font-inter space-y-4">
      <div className="flex flex-row">
        <svg
          onClick={() => navigate("/seller/products")}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left text-gray-700 cursor-pointer"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l14 0" />
          <path d="M5 12l4 4" />
          <path d="M5 12l4 -4" />
        </svg>
      </div>
    </div>
  );
}

export default ProductDetail;
