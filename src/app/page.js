import Footer from '@/components/common/Footer'
import Hero from '@/components/Hero'
import SimpleSteps from '@/components/SimpleSteps'
import React from 'react'

function Home() {
  return (
    <>
      <div className="relative w-full max-w-[1298px] mx-auto min-h-screen">

        <img
          src="/assets/images/webp/backgroundImage.webp"
          alt="bg-img"
          className="absolute inset-0 w-full h-full object-contain object-top max-lg:hidden"
        />

        <div className="relative z-10">
          <Hero />
          <SimpleSteps />
          <Footer />
        </div>
      </div>
       
    </>
  )
}
// function Home() {
//   return (
//     <>
//       <div className="relative w-full max-w-[1298px] mx-auto">
//         {/* Background image absolute, content ko cover kare */}
//         <img
//           src="/assets/images/webp/backgroundImage.webp"
//           alt="bg-img"
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         {/* Sab content normal flow mein */}
//         <div className="relative z-10">
//           <Hero />
//           <SimpleSteps />
//         </div>
//       </div>
//       <Footer />
//     </>
//   )
// }
export default Home

// import Footer from '@/components/common/Footer'
// import Hero from '@/components/Hero'
// import SimpleSteps from '@/components/SimpleSteps'
// import React from 'react'

// function Home() {
//   return (
//     <>
//       <div className="relative w-full max-w-[1298px] mx-auto ">
//         <img
//           src="/assets/images/webp/backgroundImage.webp"
//           alt="bg-img"
//           className="w-full object-cover max-w-[1298px]  mx-auto"
//         />

//         <Hero />
//         <SimpleSteps />
//       </div>
//       <Footer />
//     </>
//   )
// }

// export default Home