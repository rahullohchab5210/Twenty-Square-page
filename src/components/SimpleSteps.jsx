import React from 'react'
import Button from './common/Button'
import Slider from './Slider'

function SimpleSteps() {
  return (
 
<> 
      
          <div className='flex flex-col gap-6.75 max-w-137.5 max-[1200px]:max-w-full max-[1200px]:items-center max-[1200px]:justify-center max-[1200px]:text-center max-[1200px]:mx-auto w-full'>
        <h2 className='font-semibold text-5xl sm:text-6xl lg:text-7xl  leading-[100%] tracking-[0%] bg-linear-to-r from-[#000000] to-[#494949] bg-clip-text text-transparent'>
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
          className="max-w-56.5 text-[20px] px-6 py-3.25 hover:bg-white hover:text-[#ED1C25] border-[#ED1C25] shadow-[0px_12px_43.8px_-10px_#ED1C25] border transition-all duration-300"
              text="Square Your Photos"
            />
          </div>
          
          
    </>
      
  )
}

export default SimpleSteps
