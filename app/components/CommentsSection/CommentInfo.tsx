import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
const CommentInfo = () => {
  return (
    <div className='flex gap-2'>
        <div className="w-[50px] flex justify-center items-center">
            <FaRegUserCircle size={25}/>
        </div>
        <div className="flex flex-col flex-1">
            <div>Shivam Shankhdhar</div>
            <span className='text-sm'>Gave feedback on 20th Nov, 2024</span>
        </div>
    </div>
  )
}

export default CommentInfo