import { useEffect, useState } from "react";
import ModalImage from "react-modal-image";

// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules

import { Pagination } from "swiper";
import { AiOutlineClose } from "react-icons/ai";

export default function GalleryCarousel(props: any) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpened, setIsOpened] = useState(false);

  const slideOpen = (index: number) => {
    setActiveIndex(index);
    setIsOpened(true);
  };

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
            <SwiperSlide key={index} onClick={() => slideOpen(index)}>
              {slide}
            </SwiperSlide>
          )
        )}
      </Swiper>
      {isOpened && (
        <div className="w-full h-full fixed top-0 right-0 left-0 bottom-0 z-20">
          <div
            className="w-full h-full bg-[#000000]/80"
            onClick={() => setIsOpened(false)}
          >
            <div className="w-full h-full flex justify-center items-center">
              {props.slides[activeIndex]}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
