/* eslint-disable jsx-a11y/anchor-has-content */
import './HeaderMenu.scss';
import { menuList } from './MenuList';
import { Link, animateScroll as scroll } from "react-scroll";

interface HeaderMenuProps {
  onClose?: () => void; // Сделали onClose необязательным
}

export const HeaderMenu: React.FC<HeaderMenuProps> = ({ onClose }) => {
  const handleMenuItemClick = () => {
    if (onClose) {
      onClose(); // Закрытие меню, если onClose передан
    }
  };

  return (
    <div className="header-menu">
      <button onClick={() => scroll.scrollToTop()} className="header-menu__icon-wrapper">
        <img
          src="images/header-top/header-top-menu-On-Photo.svg"
          alt="On-Photo"
        />
      </button>

      <nav>
        <ul className="menu header-menu__list">
          {menuList.map((menuItem, index) => (
            <li key={index}>
              <Link
                to={menuItem.link}
                smooth={true}
                duration={500}
                className="menu__item"
                onClick={handleMenuItemClick} // Закрытие меню при клике
              >
                {menuItem.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="social-media">
          <a
            href="https://www.instagram.com/oksana_nikolaevna.ph/"
            className="social-media__icon social-media__instagram"
            aria-label="Instagram"
          />
          <a
            href="https://t.me/nikolaevna_studio_bot"
            className="social-media__icon social-media__telegram"
            aria-label="Telegram"
          />
        </div>
      </nav>
    </div>
  );
};
