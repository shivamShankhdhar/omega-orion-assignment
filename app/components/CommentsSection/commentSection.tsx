import React from 'react'
import CommentInfo from './CommentInfo'
import Comment from './Comment'
import CommentInput from './CommentInput'

const CommentSection = () => {
  return (
    <div className='w-[90%] flex flex-col gap-2  bg-[#141414] overflow-hidden rounded-lg mb-5'>
        
        <div className="w-full pt-10 pl-10 pr-10 pb-0 flex flex-col gap-5">
        <h1 className='font-2xl font-bold'>Comments</h1>
        <CommentInfo/>
        <Comment/>
        </div>        
        <CommentInput/>
    </div>
  )
}

export default CommentSection
