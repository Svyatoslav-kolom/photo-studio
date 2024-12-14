import './Header.scss';

export const Header = () => {
  return (
    <div className="header-top container">
      <h1 className="header-top__title header-title title">
        Профессиональная <br />
        фото и видеосъемка
      </h1>

      <div className="header-top__camera-wrapper">
        <img
          src="images/header/header-camera.svg"
          alt=""
          className="header-top__camera"
        />
      </div>
      
      <div className="comment small-text">
        на фото: <br />
        Фотограф студии Оксана Гафарова
      </div>
    </div>
  );
};
