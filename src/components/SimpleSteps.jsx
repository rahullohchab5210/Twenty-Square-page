import React from 'react'
import Button from './common/Button'
import Slider from './Slider'

function SimpleSteps() {
  return (
    <div className="w-full mt-[349.08px] max-[1200px]:mt-50 max-lg:mt-25">
      <div className='max-w-360 px-4 mx-auto'>
        <div className='flex flex-row justify-between items-center gap-8 max-[1200px]:flex-col max-[1200px]:items-center max-[1200px]:justify-center max-[1200px]:text-center w-full'>

          {/* Left Content */}
          <div className='flex flex-col gap-6.75 max-w-137.5 max-[1200px]:max-w-full max-[1200px]:items-center max-[1200px]:justify-center max-[1200px]:text-center max-[1200px]:mx-auto w-full'>
            <h2 className='font-semibold text-5xl sm:text-6xl lg:text-7xl  leading-[100%] tracking-[0%] text-black'>
              It's so simple, even a child can do it.
            </h2>
            <div className='flex flex-col'>
              <div className='flex flex-row sm:items-center gap-4.25 py-4'>
                <div className='bg-red-600 min-w-6 w-6 h-6 flex items-center justify-center rounded-[41px]'>
                  <span className='text-white text-sm'>1</span>
                </div>
                <p className='font-medium text-xl leading-[140%] tracking-[0%] text-[#000000]'>
                  Peel the protective paper of the adhesive
                </p>
              </div>
              <div className='flex flex-row sm:items-center gap-4.25 py-4'>
                <div className='bg-red-600 min-w-6 w-6 h-6 flex items-center justify-center rounded-[41px]'>
                  <span className='text-white text-sm'>2</span>
                </div>
                <p className='font-medium text-xl leading-[140%] tracking-[0%] text-[#000000]'>
                  Place the frames against the wall and press firmly.
                </p>
              </div>
              <div className='flex flex-row items-center gap-4.25 py-4'>
                <div className='bg-red-600 min-w-6 w-6 h-6 flex items-center justify-center rounded-[41px]'>
                  <span className='text-white text-sm'>3</span>
                </div>
                <p className='font-medium text-xl leading-[140%] tracking-[0%] text-[#000000]'>
                  Enjoy! (and feel free to rearrange).
                </p>
              </div>
            </div>
            <Button
              className="max-w-56.5 text-[16px] hover:bg-white hover:text-[#ED1C25] hover:border-[#ED1C25] border transition-all duration-300"
              text="Square Your Photos"
            />
          </div>
          {/* Right Content */}
          <div className='max-[1200px]:mx-auto max-[1200px]:w-full max-[1200px]:flex max-[1200px]:justify-center'>
            <Slider />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SimpleSteps
