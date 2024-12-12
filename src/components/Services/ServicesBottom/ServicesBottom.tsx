import { CircleToBook } from "../../CircleToBook"
import './ServicesBottom.scss';

export const ServicesBottom = () => {
  return (
    <div className="services-bottom">
      <div className="services-bottom__info">
        <p className="services-bottom__info__text text">
          Мы сохраняем ваши важные моменты — свадьбы, дни рождения, корпоративы —
          превращая их в стильные и качественные кадры. Каждая съёмка уникальна,
          создаётся с учётом ваших желаний и обрабатывается профессионально,
          чтобы сэкономить ваше время
        </p>

        <p className="services-bottom__info__text text">
          Мы создаём семейные альбомы, видео для особых событий и визуальный контент для 
          блогеров и брендов, помогая делать каждую историю яркой и запоминающейся.
        </p>

        <p className="services-bottom__info__text text">
          Мы акцентируем внимание на качестве, скорости и надежности, 
          создавая профессиональный фото и видео контент
        </p>
      </div>

      <div className="services-bottom__circle">
        <CircleToBook color="black"/>
      </div>
    </div>
  )
}