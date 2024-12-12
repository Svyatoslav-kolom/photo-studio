import { photoSessions, photoZones, locations, photoTours } from './InfoLists';
import './ServicesInfo.scss';

export const ServicesInfo = () => {
  return (
    <div className="services-info">
      <div className="services-info__photo-sessions">

        <div className="services-info__photo-sessions__item">
          <h2 className="title title--H2">Фотосессии:</h2>

          <nav>
            <ul className="services-info__list">
              {photoSessions.map((item, index) => (
                <li
                  key={index}
                  className="
                    services-info__item 
                    text 
                    text--uppercase"
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="services-info__photo-sessions__item">
          <h2 className="title title--H2">Фотозоны:</h2>

          <nav>
            <ul className="services-info__list">
              {photoZones.map((item, index) => (
                <li
                  key={index}
                  className=" text text--uppercase"
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="services-info__outdor-photos">
        <h2 className="title title--H2">
          Выездные фотосессии
        </h2>

        <nav>
          <ul className="services-info__list">
            {locations.map((item, index) => (
              <li
                key={index}
                className="text text--uppercase"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </nav>

      </div>

      <div className="services-info__photo">
        <div className="services-info__photo__coment" >
          <p className='small-text'>на фото:</p>
          <span className='text'>Фотограф студии Оксана Гафарова</span>
        </div>
      </div>

      <div className="services-info__photo-tours">
        <h2 className="title title--H2">
          2-дневные фототуры:
        </h2>

        <nav>
          <ul className="services-info__photo-tours__list">
            {photoTours.map((item, index) => (
              <li key={index} className="services-info__photo-tours__item">
                <span className='text text--uppercase'>
                  {item.title}
                </span>
                <span className='text'>
                  {item.description}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="services-info__youtube">
        <h2 className="title title--H2">
          Видео для YouTube:
        </h2>

        <span className='text text--uppercase'>
          Съемка и монтаж
        </span>
      </div>
    </div>
  )
}
