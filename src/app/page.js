import Hero from '@/components/Hero'
import SimpleSteps from '@/components/SimpleSteps'
import React from 'react'

function Home() {
  return (
    <>
      <div className="relative w-full max-w-324.5 mx-auto ">
        <img
          src="/assets/images/webp/backgroundImage.webp"
          alt="bg-img"
          className="absolute inset-0 w-full h-full object-contain object-top max-lg:hidden"
        />
        <div className="relative z-10">
          <Hero />
          <SimpleSteps />
        </div>
      </div>
    </>
  )
}

export default Home
