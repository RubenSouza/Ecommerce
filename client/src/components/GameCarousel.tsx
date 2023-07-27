// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules

//@ts-expect-error - Swiper is not a module

import { Pagination, Navigation } from "swiper";
export default function GameCarousel(props: any) {
  const { navId } = props;
  const handleSlideChange = (swiper: any) => {
    props.onSlideChange(swiper);
  };
  return (
    <div className="w-full h-full overflow-visible">
      <Swiper
        pagination={{
          clickable: true,
        }}
        slidesPerView={2}
        spaceBetween={10}
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
            slidesPerView: 3,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        onSlideChange={handleSlideChange}
        navigation={{
          prevEl: `.${navId}.swiper-button-prev`,
          nextEl: `.${navId}.swiper-button-next`,
        }}
        modules={[Pagination, Navigation]}
        className={`myGameSwiper ${navId}`}
      >
        {props.slides.map(
          (
            slide: any,
            index: number // slides.slides is the array of slides
          ) => (
            <SwiperSlide key={index} className="">
              {slide}
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
}
