import React from "react";
import "./PricingCard.scss";
import { PricingCardType } from "../../utils/types/PricingCardType";

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
              <span className="pricing-card__icon">✓</span> {feature}
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

      <button className="pricing-card__button medium-text">
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
