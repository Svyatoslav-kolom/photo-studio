/* eslint-disable jsx-a11y/anchor-has-content */
import './HeaderMenu.scss';
import { menuList } from './MenuList';

export const HeaderMenu = () => {
  return (
    <div className="header-menu">
      <div className="header-menu__icon-wrapper">
        <img
          src="images/header-top/header-top-menu-On-Photo.svg"
          alt="On-Photo"
        />
      </div>

      <nav>
        <ul className="menu header-menu__list">
          {menuList.map((menuItem, index) => (
            <li key={index}>
              <a href={menuItem.link} className="menu__item">
                {menuItem.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="social-media">
          <a
            href="/instagram"
            className="social-media__icon social-media__instagram"
            aria-label="Instagram"
          />
          <a
            href="/telegram"
            className="social-media__icon social-media__telegram"
            aria-label="Telegram"
          />
        </div>
      </nav>
    </div>
  );
};
