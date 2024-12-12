/* eslint-disable jsx-a11y/anchor-has-content */
// src/components/HeaderMobileTop.tsx
import React from 'react';
import './MobileTop.scss';

interface MobileTopProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const MobileTop: React.FC<MobileTopProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className="header-mobile__top">
      <img
        src="images/header-top/header-top-menu-On-Photo.svg"
        alt="On-Photo"
        className="header-mobile__logo"
      />

      <a
        href="#menu"
        className={`header-mobile__menu ${isMenuOpen ? 'header-mobile__close' : ''}`}
        onClick={(e) => {
          e.preventDefault(); // Чтобы не прокручивало к якорю
          toggleMenu();
        }}
      />
    </div>
  );
};
