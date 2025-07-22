import React from 'react'
import {Button} from '../../components/index'


function GoodsCard() {
    const product = {
        title : "Deere Tractor",
        price : "100",
        quantity : "50",
        image : "https://www.deere.co.in/assets/images/region-1/products/tractors/john-deere-e-series-cab.jpg",
    }
  return (
    <div className='flex flex-row items-start  bg-white rounded-lg px-5 py-5 gap-4 border border-gray-200 '>
        <img src={product.image} alt={product.title} className=' object-cover rounded-md w-25 h-25' />
        <div className='flex flex-col items-start'>
        <h2 className='text-lg font-semibold font-inter'>{product.title}</h2>
        <p className='text-black font-inter'>Price: ₹{product.price}</p>
        <p className='text-black font-inter'>Stock: {product.quantity}</p>
        <div className='flex flex-row items-center gap-2'>
            <Button className=' bg-teal-600 text-white px-8 rounded-sm mt-2 w-1/2'>Edit</Button>
            <Button className=' bg-teal-600 text-white px-6  rounded-sm mt-2 w-1/2'>Delete</Button>
        </div>
        </div>
    </div>
  )
}

export default GoodsCard