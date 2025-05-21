import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [openDropDownMenu, setOpenDropDownMenu] = useState(false)
  const toogleDropDown = () => {
    setOpenDropDownMenu(!openDropDownMenu)
  }
  return (
    <>
      <nav>
        <div className='w-[1500px] mx-auto flex justify-between items-center'>
          <div className='text-4xl font-bold font-sans text-[#212121]'>
            <span className='text-green-500'>e</span>Startup
          </div>
          <div className='text-l font-[600] flex gap-10 relative'>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <div className='relative'>
              <button onClick={toogleDropDown} className='flex items-center'>
                Dropdown
                <IoIosArrowDown
                  className={`ml-1 transition-transform duration-300 ${openDropDownMenu ? 'rotate-90' : 'rotate-0'}`}
                />
              </button>
              <div
                className={`absolute bg-gradient-to-br from-green-400 to-green-600 shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.5)] transition-all duration-500 mt-2 p-2 rounded  top-8 w-[100px] flex flex-col text-amber-50
                ${openDropDownMenu ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <a href="#" className='py-1 px-2 hover:bg-gray-700'>Page 1</a>
                <a href="#" className='py-1 px-2 hover:bg-gray-700'>Page 2</a>
                <a href="#" className='py-1 px-2 hover:bg-gray-700'>Page 3</a>
              </div>
            </div>
            <a href="#">Contact</a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
