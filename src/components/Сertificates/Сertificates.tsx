import './Сertificates.scss';
import { Element } from 'react-scroll';
import { СertificatesSlider } from './СertificatesSlider';
import { useEffect, useState } from 'react';

const certificatesMobile = [
  'images/sertificates/desktop/mini.svg',
  'images/sertificates/mobile/standart.svg',
  'images/sertificates/mobile/maxi.svg',
];

const certificatesDesktop = [
  'images/sertificates/desktop/mini.svg',
  'images/sertificates/desktop/standart.svg',
  'images/sertificates/desktop/maxi.svg',
];

export const Certificates = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Определяем начальное состояние

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Переключение состояния при изменении размера экрана
    };

    window.addEventListener('resize', handleResize); // Слушаем изменение размера окна
    return () => window.removeEventListener('resize', handleResize); // Убираем слушатель при размонтировании
  }, []);

  const certificates = isMobile ? certificatesMobile : certificatesDesktop; // Выбор массива изображений

  return (
    <Element name="certificat" className="certificates container">
      <div className="certificates__top">
        <h1 className="certificates__title title">Ищете идеальный подарок?</h1>
        <p className="certificates__text text">
          Порадуйте своих близких подарочным сертификатом на профессиональную фотосессию!
          Это замечательный вариант не только для семьи и друзей — такой подарок подойдет каждому.
          Будь то особый случай или просто знак внимания, сертификат на фотосессию станет уникальным способом
          сохранить воспоминания и сделать их незабываемыми. Подарите возможность запечатлеть прекрасные моменты!
        </p>
      </div>
      <div className="certificates__slider">
        <СertificatesSlider images={certificates} /> {/* Передаём массив изображений */}
      </div>
    </Element>
  );
};
