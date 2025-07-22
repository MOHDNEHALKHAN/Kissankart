import React from 'react'
import { GoodsCard , SellerFooter} from '../../components/index'

function ViewProduct() {
  return (
    <div className='flex flex-col h-screen bg-amber-50 gap-3 items-center px-4 py-6 relative  min-h-screen overflow-y-auto w-full pb-25'>
      <GoodsCard/>
      <GoodsCard/>
      <GoodsCard/>
      
      <div className='fixed bottom-0 z-50 w-full'>
        <SellerFooter/>
      </div>
    </div>
  )
}

export default ViewProduct