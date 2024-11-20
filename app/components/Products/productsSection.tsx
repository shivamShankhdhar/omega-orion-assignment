import Image from 'next/image'
import React from 'react'
import ProductItem from './image'

const ProductsSection = () => {
    const items = [1,2,3,4,5,6,7,8]
  return (
    <section className='flex w-full flex-wrap justify-center gap-[20px] p-5'>
        {items.map(item=>{
            return <ProductItem key={`key-for-images-${item}`} imageUrl={`/assets/design-${item}.png`}/> 
        })}
    </section>
  )  
}

export default ProductsSection


