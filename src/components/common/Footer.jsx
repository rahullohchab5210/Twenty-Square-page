import React from 'react'

function Footer() {
  return (
    <div className='bg-[#F2F2F2]  mt-25.25 '>
      <div className='max-w-324.5 mx-auto px-4'>
        <div className='flex lg:flex-row flex-col max-lg:gap-y-10 justify-between w-full pt-9.5 pb-14.75'>
          <div className='flex sm:flex-row flex-col lg:gap-[175.14px] max-lg:justify-between max-sm:gap-y-10 w-full'>
            <a href="#">
              <img src="/assets/images/webp/footerLogo.webp" alt="logoImage" />
            </a>
            <div className='flex flex-row gap-0.5'>
              <div className='flex flex-col  min-w-33.75 float-left'>
                <h6 className='font-medium text-[16px] leading-[150%] tracking-[0%] text-[#000000] pb-5'>About</h6>
                <a href="#" className='font-normal text-sm leading-[150%] tracking-[0px] text-[#4A4F4B]  relative inline-block group w-fit hover:text-[#ED1C25]'>About Us
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#ED1C25] transition-all duration-300 group-hover:w-full rounded"></span></a>
                <a href="#" className='font-normal text-sm leading-[150%] tracking-[0px] text-[#4A4F4B] relative inline-block group w-fit pt-3 hover:text-[#ED1C25]'>FAQ’s
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#ED1C25] transition-all duration-300 group-hover:w-full rounded"></span></a>
                <a href="#" className='font-normal text-sm leading-[150%] tracking-[0px] text-[#4A4F4B]  relative inline-block group w-fit pt-3 hover:text-[#ED1C25]'>Policies
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#ED1C25] transition-all duration-300 group-hover:w-full rounded"></span></a>
              </div>
              <div className='flex flex-col min-w-33.75 float-left'>
                <h6 className='font-medium text-[16px] leading-[150%] tracking-[0px] text-[#000000] pb-5'>Products</h6>
                <a href="#" className='font-normal text-sm leading-[150%] tracking-[0px] text-[#4A4F4B] relative inline-block group w-fit hover:text-[#ED1C25]'>Squares
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#ED1C25] transition-all duration-300 group-hover:w-full rounded"></span></a>
                <a href="#" className='font-normal text-sm leading-[150%] tracking-[0px] text-[#4A4F4B] relative inline-block group w-fit pt-3 hover:text-[#ED1C25]'>Gift Cards
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#ED1C25] transition-all duration-300 group-hover:w-full rounded"></span></a>
                <a href="#" className='font-normal text-sm leading-[150%] tracking-[0px] text-[#4A4F4B]  relative inline-block group w-fit pt-3 hover:text-[#ED1C25]'>Offers
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#ED1C25] transition-all duration-300 group-hover:w-full rounded"></span></a>
              </div>
            </div>
          </div>
          <div className=' shadow-[-33px_37px_43.8px_-17px_rgba(0,0,0,0.10)] bg-white max-w-82.5 max-h-38 rounded-2xl pb-[18.38px] pt-[6.62px] px-[17.89px] w-full -rotate-[3.5deg] '>
            <img src="/assets/images/webp/questionImage.webp" alt="image" />
            <h6 className='pb-3 font-semibold text-[24px] leading-[120%] tracking-[0%] bg-linear-to-r from-[#000000] to-[#494949] bg-clip-text text-transparent'>Need some help?</h6>
            <div className='flex flex-row items-center gap-2.5'>
              <button className='py-2.5 px-4 bg-[#F2F2F2] border border-[#E3E3E3] rounded-[82px] font-semibold text-sm leading-[100%] tracking-[0%] text-[#2B2B2B]'>Chat With Us</button>
              <button className='py-2.5 px-4 bg-[#F2F2F2] border border-[#E3E3E3] rounded-[82px] font-semibold text-sm leading-[100%] tracking-[0%] text-[#2B2B2B]'>Contact Us</button>
            </div>
          </div>
        </div>
        <div className='flex flex-col sm:gap-12.75 gap-10 mb-12.75'>
          <div className='border border-primary w-full opacity-10'></div>
          <div className='flex sm:flex-row flex-col max-sm:gap-2 items-center justify-between'>
            <p className='font-normal text-sm text-[#000000] leading-[150%] tracking-[0%]'>Twenty Square © 2024. All Rights Reserved.</p>
            <div className='flex flex-row gap-4.25'>
              <a href="https://www.instagram.com/" target='_blank'><img src="/assets/images/webp/instagram.webp" alt="instagram" className='w-6 h-6 hover:scale-125 transition-all duration-300 cursor-pointer' /></a>
              <a href="https://www.facebook.com/" target='_blank'><img src="/assets/images/webp/facebook.webp" alt="facebook" className='w-6 h-6 hover:scale-125 transition-all duration-300 cursor-pointer' /></a>
              <a href="https://www.youtube.com/" target='_blank'><img src="/assets/images/webp/youtube.webp" alt="youtube" className='w-6 h-6 hover:scale-125 transition-all duration-300 cursor-pointer' /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer