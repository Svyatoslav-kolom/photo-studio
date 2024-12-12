import './ServicesTitle.scss';

export const ServicesTitle = () => {
  return (
    <div className="services-title">

      <h1 className="services-title__title title">услуги</h1>

      <div className="services-title__description">
        <div className="services-title__description__text text">
          Команда опытных фотографов и видеографов, работая на передовом оборудовании,
          создаёт уникальные визуальные решения для бизнеса, семей и частных клиентов.
          А так же может сопровождать ваши мероприятия.
        </div>

        <div className="services-title__details">
          Подробнее
          <button className='details-button' />
        </div>
      </div>

    </div>
  )
}