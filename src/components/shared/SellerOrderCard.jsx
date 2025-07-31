import React from 'react'
import { Button } from '../index'
import wheat from '../../assets/wheat.jpg'
import { useNavigate } from 'react-router'

function SellerOrderCard() {
    const navigate = useNavigate();

    const  orderDetails = {
        id: 1,
        title: 'Organic Wheat',
        user_id: 101,
        user_name: 'John Doe',
        quantity: 5,
        address: '123 Farm Lane, Springfield',
        image: wheat,
    }
  return (
    <div 
    className='bg-white  shadow-sm rounded-lg p-4 cursor-pointer '>
        <div 
        onClick={() => navigate(`/seller/order-description/${orderDetails.id}`)}
        className=' order-details flex flex-row items-start  gap-4'>
           <img className="w-20 h-20 rounded-lg" src={orderDetails.image} alt={orderDetails.title} />
           <div className=''>
               <h4 className='text-sm font-semibold text-teal-900'>{orderDetails.title}</h4>
               <p className='text-xs text-black font-medium'>Sold to: {orderDetails.user_name}</p>
               <p className='text-xs text-black font-medium'>Quantity: {orderDetails.quantity}</p>
               <p className='text-xs text-black font-medium'>Address: {orderDetails.address}</p>
           </div>
        </div>
        <div className='order-status flex flex-row items-center justify-between mt-4 gap-4'>
          <select className='bg-emerald-50 text-teal-900 rounded-md px-4 py-2 font-semibold cursor-pointer'>
            <option value="pending">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <Button className='bg-teal-600 text-white' variant='primary'>Update Status</Button>
        </div>
    </div>
  )
}

export default SellerOrderCard