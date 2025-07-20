import React from "react";

export default function OrderCard({
  image = 'https://images.unsplash.com/photo-1437252611977-07f74518abd7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  title,
  description,
  quantity,
  status = "Delivered",
  deliveryDate,
  returnDate = 9,
  rating = 0,
  onClick,
  ...props
}) {
  return (
    <div
      onClick={onClick}
      className="bg-white  shadow-sm my-4  "
    >
      {/* Status Row */}
      <div className="flex flex-col text-green-600 font-medium text-sm mx-3.5 gap-0"> 
        <span className="flex flex-row gap-1"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-package"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" /><path d="M12 12l8 -4.5" /><path d="M12 12l0 9" /><path d="M12 12l-8 -4.5" /><path d="M16 5.25l-8 4.5" /></svg>{status}</span>
        <span className="text-gray-600 mx-7">On Wed, 8 Jan{deliveryDate}</span>
      </div>

      {/* Product Info */}
      <div className="flex flex-row gap-4 py-2 px-4 items-center cursor-pointer ">
        <img
          src={image}
          alt="product"
          className="w-17.5 h-25 object-cover"
        />
        <div className="flex-1">
          <h4 className="text-sm font-semibold">Thind Farms{title}</h4>
          <p className="text-xs text-gray-500">Oil seeds for farming purpose {description}</p>
          <p className="text-xs text-gray-500 font-medium">Quantity: 5Kg {quantity}</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-gray-700 mt-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>

      {/* Return Date */}
      <p className="text-sm text-gray-600 border-t-1 border-neutral-400 px-4 py-2 shadow-md">
        • Exchange/Return window closed on Wed, 15 Jan{returnDate}
      </p>

      {/* Rating */}
      <div className="flex flex-col items-start gap-2 px-4 py-4">
        <div className="flex flex-row">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-star fill-gray-600"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg>
          ))}
        </div>
        <span className="ml-1 text-sm text-gray-600">
          Rate & Review to win Credits
        </span>
      </div>
    </div>
  );
}
