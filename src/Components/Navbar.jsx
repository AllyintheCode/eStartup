import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'

const Navbar = () => {
  const [openDropDownMenu, setOpenDropDownMenu] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const clickDropDown = () => setOpenDropDownMenu(!openDropDownMenu)
  const clickMenu = () => setMenuOpen(!menuOpen)

  return (
    <nav>
      <div className='max-w-[1200px] mx-auto px-4 py-4 flex justify-between items-center'>
        {/* logo */}
        <div className='text-3xl font-bold text-[#212121]'>
          <span className='text-green-500'>e</span>Startup
        </div>

        {/* Hamburger menu*/}
        <div className='md:hidden text-3xl cursor-pointer z-1' onClick={clickMenu}>
          {menuOpen ? <RxCross2 /> : <GiHamburgerMenu />}
        </div>


        <div className='hidden md:flex gap-7 font-semibold items-center relative '>
          <a href="#" className='hover:text-green-500'>Home</a>
          <a href="#" className='hover:text-green-500'>About</a>
          <a href="#" className='hover:text-green-500'>Services</a>
          <a href="#" className='hover:text-green-500'>Features</a>
          <a href="#" className='hover:text-green-500'>Pricing</a>

          {/* Dropdown menu */}
          <div className='relative'>
            <button onClick={clickDropDown} className='flex items-center hover:text-green-500  '>
              Dropdown
              <IoIosArrowDown
                className={`ml-1 transition-transform duration-300 ${openDropDownMenu ? 'rotate-90' : 'rotate-0'}`}
              />
            </button>
            <div className={`absolute bg-gradient-to-br from-green-400 to-green-600 shadow-lg mt-2 p-2 rounded top-8 w-[100px] flex flex-col text-white transition-all duration-300 ${openDropDownMenu ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
              <a href="#" className='py-1 px-2 hover:bg-gray-500 rounded'>Page 1</a>
              <a href="#" className='py-1 px-2 hover:bg-gray-500 rounded'>Page 2</a>
              <a href="#" className='py-1 px-2 hover:bg-gray-500 rounded'>Page 3</a>
            </div>
          </div>

          <a href="#" className='hover:text-green-500'>Contact</a>
        </div>
      </div>

      {/* Mobile Menu*/}
      <div className={`fixed top-0 right-0 h-full w-[250px] bg-white shadow-lg transition-transform duration-500  transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex flex-col gap-5 px-6 py-6 text-lg font-medium'>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>

          {/* Drop mobile */}
          <div className='w-full'>
            <button onClick={clickDropDown} className='flex items-center w-full'>
              Dropdown
              <IoIosArrowDown
                className={`ml-1 transition-transform duration-300 ${openDropDownMenu ? 'rotate-90' : 'rotate-0'}`}
              />
            </button>
            {openDropDownMenu && (
              <div className='mt-1 ml-2 flex flex-col gap-1 text-white bg-gradient-to-br from-green-400 to-green-600 p-2 rounded'>
                <a href="#" className='py-1 px-2 hover:bg-gray-700 rounded'>Page 1</a>
                <a href="#" className='py-1 px-2 hover:bg-gray-700 rounded'>Page 2</a>
                <a href="#" className='py-1 px-2 hover:bg-gray-700 rounded'>Page 3</a>
              </div>
            )}
          </div>
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
