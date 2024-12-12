import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.scss"; // Подключение стилей

export const Slider: React.FC<{ images: string[] }> = ({ images }) => {
  const swiperRef = useRef<SwiperType | null>(null); // Храним ссылку на экземпляр Swiper с правильным типом

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="slider">
      <button
        className="slider__button slider__button--prev"
        onClick={handlePrevClick}
      />

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        initialSlide={1}
        // loop={true}
        centeredSlides={true}
        slidesPerView={3}
        onSwiper={(swiper: SwiperType) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          768: {
            slidesPerView: 3, // На планшетах и выше показываем 3 слайда
          },
          0: {
            slidesPerView: 1, // На мобильных показываем 1 слайд
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="slider__button slider__button--next"
        onClick={handleNextClick}
      />
    </div>
  );
};
