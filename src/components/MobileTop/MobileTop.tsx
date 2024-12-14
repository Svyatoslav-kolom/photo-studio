/* eslint-disable jsx-a11y/anchor-has-content */
// src/components/HeaderMobileTop.tsx
import React from 'react';
import './MobileTop.scss';
import { animateScroll as scroll } from "react-scroll";

interface MobileTopProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  onClose?: () => void;
}

export const MobileTop: React.FC<MobileTopProps> = ({ isMenuOpen, toggleMenu, onClose }) => {
  return (
    <div className="header-mobile__top">
      <button
        onClick={() => {
          scroll.scrollToTop();
          if (isMenuOpen && onClose) {
            onClose();
          }
        }}
        className="header-mobile__logo"
      >
        <img
          src="images/icons/on-photo.svg"
          alt="On-Photo"
          className="header-mobile__logo"
        />
      </button>

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
