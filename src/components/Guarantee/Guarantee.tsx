import './Guarantee.scss';
import { CircleToBook } from '../CircleToBook';

export const Guarantee = () => {
  const infoTitles = [
    { title: "Атмосфера доверия и поддержки" },
    { title: "Качество на каждом этапе съёмки" },
    { title: "Индивидуальные решения для каждого клиента" },
    { title: "Профессионализм в любой съёмочной ситуации — от природы до студии" },
  ];

  return (
    <div className="guarantee container">
      <div className="guarantee__content">
        <h2 className='guarantee__title title title--H2'>
          Что мы гарантируем:
        </h2>

        <nav>
          <ul className='guarantee__list'>
            {infoTitles.map((item) => (
              <li
                key={item.title}
                className='guarantee__list__item text'>
                {item.title}
              </li>
            ))}
          </ul>
        </nav>

        <div className="guarantee__text">
          <div className="guarantee__text__item text">
            Выбирая нашу студию, вы получаете не просто фотографии,
            а незабываемые моменты, отражающие вашу индивидуальность.
          </div>

          <div className="guarantee__text__item text">
            Готовы создать идеальные кадры для вас?
            Забронируйте фотосессию прямо сейчас!
          </div>
        </div>

        <div
          className="guarantee__circle">
          <CircleToBook color='white' />
        </div>
      </div>
    </div>
  )
}