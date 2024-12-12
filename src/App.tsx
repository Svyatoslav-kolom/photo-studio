import './App.scss';
import { useState, useEffect, useRef } from 'react';
import { HeaderMobile } from './components/HeaderMobile';
import { ChooseUs } from './components/ChooseUs';
import { Guarantee } from './components/Guarantee';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Recommendations } from './components/Recommendations';
import { Price } from './components/Price';
import { Certificates } from './components/Сertificates';
import { Footer } from './components/Footer';
import { HeaderMenu } from './components/HeaderMenu';
import { useNormalModeObserver } from './App-menu-logic';
import { MobileMenu } from './components/MobileMenu';
import { Header } from './components/Header';
import './styles/titles.scss'

function App() {
  const recommendationsRef = useRef<HTMLDivElement>(null);
  const isNormalMode = useNormalModeObserver(recommendationsRef);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Определение мобильного режима
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767.98);
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
    window.history.pushState('', document.title, window.location.pathname); // Убираем #menu из URL
  };

  return (
    <div className="App">
      <header className="App__header">
        {isMobile ?
          <HeaderMobile isMenuOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
          :
          <Header />
        }

        <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />

      </header>

      <div className={`App__menu ${isNormalMode ? 'App__menu--normal' : ''}`}>
        <HeaderMenu />
      </div>

      <main>
        <ChooseUs />
        <Guarantee />
        <Services />
        <Portfolio />
        <Recommendations ref={recommendationsRef} />
        <Price />
        <Certificates />
      </main>

      <footer className="App__footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
