import React, { useState } from 'react'

const CommentInput = () => {

    const [comment,setComment] = useState<string>();
    const handleSubmit = () => {
        alert(comment);
    }

  return (
    <div className='w-full flex justify-center items-center gap-2 bg-[#1b1b1b] p-3'>
        <div className="flex-1 ">
            <input className='w-full p-1 outline-none bg-[#1b1b1b]' 
            placeholder='Drop a comment, be helpful' 
            onChange={(e)=>setComment(e.target.value)}/>
        </div>
        <div className="">
            <button 
            className='bg-[#cbff00] text-black py-1 px-3 rounded-lg' 
            onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default CommentInput
