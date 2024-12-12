import { CircleToBook } from "../CircleToBook";
import './Recommendations.scss';
import React from 'react';

export const Recommendations = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="recommendations container" ref={ref}>
      <div className="recommendations__content">
        <div className="recommendations__info">
          <p className="text"> Хотите самовыразиться и не знаете как? Позвоните нам и закажите фотосъемку. </p>
          <p className="text"> Хотите удивить и впечатлить? Мы вам поможем. </p>
          <p className="text"> Не уверены? Проконсультируйтесь с нами, мы ответим на все вопросы и поможем определиться. </p>
          <p className="text"> Боитесь фотографироваться? Наши локации помогут вам расслабиться и почувствовать себя как дома. </p>
          <p className="text"> Доступные цены для всех. </p>
          <p className="text"> Мы работаем в первую очередь для клиентов! </p>
        </div>

        <div className="recommendations__circle-normal">
          <CircleToBook color="black" />
        </div>

        <div className="recommendations__circle-mobile">
          <CircleToBook color="white" />
        </div>
      </div>
      <div className="recommendations__img-container">
        <img
          className="recommendations__img"
          src="images/main-photo/Recommendations-main.svg"
          alt="Recommendations"
        />
      </div>
    </div>
  );
});
