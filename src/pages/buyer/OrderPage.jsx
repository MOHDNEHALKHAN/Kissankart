import React from 'react'
import {SearchBar , Button , Footer, OrderCard} from '../../components/index'

function OrderPage() {
  return (
    <div className="relative bg-green-50 flex flex-col  h-screen overflow-hidden w-full">
<div className='flex flex-col'>
    <div className="flex flex-row mt-4 gap-2 mx-4">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left text-gray-700 cursor-pointer"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M5 12l4 4" /><path d="M5 12l4 -4" /></svg>
    <h3 className='font-inter font-semibold'>MY CART</h3>
    </div>
    <div className='flex flex-row  items-center gap-2.5 mx-3.5'>
        <SearchBar placeholder='Search in orders' />
        <Button className="bg-white text-indigo-950  px-4 py-3 rounded flex flex-row font-light items-center justify-start gap-2 shadow-sm">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal text-gray-500"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 6l8 0" /><path d="M16 6l4 0" /><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 12l2 0" /><path d="M10 12l10 0" /><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 18l11 0" /><path d="M19 18l1 0" /></svg>
            Filter
        </Button>
    </div>
</div>
<div>
    <OrderCard/>
</div>
<div className="fixed bottom-0 w-full z-50">
        <Footer />
      </div>
    </div>
  )
}

export default OrderPage