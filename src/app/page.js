import Hero from '@/components/Hero'
import SimpleSteps from '@/components/SimpleSteps'
import Slider from '@/components/Slider'
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
              <div className='flex flex-row justify-between items-center gap-8 max-[1200px]:flex-col max-[1200px]:items-center max-[1200px]:justify-center max-[1200px]:text-center w-full px-4 mx-auto mt-[349.08px] max-[1200px]:mt-50 max-lg:mt-25'>
                <SimpleSteps />
                <div className='max-[1200px]:mx-auto max-[1200px]:w-full max-[1200px]:flex max-[1200px]:justify-center'>
                  <Slider />
                </div>
              </div>
        </div>
      </div>
    </>
  )
}

export default Home
