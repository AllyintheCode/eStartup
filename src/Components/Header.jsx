import React from 'react'
import { MdOutlineSlowMotionVideo } from "react-icons/md";

const Header = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-between items-center pt-[100px] px-4 max-w-[1200px] mx-auto'>
      <div className='md:w-1/2 text-center md:text-left mt-10 md:mt-0'>
        <h2 className='font-bold text-4xl md:text-5xl text-[#212121]'>
          eStartup
        </h2>
        <p className='text-gray-500 my-5'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, accusamus! Lorem ipsum dolor sit amet.
        </p>
        <p className='text-gray-500 my-5'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, accusamus!
        </p>


        <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mt-6'>
          <a
            href="#"
            className='bg-gradient-to-br from-green-400 to-green-600 shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.5)] transition-all duration-500 rounded-3xl px-6 py-3 text-amber-50 font-medium text-lg transform hover:-translate-y-1'
          >
            Get Started
          </a>
          <a
            href="#"
            className='text-green-500 flex items-center gap-2 text-lg font-medium'
          >
            <MdOutlineSlowMotionVideo className='text-2xl' />
            Watch Video
          </a>
        </div>
      </div>
      <div className='md:w-1/2 flex justify-center'>
        <img src="/computer.webp" alt="Computer" className='w-[250px] md:w-[400px]' />
      </div>
    </div>
  )
}

export default Header
