import Image from 'next/image'
import React from 'react'

interface Props{
  imageUrl:string;
}

const ProductItem = ({imageUrl}:Props) => {
  return (
    <div className="w-[600px]">
        <Image
                src={imageUrl}
                width={800}
                height={800}
                objectFit='cover'
                objectPosition='center'
                alt="Logo"
    />
        </div>
  )
}

export default ProductItem
