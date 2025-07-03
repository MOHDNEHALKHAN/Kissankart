import React from 'react'
import {Button} from '../index'
import img from '../../assets/apple.jpg'

function WishlistCard() {

const productname = "Product Name";
const productprice = "₹1000";

  return (
    <div className='w-45 h-70 bg-white shadow-md rounded-lg  flex flex-col'>
      
<div className="relative">
        <img className='w-full h-40 object-cover rounded-t-lg' src={img} alt={productname} />
        <button
          
          className="absolute top-2 right-2 bg-transparent p-1 rounded-full shadow hover:bg-red-100 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className='text-white'
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
      </div>
<div className='p-2 flex flex-col gap-2'>
<h3 className='font-inter font-semibold text-teal-900'>{productname}</h3>
<p className='font-inter font-medium text-teal-900'>{productprice}</p>
<Button className='w-full items-center bg-teal-600 text-white'>Move to Bag</Button>
</div>
    </div>
  )
}

export default WishlistCard