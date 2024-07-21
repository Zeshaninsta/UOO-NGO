import React from 'react'
import { IoMdStarOutline } from "react-icons/io";
import Logo from '../assets/Images/logo.png'
import useScrollPosition from '../Hooks/useScrollPosition';

const Navigation = () => {
  const scrollPosition = useScrollPosition();
  return (
    <div
    className={`w-full flex flex-col relative border-b border-slate-800 justify-center items-center z-50 px-5 py-2 transition-all duration-300 ${
      scrollPosition > 0
        ? "sticky top-0 bg-[#191919] backdrop-blur-md"
        : "relative bg-[#191919]"
    }`}
  >
            <div className='w-full flex justify-between items-center px-10 py-2'>
                <span className='relative flex justify-center items-center gap-2 '>
                <img src={Logo} alt="logo" className='w-20 rounded-full' />
                <span className='flex flex-col justify-start items-star'>
                <h1 className='text-white font-rubik text-2xl font-bold'>URJI ORPHANAGE ORGANIZATION</h1>
                <p className='text-md text-gray-300 capitalize'>
                being an Orphan Father is being a Father of Opportunity.
                </p>
                </span>
                </span>
                <ul className='flex justify-center items-center gap-2 text-xl border border-white text-white px-4 py-2 rounded-md'>
                    <li className='font-rubik font-thin cursor-pointer'>Home</li>
                    <li className='font-rubik font-thin cursor-pointer'>About</li>
                    <li className='font-rubik font-thin cursor-pointer'>Services</li>
                    <li className='font-rubik font-thin cursor-pointer'>Contact</li>
                <span className='ml-10'>
                  <button className='w-40 rounded-md bg-blue-500 hover:bg-blue-600 duration-500 text-white font-rubik px-4 py-2 z-20'>Donate Now</button>
                </span>
                </ul>
            </div>
    </div>
  )
}

export default Navigation