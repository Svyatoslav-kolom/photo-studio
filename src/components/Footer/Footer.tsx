import { Form } from "../Form";
import "./Footer.scss";

export const Footer = () => {
  const menuItems = [
    { name: "Home", link: "#" },
    { name: "About", link: "#" },
    { name: "Portfolio", link: "#" },
    { name: "Price", link: "#" },
    { name: "Gift Certificate", link: "#" },
    { name: "Contact Us", link: "#" }
  ];

  return (
    <div className="footer container">
      <div className="footer__content">

        <div className="footer__content__top">
          <div className="footer__info">
            <div className="footer__title title">свяжитесь <br /> с нами</div>

            <p className="footer__description text">
              Мы подберем идеальный пакет услуг, а также проконсультируем вас по всем вопросам.
            </p>
          </div>

          <div className="footer__form">
            <Form />
          </div>
        </div>

        <div className="footer__contact">
          <p className="footer__phone">
            <img src="images/icons/Phone-black.svg" alt="phone" className="footer__icon" />
            +9 055 188 222 92
          </p>

          <p className="footer__instagram">
            <img src="images/icons/Instagram-black.svg" alt="instagram" className="footer__icon" />
            oksana_nikolaevna.ph
          </p>
        </div>
      </div>

      <div className="footer__bottom">
        <nav>
          <ul className="footer__list">
            {menuItems.map((item, index) => (
              <li key={index} className="footer__list__item">
                <a href={item.link} className="footer__link">{item.name}</a><p>/</p>

              </li>
            ))}
          </ul>
        </nav>
        <p>2024 - Copyright All Right Reserved</p>
      </div>
    </div>
  );
};
