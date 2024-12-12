import { useState, useEffect } from 'react';

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767.98);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767.98);
    };

    window.addEventListener('resize', handleResize);

    // Проверка ширины при монтировании
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
}
