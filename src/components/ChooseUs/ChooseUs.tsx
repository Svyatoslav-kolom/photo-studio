import { InfoBlock } from './InfoBlock';
import { infoItems } from './InfoItems';
import './ChooseUs.scss';

export const ChooseUs = () => {
  return (
    <div className="choose-us container">
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
    </div>
  )
}