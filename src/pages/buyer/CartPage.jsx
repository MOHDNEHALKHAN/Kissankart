import React from "react";
import { Footer, Button, CartItem } from "../../components/index";

function CartPage({origionalamount ="" , discountedamount =""}) {

  const address = "111, New Delhi , 221342";
  return (
    <div className="relative bg-green-50 flex flex-col  min-h-screen overflow-y-auto w-full">
      <div className="flex flex-row mt-4 gap-2 mx-4 ">
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
          className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left text-gray-700 cursor-pointer"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l14 0" />
          <path d="M5 12l4 4" />
          <path d="M5 12l4 -4" />
        </svg>
        <h3 className="font-inter font-semibold">MY CART</h3>
      </div>
      {/* <div className=" bg-white flex flex-row  px-3 py-3 my-4 gap-2 items-center justify-between">
        <span class><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg> 111, New Delhi , 221342{}</span>
        <Button className="border-1 border-neutral-500 text-blue-600">
          Change
        </Button>
      </div> */}
      <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm mx-4 mt-2">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-green-700"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 1 1 18 0z"
            />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>{address}</span>
        </div>
        <button className="text-blue-600 text-sm font-medium">Edit</button>
      </div>
      <div className="flex flex-col gap-4  my-5 pb-36 shadow-sm rounded-lg">
        <CartItem image="https://images.unsplash.com/photo-1511735643442-503bb3bd348a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3JvcHN8ZW58MHx8MHx8fDA%3D" />
        <CartItem />
        <CartItem />
      </div>
      <div className="fixed bottom-14 w-full flex flex-row gap-4 my-5 bg-white py-4 px-8 items-center justify-between shadow-sm" >
        <span>
          <p>{origionalamount}599</p>
          <p>{discountedamount}499</p>
        </span>
<Button className="text-white bg-blue-400">Place Order</Button>
      </div>
      <div className="fixed bottom-0 w-full z-50">
        <Footer />
      </div>
    </div>
  );
}

export default CartPage;


