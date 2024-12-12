import './Form.scss';

export const Form = () => {
  return (
    <div className="form-container">
      <form className="form">

        <div className="form__field">
          <input
            type="text"
            id="name"
            className="form__input"
            placeholder="Ваше имя"
          />
        </div>

        <div className="form__field">
          <input
            type="tel"
            id="phone"
            className="form__input"
            placeholder="Телефон"
          />
        </div>

        <button type="submit" className="form__button">
          Отправить
          <img
            src="images/icons/email.svg"
            alt="email"
            className='form__button__icon'
          />
        </button>
      </form>
    </div>
  );
};
