import React from "react";
import { Button } from "../../components/index";
import cross from "../../assets/Cross.svg";
import { useNavigate } from "react-router";

function OrderFailed() {
  const navigate = useNavigate();
  return (
    <div className="bg-white flex flex-col items-center h-screen">
      <div className="mt-15 mb-6">
        <img className="w-[200px]" src={cross} alt="" />
      </div>
      <div className="flex flex-col items-center justify-center gap-2 mt-6 mb-12 mx-4">
        <h3 className="font-inter font-bold text-3xl tx-teal-900 text-center mx-10">
          Your payment was not successful
        </h3>
        <p className="font-inter font-light text-md tx-teal-900 text-center text-wrap mx-10">
          We could not process your payment. Please try again
        </p>
      </div>

      <Button
        onClick={() => navigate("/buyer/checkout")}
        className="bg-teal-600 text-white px-30"
      >
        Try Again
      </Button>
    </div>
  );
}

export default OrderFailed;
