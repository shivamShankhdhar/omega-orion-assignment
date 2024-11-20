import React from 'react'
import CommentInfo from './CommentInfo'
import Comment from './Comment'
import CommentInput from './CommentInput'

const CommentSection = () => {
  return (
    <div className='flex flex-col gap-2 w-full p-5 bg-black rounded-lg'>
        <h1 className='font-2xl'>Comments</h1>
        <CommentInfo/>
        <Comment/>
        <CommentInput/>
    </div>
  )
}

export default CommentSection