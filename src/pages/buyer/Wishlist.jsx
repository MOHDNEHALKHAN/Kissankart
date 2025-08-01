import React from "react";
import { WishlistCard } from "../../components/index";
import { useNavigate } from "react-router";

function Wishlist() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-green-50 flex flex-col  h-screen overflow-hidden w-full">
      <div className="flex flex-col">
        <div className="flex flex-row mt-4 gap-2 mx-4">
          <svg
            onClick={() => navigate("/buyer/profile")}
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
          <h3 className="font-inter font-semibold">MY WISHLIST</h3>
        </div>
        <div className="AllWishlists flex flex-wrap flex-row gap-2 mx-2 my-6 justify-center">
          <WishlistCard />
          <WishlistCard />
          <WishlistCard />
          <WishlistCard />
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
