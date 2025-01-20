import React from 'react'
import { CiMenuBurger } from "react-icons/ci";

const Nav2 = () => {
  return (
    <div>
      <footer className="flex - row justify-between h-10 items-center p-6 bg-[#49A6A2] text-white w-full">      
     
      <button className='text-white'><CiMenuBurger /></button>
      <ul className="flex items-center ml-4 h-10 gap-12 w-full">
        {[
          "See All",
          "Clothing",
          "Electronics",
          "Home & Kitchen",
          "Beauty & Personal Care",
          "Toys & Games",
          "Grocery & Gourmet Food",
          "Books",
        ].map((item, index) => (
          <li
            key={index}
            className="relative h-10 px-4 py-2 hover:text-white transition-all cursor-pointer group"
          >
            {item}
            {/* White Line */}
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white group-hover:w-full transition-all"></span>
          </li>
        ))}
      </ul>
    </footer>
    </div>
  )
}

export default Nav2
