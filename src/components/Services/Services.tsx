import './Services.scss';
import { ServicesBottom } from './ServicesBottom/ServicesBottom';
import { ServicesInfo } from './ServicesInfo';
import { ServicesTitle } from './ServicesTitle';
import { Element } from 'react-scroll';

export const Services = () => {
  return (
    <Element name='services' className="services container">
      <div className="services__services-title">
        <ServicesTitle />
      </div>

      <div className="services__wrapper">
        <div className="services__photo">
          <div className="services__photo__coment" >
            <p className='small-text'>на фото:</p>
            <span className='text'>Фотограф студии Оксана Гафарова</span>
          </div>
        </div>

        <div className="services__services-info">
          <ServicesInfo />
        </div>
      </div>

      <div className="services__services-bottom">
        <ServicesBottom />
      </div>
    </Element>
  )
}
