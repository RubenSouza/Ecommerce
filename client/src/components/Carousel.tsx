import React, { useEffect, useState } from "react";

// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Thumb from "./Thumb";

export default function Carousel() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 800) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <div className="w-full h-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={isMobile ? false : true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Thumb />
        </SwiperSlide>
        <SwiperSlide>
          <Thumb />
        </SwiperSlide>
        <SwiperSlide>
          <Thumb />
        </SwiperSlide>
        <SwiperSlide>
          <Thumb />
        </SwiperSlide>
        <SwiperSlide>
          <Thumb />
        </SwiperSlide>
        <SwiperSlide>
          <Thumb />
        </SwiperSlide>
        <SwiperSlide>
          <Thumb />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
