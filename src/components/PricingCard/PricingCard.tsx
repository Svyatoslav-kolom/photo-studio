import React from "react";
import "./PricingCard.scss";
import { PricingCardType } from "../../utils/types/PricingCardType";
import { Link } from "react-scroll";

const PricingCard: React.FC<PricingCardType> = ({
  title,
  price,
  priceDetails,
  features,
  additionalServices,
  buttonText,
}) => {
  return (
    <div className="pricing-card">
      <h3 className="pricing-card__title">
        {title}
      </h3>

      <div className="pricing-card__price-wrapper">
        <div className="pricing-card__price">
          {price}
        </div>

        <div className="pricing-card__details">
          {priceDetails}
        </div>
      </div>

      <div className="pricing-card__info">
        <ul className="pricing-card__features">
          {features.map((feature, index) => (
            <li key={index} className="pricing-card__feature text">
              <div className="pricing-card__icon">
                <img src="images/icons/check.svg" alt="pricing-card__icon" />
              </div>
              
              {feature}
            </li>
          ))}
        </ul>

        <ul className="pricing-card__additional-services">
          <h4 className="text">{additionalServices.title}</h4>
          {additionalServices.items.map((item, index) => (
            <li className="medium-text" key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <Link
        to='contact'
        smooth={true}
        duration={500}
        className='pricing-card__button medium-text'
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default PricingCard;
