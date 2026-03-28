import React from "react";
import Button from "./common/Button";
import Icons from "./common/Icons";

function Hero() {
  return (
    <div className="flex items-start justify-center px-6 pt-[157px] max-[1170px]:pt-[100px]">
      <div className="flex flex-col items-center text-center">

        <h1 className="font-semibold lg:max-w-[728px] max-w-[600px] text-5xl sm:text-6xl lg:text-7xl leading-[121%] tracking-normal bg-gradient-to-r from-black to-[#494949] bg-clip-text text-transparent">
          A wonderful way to Transform your walls.
        </h1>

        <p className="pt-[25px] pb-[25px] lg:max-w-[680px] md:max-w-[500px] max-w-[400px] font-medium    lg:text-xl leading-[140%] text-black">
          No matter your decorating style, we've got the tricks that can give life to your
          walls and bring out your true personality.
        </p>

        <Button
          className="hover:bg-white hover:text-[#ED1C25] hover:border-[#ED1C25] border transition-all duration-300 flex items-center py-3 px-6 font-semibold text-base sm:text-lg lg:text-xl text-white rounded-[82px] bg-[#ED1C25] shadow-[0px_12px43.8px-10px_#ED1C25]"
          text="Square Your Photos"
        />
        <p className="lg:mt-[89px] mt-2 font-normal text-[12px] leading-[100%] text-[#1E1E1E]"><Icons icon={"round_arrow"} /></p>
      </div>
    </div>

  );
}

export default Hero;













// import React from "react";
// import Button from "./common/Button";
// import Icons from "./common/Icons";

// function Hero() {
//   return (
//     <div className="absolute inset-0 flex items-start mt-[157px] max-[1170px]:mt-[100px] justify-center px-6">
//       <div className="flex flex-col items-center text-center">

//         <h1 className="font-semibold lg:max-w-[728px]  md:max-w-[600px] max-w-[400px] text-5xl min-[580px]:text-6xl lg:text-7xl leading-[121%] tracking-normal bg-gradient-to-r from-black to-[#494949] bg-clip-text text-transparent">
//           A wonderful way to Transform your walls.
//         </h1>

//         <p className="pt-[25px] pb-[25px] lg:max-w-[680px] md:max-w-[500px] max-w-[400px] font-medium text-base md:text-lg lg:text-xl leading-[140%] text-black">
//           No matter your decorating style, we've got the tricks that can give life to your
//           walls and bring out your true personality.
//         </p>

//         <Button
//           className="hover:bg-white hover:text-[#ED1C25] hover:border-[#ED1C25] border transition-all duration-300 flex items-center py-3 px-6 font-semibold text-base sm:text-lg lg:text-xl text-white rounded-[82px] bg-[#ED1C25] shadow-[0px_12px43.8px-10px_#ED1C25]"
//           text="Square Your Photos"
//         />
//         <p className="lg:mt-[89px] mt-2 font-normal text-[12px] leading-[100%] text-[#1E1E1E]"><Icons icon={"round_arrow"}/></p>
//       </div>
//     </div>

//   );
// }

// export default Hero;





 