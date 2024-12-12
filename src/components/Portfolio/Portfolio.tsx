import { Slider } from '../Slider/Slider';
import './Portfolio.scss';

const images = [
  'images/portfolio-images/portfolio-image-1.svg',
  'images/portfolio-images/portfolio-image-2.svg',
  'images/portfolio-images/portfolio-image-3.svg',
];

export const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio__top container">
        <h1 className="portfolio__title header-title title">Портфолио</h1>

        <div className="portfolio__top__text">
          <p className="text">
            Здесь вы можете ознакомиться с нашим портфолио
            и оценить разнообразие наших работ.
            Мы гордимся тем, что каждая съёмка уникальна и отражает стиль,
            атмосферу и пожелания наших клиентов.
          </p>

          <p className="text">
            Категории: <br />
            Портреты, свадьбы, love story, природа, бизнес-съёмки,
            детские и семейные фотосессии.
          </p>

        </div>
      </div>
      <div className="portfolio__slider">
        <Slider images={images} />;
      </div>
    </div>
  )
}