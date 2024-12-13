import './Сertificates.scss';
import { Element } from 'react-scroll';
import { СertificatesSlider } from './СertificatesSlider';

const certificates = [
  'images/sertificates/mini.svg',
  'images/sertificates/standart.svg',
  'images/sertificates/maxi.svg',
];

export const Certificates = () => {
  return (
    <Element name='certificat' className="certificates container">
      <div className="certificates__top">
        <h1 className="certificates__title title">
          Ищете идеальный подарок?
        </h1>

        <p className="certificates__text text">
          Порадуйте своих близких подарочным сертификатом на профессиональную фотосессию!
          Это замечательный вариант не только для семьи и друзей — такой подарок подойдет каждому.
          Будь то особый случай или просто знак внимания, сертификат на фотосессию станет уникальным способом
          сохранить воспоминания и сделать их незабываемыми. Подарите возможность запечатлеть прекрасные моменты!
        </p>
      </div>

      <div className="certificates__slider">
        <СertificatesSlider images={certificates} />
      </div>

    </Element>
  );
};
