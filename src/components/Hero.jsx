import React from "react";
import Button from "./common/Button";
import Icons from "./common/Icons";

function Hero() {
  return (
    <div className="flex items-start justify-center px-6 pt-39.25 max-[1170px]:pt-25">
      <div className="flex flex-col items-center text-center">
        <h1 className="font-semibold lg:max-w-182 max-w-150 text-5xl sm:text-6xl lg:text-7xl leading-[121%] tracking-normal bg-gradient-to-r from-[#000000] to-[#494949] bg-clip-text text-transparent">
          A wonderful way to Transform your walls.
        </h1>
        <p className="pt-6.25 pb-6.25 lg:max-w-170 md:max-w-125 max-w-100 font-medium lg:text-xl leading-[140%] text-black">
          No matter your decorating style, we've got the tricks that can give life to your
          walls and bring out your true personality.
        </p>
        <Button
          className="hover:text-[#ED1C25] border border-[#ED1C25] transition-all duration-300 flex items-center py-3.25 px-6 font-semibold text-base sm:text-lg lg:text-xl text-white rounded-[82px] bg-[#ED1C25] hover:bg-white shadow-[0px_12px_43.8px_-10px_#ED1C25]"
          text="Square Your Photos"
        />
        <p className="lg:mt-22.25 mt-2 font-normal text-[12px] leading-[100%] text-[#1E1E1E]"><Icons icon={"round_arrow"} /></p>
      </div>
    </div>

  );
}

export default Hero;
