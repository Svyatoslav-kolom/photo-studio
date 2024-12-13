import './Form.scss';
import { useState } from 'react';
import { sendTelegramMessage } from '../../utils/api/api';

export const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPhone(value);

    if (value.trim() === '') {
      setIsPhoneValid(true);
      return;
    }

    const phoneRegex = /^[+]?[\d\s\-()]{7,15}$/; // Пример: +380 (50) 123-45-67
    setIsPhoneValid(phoneRegex.test(value));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (phone.trim() === '' || name.trim() === '') {
      alert('Все поля должны быть заполнены');
      return;
    }

    if (!isPhoneValid) {
      alert('Введите корректный номер телефона');
      return;
    }

    try {
      setIsSubmitting(true);
      await sendTelegramMessage(phone, name);
      alert('Данные успешно отправлены!');
      setName('');
      setPhone('');
    } catch (error: any) {
      alert('Произошла ошибка: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>

        <div className="form__field">
          <input
            type="text"
            id="name"
            className="form__input"
            placeholder="Ваше имя"
            value={name}
            onChange={handleNameChange}
          />
        </div>

        <div className="form__field">
          <input
            type="tel"
            id="phone"
            className={`form__input ${!isPhoneValid ? 'form__input--error' : ''}`}
            placeholder="Телефон"
            value={phone}
            onChange={handlePhoneChange}
          />
          {!isPhoneValid && phone.trim() !== '' && (
            <div className="form__error">
              Неверный формат телефона
            </div>
          )}
        </div>

        <button
          type="submit"
          className="form__button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Отправка...' : 'Отправить'}
          <img
            src="images/icons/email.svg"
            alt="email"
            className="form__button__icon"
          />
        </button>
      </form>
    </div>
  );
};
