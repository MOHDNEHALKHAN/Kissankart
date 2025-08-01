import React from 'react'
import { GoodsCard } from '../../components/index'
import { useNavigate } from 'react-router';

function AllProduct() {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col h-screen bg-amber-50 gap-3 px-4 py-4 w-full '>
        <div className="flex flex-start ">
        <svg
          onClick={() => navigate("/seller/")}
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
      <h3 className="text-3xl font-bold text-teal-900 mb-2  text-center">
        All Products
      </h3>
      <GoodsCard/>
      <GoodsCard/>
      <GoodsCard/>
      
      
    </div>
  )
}

export default AllProduct