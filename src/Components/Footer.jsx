import React from 'react'
import { MdOutlineTabletMac } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";
import { SiGooglemaps } from "react-icons/si";
import { FaBezierCurve } from "react-icons/fa6";

const Footer = () => {
  const cards = [
    {
      icon: <MdOutlineTabletMac className="text-amber-50 text-6xl mx-auto drop-shadow-lg" />,
      title: "Lorem Ipsum"
    },
    {
      icon: <IoDiamondOutline className="text-amber-50 text-6xl mx-auto drop-shadow-lg" />,
      title: "Lorem Ipsum"
    },
    {
      icon: <SiGooglemaps className="text-amber-50 text-6xl mx-auto drop-shadow-lg" />,
      title: "Lorem Ipsum"
    },
    {
      icon: <FaBezierCurve className="text-amber-50 text-6xl mx-auto drop-shadow-lg" />,
      title: "Lorem Ipsum"
    }
  ];

  return (
    <div className='mt-30 px-4 max-w-[1200px] mx-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center'>
        {cards.map(({ icon, title }, index) => (
          <div key={index} className="w-[250px] h-[250px] bg-gradient-to-br from-green-400 to-green-600 pt-14 shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.5)] transition-all duration-500 rounded-3xl transform hover:-translate-y-2 text-center">
            {icon}
            <h2 className="text-amber-50 text-3xl mt-3 font-semibold drop-shadow-md">
              {title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Footer
