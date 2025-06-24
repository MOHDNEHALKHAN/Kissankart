import React from "react";
import { Footer, Button, CartItem } from "../../components/index";

function CartPage({origionalamount ="" , discountedamount =""}) {
  return (
    <div className="relative bg-green-50 flex flex-col  h-screen overflow-y-auto w-full">
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
      <div className=" bg-white flex flex-row  px-3 py-3 my-4 gap-2 items-center justify-between">
        <span>Deliver to : 111, New Delhi , 221342{}</span>
        <Button className="border-1 border-neutral-500 text-blue-600">
          Change
        </Button>
      </div>
      <div className="flex flex-col gap-4  my-5 pb-36 ">
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


