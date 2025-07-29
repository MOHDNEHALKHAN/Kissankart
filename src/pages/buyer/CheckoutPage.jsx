import React from "react";
import { Button } from "../../components/index";
import { useNavigate } from "react-router";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const address = "xýx";
  const product = {
    title: "Natural Almonds grown in Afg",
    seller: "Thind Farms",
    qty: 1,
    price: 499,
    image:
      "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=400",
  };

  const handlePlaceOrder = () => {
    // Simulate payment result (replace with real payment logic)
    const paymentSuccessful = Math.random() > 0.5; // Randomly succeed or fail
    if (paymentSuccessful) {
      navigate("/buyer/order-success");
    } else {
      navigate("/buyer/order-failed");
    }
  };

  return (
    <div className="relative bg-green-50 min-h-screen p-4 space-y-4 ">
      {/* Address */}
      <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center gap-2">
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin text-teal-600"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
          </svg>
          <span>{address}</span>
        </div>
        <Button className="text-blue-600 text-sm font-medium">Edit</Button>
      </div>

      {/* Order Summary */}
      <div>
        <h3 className="text-base font-semibold text-gray-800 mb-2">
          Order Summary
        </h3>
        <div className="bg-white rounded-lg shadow-sm p-4 flex gap-4 items-start">
          <img
            src={product.image}
            alt="product"
            className="w-16 h-16 rounded object-cover"
          />
          <div>
            <h4 className="font-medium text-gray-800">{product.title}</h4>
            <p className="text-gray-500 text-sm">{product.seller}</p>
            <p className="text-gray-700 text-sm">Qty: {product.qty}</p>
          </div>
        </div>
      </div>

      {/* Totals */}
      <div className="space-y-1">
        <div className="flex justify-between text-gray-700">
          <span>Subtotal</span>
          <span>₹{product.price}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between font-semibold text-black">
          <span>Total</span>
          <span>₹{product.price}</span>
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-white rounded-lg shadow-sm p-4 flex justify-between items-center">
        <div className="flex gap-2 items-center">
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-credit-card text-teal-600"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
            <path d="M3 10l18 0" />
            <path d="M7 15l.01 0" />
            <path d="M11 15l2 0" />
          </svg>
          <span className="text-gray-800 font-medium">Credit / Debit Card</span>
        </div>
        <Button className="text-blue-600 text-sm font-medium">Change</Button>
      </div>

      {/* Final Totals */}
      <div className="bg-white rounded-lg shadow-sm p-4 space-y-1">
        <div className="flex justify-between text-gray-700">
          <span>Subtotal</span>
          <span>₹{product.price}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between font-semibold text-black">
          <span>Total</span>
          <span>₹{product.price}</span>
        </div>
      </div>

      {/* Place Order Button */}
      <div className="mt-4">
        <Button
          onClick={handlePlaceOrder}
          className="bg-teal-600 text-white w-full py-2 rounded-lg"
        >
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default CheckoutPage;
