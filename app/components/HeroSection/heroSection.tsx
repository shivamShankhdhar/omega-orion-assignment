import React from 'react'
import Navbar from '../Navbar/navbar'
import { MdOutlineFeedback } from "react-icons/md";

const HeroSection = () => {
  return (
    <div className="w-full relative flex flex-col items-center justify-between bg-[url('/assets/design-5.png')] bg-cover bg-center inset-0  z-0">
        <div className="w-full bg-black/80 z-50">
        <Navbar/>
        <div className="h-[100px]"></div>
        <div className="w-full flex flex-wrap py-3 items-center">
            <div className="flex-1 ml-[80px] mr-[50px] sm:justify-center sm:items-center md:justify-start lg:justify-start flex text-2xl font-bold">
                Pixel Bloom: AI website agency
            </div>
            <div className="flex gap-5 justify-center items-center px-5 text-sm sm:w-full flex-wrap md:justify-end lg:justify-end sm:justify-center">
                <div className="w-[fit-content] border border-white py-1 justify-center items-center cursor-pointer  rounded-lg px-3 flex gap-2"><MdOutlineFeedback/> Give feedback</div>
                <div className="w-[fit-content] border bg-[#cbff00] text-black border-[#cbff00] py-1  justify-center items-center cursor-pointer px-3 rounded-lg">add to cart $20</div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default HeroSection
