// src/components/HeaderMobile.tsx
import React from 'react';
import './HeaderMobile.scss';
import { MobileTop } from '../MobileTop';


interface HeaderMobileProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const HeaderMobile: React.FC<HeaderMobileProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className="header-mobile">
      <MobileTop isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <h1 className="header-mobile__title header-title title">
        Профессиональная <br />
        фото и видеосъемка
      </h1>

      <img src="images/header-top/TEXT (1).svg" alt="" />
    </div>
  );
};
