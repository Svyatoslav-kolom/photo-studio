import React from 'react';
import './Loader.scss'; // Стили загрузчика

export const Loader: React.FC = () => {
  return (
    <div className="loader">
      <div className="loader__logo">
        <img src="images/icons/on-photo.svg" alt="logo" />
      </div>

      <div className="loader__camera">
        <img src="images/header/header-camera-mobile.svg" alt="logo" />
      </div>

      <div className="loader__flash" />
    </div>
  );
};
