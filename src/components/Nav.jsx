import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

const Nav = () => {
  return (
    <div className='flex w-full h-20 items-center justify-between'>
     <div className='flex items-center'>
        <img className='h-14 ml-3' src="https://alphasilver.productsalphawizz.com/uploads/media/2024/newlogo22.png" alt="" />
        <input type="Search" 
        placeholder='Search For Products'
        className='w-[30vw] px-4 py-4 ml-12 h-10 bg-slate-100 text-gray-700  border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500' />
        <button
        type="button"
        className="px-4 py-2 h-10 rounded text-white bg-blue-200 hover:bg-blue-600 flex items-center justify-center"
      >
        <FaSearch className="w-4 h-4" />
      </button>
     </div>
     <div className='flex gap-4 items-center mr-2'>
        <button className='text-[#49A6A2] hover:bg-[#49A6A2] hover:text-white rounded font-bold border border-[#49A6A2] p-2'>Login</button>
        <FaRegHeart className='text-[#49A6A2] text-2xl font-bold'/>
        <TiShoppingCart className='text-[#49A6A2] text-2xl font-bold' />
     </div>
    </div>
  )
}

export default Nav