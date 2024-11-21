import Link from 'next/link'
import React from 'react'
import FeatureItems from './FeatureItems'

const FeatureSection = () => {
  return (
    <section className='flex fmd:lex-row lg:flex-row gap-2 py-[50px] px-10 flex-wrap sm:flex-col'>
        <div className="flex-1 py-8 px-5 ">
            <h1 className='text-2xl'>Description</h1>
            <p className='pb-[50px]'>Hello Friends 👋🏻 </p>
            <p className='pb-[50px]'> 
                Achieving your goals is now simpler than ever with Beetroot. Take control of your habits by setting personalized goals, receiving timely reminders, and effortlessly tracking your progress. The app records your journey and provides insights to help you build a healthier, more organized life. It addresses several challenges, from maintaining consistency to monitoring your overall progress. 
                Your path to a better you has never been this straightforward!
            </p>
            <p>
                I also want to share my exploration of our app&apos;s features. You can set specific quitting goals, find tips for overcoming cravings, and access support resources whenever you need them. I hope you guys find it useful.Feel free to comment!🔥 Checkout our other product - <Link href="https://ui8.net/omega-orion/products/forgo---quit-smoking-app">https://ui8.net/omega-orion/products/forgo---quit-smoking-app✉️</Link>
            </p>
        </div>
        <div className="py-8 px-5 flex-1">
        <h1 className='text-2xl pb-[50px]'>Features</h1>
            <FeatureItems/>
        </div>
    </section>
  )
}

export default FeatureSection
