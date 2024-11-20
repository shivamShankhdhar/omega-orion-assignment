import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [isSearchInput,setIsSearchInput] = useState(false)
  return (
    <div className='flex w-full '>
        <div className="flex flex-1 h-[50px] items-center">
            {/* logo image container */}
            <div className="ml-[80px] mr-[50px]">
                <Link
                href={"/"}>
            <Image
                src="/assets/wiki-logo.svg"
                width={50}
                height={50}
                alt="Logo"
    />
    </Link>
            </div>
            {/* menus options  */}
            <div className="w-full flex">
                <ul className='flex gap-5'>
                    <li><Link href={"#"}>Explore</Link></li>
                    <li><Link href={"#"}>FAQ&apos;s</Link></li>
                    <li><Link href={"#"}>Pricing</Link></li>
                </ul>
            </div>
        </div>
        <div className="flex px-5 h-[50px] gap-3 items-center ">
            {isSearchInput == false && (
                <FaMagnifyingGlass title='Click to open search'  className='cursor-pointer' onClick={()=>{
                    setIsSearchInput(true)
                }}/>
            )}
            
            {isSearchInput && (
                <div className="w-full justify-center items-center flex gap-2">
                    <input className='p-1 rounded-lg outline-none' placeholder='Search...'></input>
                    <IoMdClose title='Click to close search' className='cursor-pointer' onClick={()=>{
                    setIsSearchInput(false)
                }}/>
                </div>                
            )}
            <div className="">
            <Image
                src="/assets/wiki-logo.svg"
                width={50}
                height={50}
                alt="Logo"
    />
            </div>

        </div>
    </div>
  )
}

export default Navbar