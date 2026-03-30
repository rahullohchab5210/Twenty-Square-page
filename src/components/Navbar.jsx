"use client"
import React, { useEffect, useState } from 'react'
import Button from './common/Button'
import Icons from './common/Icons'
import { NAVLINKS } from '@/utils/consonants'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    useEffect(() => {
        if (menuOpen) {
            document.body.style.height = "100vh";
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.height = "auto";
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.height = "auto";
            document.body.style.overflow = "auto";
        };
    }, [menuOpen])

    return (
        <div className={`pt-3 pb-3.25 bg-linear-to-b from-white to-white/0 fixed top-0 w-full z-999 duration-300 transition-all  ${isScrolled ? "bg-white  shadow-lg" : "bg-transparent"}`}>
            <div className='max-w-360 mx-auto px-6 w-full'>
                <div className='flex flex-row items-center justify-between'>
                    <a href="#">
                        <img src="/assets/images/png/logoImage.png" alt="logoImage" />
                    </a>
                    <div className={`z-25 flex flex-row items-center lg:gap-29.75 gap-6 max-lg:flex-col  max-lg:pt-20 max-[1024px]:fixed max-[1024px]:bg-white  max-[1024px]:backdrop-blur-[50px] max-[1024px]:h-full max-[1024px]:w-1/2 max-sm:w-full max-sm:justify-center max-[1024px]:top-0 max-[1024px]:transition-all max-[1024px]:duration-300 max-[1024px]:ease-linear ${menuOpen === "show" ? "max-[1024px]:right-0" : "max-[1024px]:-right-full"}`}>
                        <div className='flex lg:flex-row lg:gap-10.25 gap-6 flex-col items-center'>
                            {NAVLINKS.map((item, i) => {
                                return <a key={i} href={item.url} className='capitalize font-normal text-[16px] max-lg:text-4xl leading-[118%] tgracking-[0%] text-[#000000] group relative inline-block hover:text-[#ED1C25]'>{
                                    item.title
                                }
                                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#ED1C25] transition-all duration-300 group-hover:w-full rounded"></span>
                                </a>
                            })}
                        </div>
                        <div className='flex lg:flex-row items-center lg:gap-2.5 gap-6 flex-col'>
                            <button className='flex flex-row gap-2.5 items-center py-3.5 px-6 border border-[#EDEDED] rounded-[82px] group hover:bg-[#000000] hover:border-transparent transition-all duration-300 cursor-pointer'>
                                <div className='w-4.75 h-4.75 flex items-center justify-center'>
                                    <span>
                                        <Icons icon={"DOWNLOAD"} pathClass={"group-hover:fill-white transition-all duration-300"} className={'max-lg:w-7 max-lg:h-7'} />

                                    </span>
                                </div>
                                <span className='font-semibold text-[16px] max-lg:text-3xl leading-[118%] tracking-[0%] text-[#000000] group-hover:text-white transition-all duration-300 '>Download App</span>
                            </button>
                            <div className="relative lg:flex hidden lg:right-auto group duration-300 ease-in rounded-full border border-transparent hover:border-[#ED1C25] hover:bg-[#ED1C25]">
                                <button className="border border-[#EDEDED] cursor-pointer w-fit p-3.75 rounded-full duration-300 ease-in hover:text-[#ED1C25] hover:border-transparent">
                                    <Icons icon={"CART"} pathClass={"group-hover:fill-white"} />
                                </button>
                                <span className="h-1.5 w-1.5 rounded-full bg-[#ED1C25] absolute top-[22%] right-[20%] group-hover:bg-white"></span>
                            </div>
                            <Button className="text-[16px] px-5.75 py-3.25 max-lg:text-2xl hover:bg-white hover:text-[#ED1C25] hover:border-[#ED1C25] border transition-all duration-300"
                                text="Sign Up/Log In"
                            />
                        </div>
                    </div>
                    <div className="absolute lg:hidden flex right-[20%]  sm:right-[15%] md:right-[8%] z-999  lg:relative lg:top-auto lg:translate-y-0   group duration-300 ease-in rounded-full border border-transparent hover:border-[#ED1C25] hover:bg-[#ED1C25]">
                        <button className="border border-[#EDEDED] cursor-pointer w-fit p-3.75 rounded-full duration-300 ease-in hover:text-[#ED1C25] hover:border-transparent">
                            {<Icons icon={"CART"} pathClass={"group-hover:fill-white"} />}
                        </button>
                        <span className="h-1.5 w-1.5 rounded-full bg-[#ED1C25] absolute top-[22%] right-[20%] group-hover:bg-white"></span>
                    </div>
                    <button onClick={() => setMenuOpen(menuOpen === "show" ? null : "show")} className="lg:hidden flex flex-col gap-1.5 w-10 h-10 justify-center items-center z-50 cursor-pointer">
                        <span className={`block w-7 h-0.5 bg-black transition-all duration-300 ${menuOpen === "show" ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`block w-7 h-0.5 bg-black transition-all duration-300 ${menuOpen === "show" ? "opacity-0" : ""}`} />
                        <span className={`block w-7 h-0.5 bg-black transition-all duration-300 ${menuOpen === "show" ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>
                <div
                    className={`fixed inset-0 bg-black/30 z-20 transition-opacity duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                    onClick={() => setMenuOpen(false)}
                ></div>
            </div>
        </div>
    )
}

export default Navbar