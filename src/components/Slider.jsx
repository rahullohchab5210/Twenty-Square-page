"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { SLIDER_DATA } from "@/utils/helper";

const Slider = () => {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{
                clickable: true,
            }}
        >
            {SLIDER_DATA.map((item, index) => (
                <SwiperSlide key={index}>
                    <Image
                        src={item.src}
                        width={707}
                        height={707}
                        className="w-full h-auto"
                        alt="slide-3"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;