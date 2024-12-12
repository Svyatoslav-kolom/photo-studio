import React from "react";
import { infoItem } from "../../../utils/types/infoItem";
import "./InfoBlock.scss";

export const InfoBlock: React.FC<infoItem> = ({ imgUrl, title, subTitle, description }) => {
  return (
    <div className="info-block">
      <div className="info-block__top">
        <div
          className="info-block__img"
          style={{ backgroundImage: `url(${imgUrl})` }}
        />
        <div className="info-block__title__wrapper">
          <h2 className="info-block__title title title--H2">{title}</h2>
          <h2 className="info-block__title title title--H2">{subTitle}</h2>
        </div>
      </div>
      <div className="info-block__description text">{description}</div>
    </div>
  );
};