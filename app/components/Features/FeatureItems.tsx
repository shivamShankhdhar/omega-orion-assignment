import React from 'react'
import { SiTicktick } from "react-icons/si";
const FeatureItems = () => {
    const featuresItems = [
        "120+ Screens",
        "Fully customisable designs",
        "Organised Design system",
        "Light & Dark mode",
        "Customised Illustration",
        "Neatly Organised layer"
    ]
  return (
    <ul className='flex flex-col gap-5'>
        {featuresItems.map(item=>{
            return <li className='flex gap-2 items-center' key={`featureitems-key-${item}`}><SiTicktick className='text-green-600'/> {item}</li>
        })}
    </ul>





  )
}

export default FeatureItems