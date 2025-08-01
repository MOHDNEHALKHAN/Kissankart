import React from "react";
import { Footer, OrderCard } from "../../components/index";
import { useNavigate } from "react-router";

function Helpcenter() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-green-50 flex flex-col  h-screen w-full">
      <div className="flex flex-row mt-4 gap-2 mx-4 ">
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
        <h3 className="font-inter font-semibold">24x7 Customer Support</h3>
      </div>
      <div className="mt-2  border border-gray-300 bg-white p-4 shadow-sm">
        <h3 className=" font-inter">
          Get quick customer support by selecting your item
        </h3>
      </div>
      <div className="flex flex-col gap-2 my-3 p-2 bg-white border border-gray-300 shadow-sm">
        <h3 className="px-3 font-inter">
          Select the order to track and manage it conveniently
        </h3>
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  );
}

export default Helpcenter;
