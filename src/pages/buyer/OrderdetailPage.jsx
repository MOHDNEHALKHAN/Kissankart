import React from "react";
import { Button } from "../../components";
import basket from "../../assets/Basket.svg";

function OrderdetailPage() {
  const orderId = "12345";
  const Address = "123 Main St, Springfield, USA";
  const PaymentMethod = "*** 2456";
  const Origionalamount = "$10.00";
  const Deliveryfee = "$2.00";
  const Totalamount = "$12.00";

  return (
    <div className=" bg-green-50 flex flex-col items-center  h-screen">
      <div className="flex flex-col items-center justify-center gap-2 my-6">
        <p className="font-inter font-medium text-lg">Order ID: {orderId}</p>
        <img className="my-4 w-50" src={basket} alt="logo" />
      </div>
      <div className="flex flex-col items-center justify-center gap-2 mb-6">
        <h3 className="font-inter font-semibold text-teal-900 text-2xl">Delivery Address</h3>
        <p className="font-inter font-medium flex-wrap items-center px-25 mx-4">{Address}</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 mb-6">
        <h3 className="font-inter font-semibold text-teal-900 text-2xl ">Payment Method</h3>
        <p className="font-inter font-medium">{PaymentMethod}</p>
      </div>
      <div className="my-6 space-y-2 text-gray-800 text-lg font-medium">
        <div className="flex justify-between ">
          <span>Total</span>
          <span>{Origionalamount}</span>
        </div>
        <div className="flex justify-between ">
          <span>Delivery</span>
          <span>{Deliveryfee}</span>
        </div>
        <div className="flex justify-between font-semibold gap-20">
          <span>Total Amount</span>
          <span>{Totalamount}</span>
        </div>
      </div>
      <div></div>
      <Button className="bg-teal-600 text-white px-30">Reorder</Button>
    </div>
  );
}

export default OrderdetailPage;
