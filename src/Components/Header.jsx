import React from 'react'
import { MdOutlineSlowMotionVideo } from "react-icons/md";
const Header = () => {
  return (
    <>
      <div className='flex justify-between pt-[150px]'>
        <div>
          <h2 className='font-bold text-4xl'>
            eStartup
          </h2>
          <p className='text-gray-500 my-5'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, accusamus! Lorem ipsum dolor sit amet.
          </p>
          <p className='text-gray-500 my-5'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, accusamus!
          </p>
          <div className='flex'>
            <a href="#" className='bg-gradient-to-br from-green-400 to-green-600 shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.5)] transition-all duration-500 rounded-3xl transform hover:-translate-y-2 mt-4 block w-35 text-center text-l pt-4 text-amber-50 font-medium'>Get Started</a>
            <a href="#" className='p-4 text-green-500 mt-4  w-50 text-center flex justify-center items-center text-xl gap-3'><MdOutlineSlowMotionVideo className='text-2xl' />
              Watch Video</a>
          </div>
        </div>
        <div >
          <img src="/computer.webp" alt="" />
        </div>
      </div>
    </>
  )
}

export default Header