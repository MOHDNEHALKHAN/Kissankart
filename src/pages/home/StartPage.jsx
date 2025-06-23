import React from 'react'

function StartPage() {
  return (
    <div className="relative bg-emerald-100 flex flex-col justify-center items-center h-screen gap-10 overflow-hidden">
      <img className='absolute top-0' src="src/assets/StartPage_Grass.svg" alt="Grass Image" />
      <div>
        <h2 className='font-madimi-one text-fuchsia-950 text-5xl tracking-wider text-center text-wrap px-30 leading-13 '>Farmers Trading App</h2>
      </div>
      <div className='bg-teal-500 w-[180px] h-[60px] rounded-full flex items-center justify-center'>
        <button className='font-madimi-one text-white text-2xl cursor-pointer'>Start Now</button>
      </div>
      <img className='absolute bottom-0 origin-center rotate-180' src="src/assets/StartPage_Grass.svg" alt="" />
    </div>
  )
}

export default StartPage
