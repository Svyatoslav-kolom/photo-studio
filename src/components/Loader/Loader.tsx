import React, { useState, useEffect } from 'react';
import './Loader.scss';

export const Loader: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = '';
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="loader">
      <div className="loader__logo">
        <img src="images/icons/on-photo.svg" alt="logo" />
      </div>
    </div>
  );
};
