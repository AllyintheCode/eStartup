import React from 'react'
import { MdOutlineTabletMac } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";
import { SiGooglemaps } from "react-icons/si";
import { FaBezierCurve } from "react-icons/fa6";
import "./Mock/cartData"
const Footer = () => {
  return (
    <>
      <div className='flex gap-40 mt-8'>
        <div className="w-[250px] h-[250px] bg-gradient-to-br from-green-400 to-green-600 pt-14 shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.5)] transition-all duration-500 rounded-3xl transform hover:-translate-y-2">
          <MdOutlineTabletMac className="text-amber-50 text-6xl mx-auto drop-shadow-lg" />
          <h2 className="text-amber-50 text-3xl text-center mt-3 font-semibold drop-shadow-md">
            Lorem Ipsum
          </h2>
        </div>
        <div className='w-[250px] h-[250px] bg-gradient-to-br from-green-400 to-green-600 pt-14 shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.5)] transition-all duration-500 rounded-3xl transform hover:-translate-y-2'>
          <IoDiamondOutline className='text-amber-50  text-6xl mx-auto' />
          <h2 className=' text-amber-50 text-3xl text-center mt-3 font-medium'>
            Lorem Ipsum
          </h2>
        </div>
        <div className='w-[250px] h-[250px] bg-gradient-to-br from-green-400 to-green-600 pt-14 shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.5)] transition-all duration-500 rounded-3xl transform hover:-translate-y-2'>
          <SiGooglemaps className='text-amber-50  text-6xl mx-auto' />
          <h2 className=' text-amber-50 text-3xl text-center mt-3 font-medium'>
            Lorem Ipsum
          </h2>
        </div>
        <div className='w-[250px] h-[250px] bg-gradient-to-br from-green-400 to-green-600 pt-14 shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.5)] transition-all duration-500 rounded-3xl transform hover:-translate-y-2'>
          <FaBezierCurve className='text-amber-50  text-6xl mx-auto' />
          <h2 className=' text-amber-50 text-3xl text-center mt-3 font-medium'>
            Lorem Ipsum
          </h2>
        </div>
      </div>
    </>
  )
}

export default Footer