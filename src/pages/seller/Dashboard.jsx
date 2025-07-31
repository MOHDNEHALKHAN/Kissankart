import React from "react";
import { Button , SellerFooter } from "../../components/index";
import { useNavigate } from "react-router";

function Dashboard() {
  const navigate = useNavigate();
  const totalOrders = 120;
  const pendingOrders = 24;
  const shippedOrders = 12;
  const deliveredOrders = 84;

  return (
    <div className="flex flex-col bg-amber-50 items-center h-screen font-inter">
      <h3 className="text-3xl font-bold text-teal-900 my-6 text-center">
        Seller Dashboard
      </h3>
      <div className="flex flex-row flex-wrap gap-1 justify-center">
        <div className="bg-white shadow-md rounded-lg p-4 m-2 w-35">
          <p className="font-semibold text-teal-900">Total Orders</p>
          <p className="font-semibold text-2xl text-teal-900">{totalOrders}</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 m-2 w-35">
          <p className="font-semibold text-teal-900">Pending Orders</p>
          <p className="font-semibold text-2xl text-teal-900">
            {pendingOrders}
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 m-2 w-35">
          <p className="font-semibold text-teal-900">Shipped Orders</p>
          <p className="font-semibold text-2xl text-teal-900">
            {shippedOrders}
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 m-2 w-35">
          <p className="font-semibold text-teal-900">Delivered Orders</p>
          <p className="font-semibold text-2xl text-teal-900">
            {deliveredOrders}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-6 w-full gap-3 px-10">
        <Button
          onClick={() => navigate('/seller/add-product')}
          type="click"
          className=" flex flex-row items-center justify-start gap-2 bg-teal-600 text-white w-full text-xl py-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon icon-tabler icons-tabler-filled icon-tabler-circle-plus"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4.929 4.929a10 10 0 1 1 14.141 14.141a10 10 0 0 1 -14.14 -14.14zm8.071 4.071a1 1 0 1 0 -2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0 -2h-2v-2z" />
          </svg>
          Add Products
        </Button>
        <Button
          onClick={() => navigate('/seller/orders')}
          type="click"
          className=" flex flex-row items-center justify-start gap-2 bg-teal-600 text-white w-full text-xl py-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-list"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6l11 0" />
            <path d="M9 12l11 0" />
            <path d="M9 18l11 0" />
            <path d="M5 6l0 .01" />
            <path d="M5 12l0 .01" />
            <path d="M5 18l0 .01" />
          </svg>
          View Orders
        </Button>
        <Button
          onClick={() => navigate('/seller/products')}
          type="click"
          className=" flex flex-row items-center justify-start gap-2 bg-teal-600 text-white w-full text-xl py-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon icon-tabler icons-tabler-filled icon-tabler-category"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 3h-6a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1 -1v-6a1 1 0 0 0 -1 -1z" />
            <path d="M20 3h-6a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1 -1v-6a1 1 0 0 0 -1 -1z" />
            <path d="M10 13h-6a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1 -1v-6a1 1 0 0 0 -1 -1z" />
            <path d="M17 13a4 4 0 1 1 -3.995 4.2l-.005 -.2l.005 -.2a4 4 0 0 1 3.995 -3.8z" />
          </svg>
          All Products
        </Button>
      </div>

      <div className="fixed bottom-0 w-full z-50">
        <SellerFooter />
      </div>
    </div>
  );
}

export default Dashboard;
