import { useEffect, useState } from "react";

// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules

//@ts-expect-error - Swiper is not a module
import { Autoplay, Pagination, Navigation } from "swiper";

export default function HomeCarousel(props: any) {
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
          delay: 9500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={isMobile ? false : true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {props.slides.map(
          (
            slide: any,
            index: number // slides.slides is the array of slides
          ) => (
            <SwiperSlide key={index}>{slide}</SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
}
