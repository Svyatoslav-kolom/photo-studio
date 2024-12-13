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
    if ((e.target as HTMLElement).classList.contains('mobile-menu')) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

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
        <MobileTop isMenuOpen={isOpen} toggleMenu={onClose} onClose={onClose} />
        <div className="mobile-menu__menu">
          <HeaderMenu onClose={onClose} />
        </div>
      </div>
    </div>
  );
};
