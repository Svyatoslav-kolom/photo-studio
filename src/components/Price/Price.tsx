import PricingCard from "../PricingCard/PricingCard";
import './Price.scss';
import { cardsData } from "./cardData";
import { Swiper, SwiperSlide } from "swiper/react";

export const Price = () => {
  return (
    <div className="price container">
      <div className="price__top">
        <h1 className="price__title title header-title">цены</h1>
        <div className="text price__text">
          Мы предлагаем гибкие пакеты услуг, которые подойдут для любых ваших потребностей —
          от портретных фотосессий до масштабных съёмок.
          Каждый пакет включает профессиональную съёмку, продуманную до мелочей,
          чтобы вы получили не только красивые кадры, но и приятный процесс работы.
        </div>
      </div>

      <div className="price__cards">
        <PricingCard {...cardsData[0]} />
        <PricingCard {...cardsData[1]} />
        <PricingCard {...cardsData[2]} />
      </div>

      <div className="price__cards--mobile">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
        >
          {cardsData.map((card, index) => (
            <SwiperSlide key={index}>
              <PricingCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
