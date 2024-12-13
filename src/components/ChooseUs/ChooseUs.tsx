import { InfoBlock } from './InfoBlock';
import { infoItems } from './InfoItems';
import { Element } from 'react-scroll';
import './ChooseUs.scss';

export const ChooseUs = () => {
  return (
    <Element name='about' className="choose-us container">
      <div className="choose-us__content">
        <h1 className='header-title title choose-us__title'>
          Почему <br />
          Выбирают <br />
          нас
        </h1>

        {infoItems.map((item, index) => (
          <InfoBlock
            key={index}
            {...item}
          />
        ))}
      </div>
    </Element>
  )
}