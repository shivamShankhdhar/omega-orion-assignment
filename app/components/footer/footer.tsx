import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {

    const items = [
        "Explore",
        "FAQ",
        "Pricing",
    ]

    const items_2 = [
        "Licensing",
        "Terms of Use",
        "Privacy Policy",
    ]
    const [email,setEmail] = useState<string>();
    const handleSubmit = () =>{
        alert(email)
    }

  return (
    <div className='flex gap-2 mt-5 min-h-[250px] justify-around max-h-[fit-content]'>
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
<div className="flex flex-row flex-wrap gap-2">
    <div className='w-[200px]'>
        <ul className='flex w-full gap-2 flex-col flex-1'>
            {items.map(item=>{
                return <li key={item}>{item}</li>
            })}
        </ul>
    </div>
    <div className='w-[200px]'>
    <ul className='flex gap-2 flex-col'>
            {items_2.map(item=>{
                return <li key={item}>{item}</li>
            })}
        </ul>
    </div>
</div>
<div className="flex flex-col">
    <div className="w-full flex gap-2 flex-col">
        <h1 className='text-xl'>Join our Monthly News letter</h1>
        <div className="w-full flex flex-row gap-2 bg-black text-white">
            <input
             type="text" 
             className="p-2 outline-none bg-black" 
             placeholder='shivam-shankhdhar@gmail.com'
             onChange={(e)=>setEmail(e.target.value)}
             />
            <div className="">
            <button 
            className='bg-[#cbff00] text-black py-1 px-3 rounded-lg' 
            onClick={handleSubmit}>Submit</button>
        </div>
        </div>
    </div>
    <div className="w-full flex flex-col gap-2">
    <h1 className='text-xl'>Connect with us</h1>
</div>
    <div className='w-full flex gap-5 mt-5'>
        <div className='w-[30px] flex justify-center items-center border border-white rounded-full h-[30px]'>
            <Link href={"#"}><FaFacebookF/></Link>
        </div>

        <div className='w-[30px] flex justify-center items-center border border-white rounded-full h-[30px]'>
        <Link href={"#"}><FaInstagram/></Link>
        </div>

        {/* <div className='w-[30px] flex justify-center items-center rounded-full h-[30px]'>

        </div>

        <div className='w-[30px] flex justify-center items-center rounded-full h-[30px]'>

        </div> */}



    </div>
</div>


    </div>
  )
}

export default Footer
