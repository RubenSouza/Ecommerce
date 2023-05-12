// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules

import { Pagination } from "swiper";

export default function GameCarousel(props: any) {
  return (
    <div className="w-full h-full">
      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
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
