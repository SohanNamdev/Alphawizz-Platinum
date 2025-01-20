import React from 'react'
import { FaInstagram  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='h-96 w-full bg-black flex justify-between items-center'>
        <div className='flex items-center h-full w-1/3 border-r-2 border-gray-700'>
        <img className='h-36 ml-12' src="https://alphasilver.productsalphawizz.com/uploads/newlogo22.png" alt="" /></div>
        <div className=' h-full w-1/3 border-r-2 border-gray-700'>
        <div className='relative top-28 left-32 '><h4 className='text-2xl font-bold text-white'>Get to Know Us</h4>
        <h4 className='text-lg text-white'>Home</h4>
        <h4 className='text-lg text-white'>Product</h4>
        <h4 className='text-lg text-white'>Register</h4>
        <h4 className='text-lg text-white'>Contact</h4></div>
        </div>
        <div className='h-full w-1/3 '>
        <div className='relative top-28 left-32'>
            <h1 className='text-2xl font-bold text-white'>Connect With Us</h1>
            <FaInstagram className='text-white font-bold text-3xl m-2'/>  
            <img className='h-9 relative right-  ' src="https://jetsetterindia.com/uploads/appstore/playstore-image.png" alt="" />
        </div>
        </div>

    </div>
  )
}

export default Footer