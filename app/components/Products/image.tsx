import Image from 'next/image'
import React from 'react'

const ProductItem = ({imageUrl}:any) => {
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