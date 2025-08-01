import React from "react";
import { useNavigate } from "react-router";
import {Button} from '../../components/index';

function OrderDescription() {
  const navigate = useNavigate();

  return (
    <div className="bg-amber-50 min-h-screen p-4  font-inter space-y-4">
      <div className="flex flex-row">
        <svg
          onClick={() => navigate("/seller/orders")}
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
      {/* Order Info */}
      <section className="space-y-2 ml-2">
         <h2 className="text-lg font-semibold">Order Information</h2>
        <div className="grid grid-cols-2 gap-y-1 text-sm">
          <div className="font-medium">Customer Name</div>
          <div>Mohammad Nehal Khan</div>
          <div className="font-medium">Order Date</div>
          <div>24 Apr, 2024</div>
          <div className="font-medium">Payment Method</div>
          <div>Credit Card</div>
          <div className="font-medium">Total Amount</div>
          <div>₹4,599.00</div>
        </div>
      </section>

      <hr className=" border-1 border-gray-300" />

      {/* Product Details */}
      <section className="space-y-3 ml-2">
        <h2 className="text-lg font-semibold">Product Details</h2>
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" // Sample shoe image
            alt="Product"
            className="w-16 h-16 rounded-md object-cover"
          />
          <div className="text-sm">
            <p className="font-medium">
              Product Name <span className="font-normal">Casual Yellow Sneaker</span>
            </p>
            <p>Quantity: 1 &nbsp;&nbsp; Price: ₹4,000.00</p>
          </div>
        </div>
        <div className="text-right font-semibold text-lg">
          Subtotal ₹4,000.00
        </div>
      </section>

      <hr className=" border-1 border-gray-300 mt-0" />

      {/* Shipping Address */}
      <section className="space-y-1 text-sm ml-2">
        <h2 className="text-lg font-semibold">Shipping Address</h2>
        <p>Mohammad Nehal Khan</p>
        <p>1234 Elm Street, Springfield, IL 62701</p>
      </section>

      <hr className=" border-1 border-gray-300" />

      {/* Billing Address */}
      <section className="space-y-1 text-sm ml-2">
        <h2 className="text-lg font-semibold">Billing Address</h2>
        <p>Mohammad Nehal Khan</p>
        <p>1234 Elm Street, Springfield, IL 62701</p>
      </section>

      <hr className=" border-1 border-gray-300" />

      {/* Order Status */}
      <div className='order-status flex flex-row items-center justify-between mt-4 gap-4 ml-2'>
                <select className='bg-emerald-50 text-teal-900 rounded-md px-4 py-2 font-semibold cursor-pointer'>
                  <option value="pending">Processing</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancelled</option>
                </select>
                <Button className='bg-teal-600 text-white' variant='primary'>Update Status</Button>
              </div>
    </div>
  );
}

export default OrderDescription;

