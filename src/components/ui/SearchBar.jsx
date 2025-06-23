import React from 'react'

export default function SearchBar({ 
  placeholder = "",
   className = "", 
   ...props 
  }) {
  return (
    <div className={`w-full flex flex-row justify-evenly items-center bg-white rounded-xl px-7 py-3 shadow-sm  my-6 ${className}`}>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-indigo-950 mr-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
      </span>
      <input
        type="search"
        placeholder={placeholder}
        className="bg-transparent outline-none  w-full"
        {...props}
      />
      
    </div>
  )
}
