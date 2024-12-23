import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.scss";

export const Slider: React.FC<{ images: string[] }> = ({ images }) => {
  const swiperRef = useRef<SwiperType | null>(null);

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
        centeredSlides={true}
        slidesPerView={1} // На мобільних — один активний слайд
        spaceBetween={30} // Відстань між слайдами на мобільних
        onSwiper={(swiper: SwiperType) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          // Визначаємо налаштування для ширини екрана понад 768px
          768: {
            slidesPerView: 1, // Один слайд займає всю ширину
            spaceBetween: 0, // Без відступів між слайдами
          },
          0: {
            slidesPerView: 1.3, // На мобільних частково видно сусідні слайди
            spaceBetween: 5, // Відстань між слайдами
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
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
