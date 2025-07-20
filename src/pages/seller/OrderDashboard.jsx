import React from 'react'
import { SellerFooter , SellerOrderCard } from '../../components/index'

function OrderDashboard() {
  return (
    <div className="flex flex-col bg-amber-50 items-center h-screen font-inter">
        
        <h3 className="text-3xl font-bold text-teal-900 my-6">
        Your Orders
      </h3>
      <div className='order-dashboard-container flex flex-col gap-2 justify-center h-auto'>
        <SellerOrderCard />
        <SellerOrderCard />
        <SellerOrderCard />
      </div>
      <div className='fixed bottom-0 w-full z-50'>
        <SellerFooter />
      </div>
    </div>
  )
}

export default OrderDashboard