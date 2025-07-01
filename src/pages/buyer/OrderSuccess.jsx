import React from 'react'
import { Button } from '../../components/index'
import checkmark from '../../assets/Checkmark.gif'

function OrderSuccess() {

  const orderId = "12345"

  return (
    <div className="bg-white flex flex-col items-center h-screen">
<div className='mt-15 mb-6'>
  <img className="w-[200px]" src={checkmark} alt="" />
</div>
<div className='flex flex-col items-center justify-center gap-2 mt-6 mb-12 mx-4'>
    <h3 className='font-inter font-bold text-3xl tx-teal-900 text-center'>Your order has been placed successfully!</h3>
    <p className='font-inter font-light text-md tx-teal-900 text-center'>Thank you for your order!</p>
    <p className='font-inter font-light text-md tx-teal-900 text-center'>Your order {orderId} will be delivered soon.</p>
</div>

    <Button className='bg-teal-600 text-white px-30'>Back to Home</Button>

    </div>
  )
}

export default OrderSuccess