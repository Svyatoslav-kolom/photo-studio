import React, { useEffect } from 'react';
import { HeaderMenu } from "../HeaderMenu";
import './MobileMenu.scss';
import { MobileTop } from '../MobileTop';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Close the menu only if the click was outside the menu
    if ((e.target as HTMLElement).classList.contains('mobile-menu')) {
      onClose();
    }
  };

  // Use useEffect to add/remove the body class when the menu state changes
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  return (
    <div
      className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}
      onClick={handleBackdropClick}
    >
      <div className="mobile-menu__content">
        <MobileTop isMenuOpen={isOpen} toggleMenu={onClose} />
        <HeaderMenu />
      </div>
    </div>
  );
};