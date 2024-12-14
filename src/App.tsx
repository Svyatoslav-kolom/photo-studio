import './App.scss';
import { useState, useEffect, useRef } from 'react';
import { HeaderMobile } from './components/HeaderMobile';
import { ChooseUs } from './components/ChooseUs';
import { Guarantee } from './components/Guarantee';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Recommendations } from './components/Recommendations';
import { Price } from './components/Price';
import { Certificates } from './components/\u0421ertificates';
import { Footer } from './components/Footer';
import { HeaderMenu } from './components/HeaderMenu';
import { useNormalModeObserver } from './App-menu-logic';
import { MobileMenu } from './components/MobileMenu';
import { Header } from './components/Header';
import { Loader } from './components/Loader';
import './styles/titles.scss';

function App() {
  const recommendationsRef = useRef<HTMLDivElement>(null);
  const isNormalMode = useNormalModeObserver(recommendationsRef);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false); // Загрузчик будет работать только на телефоне

  // Определение мобильного режима
  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 767.98;
      setIsMobile(isMobileView);

      // Показывать загрузчик только при первом входе в мобильный режим
      if (isMobileView) {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 3000); // Скрыть через 3 секунды
        return () => clearTimeout(timer);
      }
    };

    handleResize(); // Установить начальное значение
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Логика для открытия/закрытия меню
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#menu') {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    // Проверить начальное состояние
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Функция для закрытия меню (сброс хэша)
  const closeMenu = () => {
    setIsMenuOpen(false);
    window.history.pushState('', document.title, window.location.pathname);
  };

  return (
    <div className="App">
      {isMobile && isLoading && <Loader />}
      <header className={`App__header ${isLoading ? 'App__header--loading' : ''}`}>
        {isMobile ? (
          <HeaderMobile isMenuOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
        ) : (
          <Header />
        )}
        <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
      </header>

      <div
        className={`App__menu ${isNormalMode ? 'App__menu--normal' : ''} ${
          isLoading ? 'App__menu--loading' : ''
        }`}
      >
        <HeaderMenu />
      </div>

      {!isLoading && (
        <main>
          <ChooseUs />
          <Guarantee />
          <Services />
          <Portfolio />
          <Recommendations ref={recommendationsRef} />
          <Price />
          <Certificates />
        </main>
      )}

      {!isLoading && (
        <footer className="App__footer">
          <Footer />
        </footer>
      )}
    </div>
  );
}

export default App;
