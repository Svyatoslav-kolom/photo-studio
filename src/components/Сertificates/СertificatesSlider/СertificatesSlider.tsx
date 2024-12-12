import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './СertificatesSlider.scss';

export const СertificatesSlider: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <div className="certificates-slider">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        style={{ width: '100%' }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
            className='certificates-slider__img'
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ width: '99%', height: 'auto' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}