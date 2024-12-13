import './CircleToBook.scss';
import { IconsColors } from '../../utils/types/icons-colors';
import { Link } from 'react-scroll';

type Props = {
  color: IconsColors;
};

export const CircleToBook: React.FC<Props> = ({ color }) => {
  // Создаем объект стилей
  const circleStyles = {
    border: `2px solid ${color === 'black' ? '#000' : '#F0F0F0'}`,
  };

  return (
    <Link
      to='contact'
      smooth={true}
      duration={500}
      className="circle"
      style={circleStyles}
    >
      <div className="circle__content">
        <img src={`images/oreder-a-shoot/${color}/camera-icon.svg`} alt="camera" />
        <img src={`images/oreder-a-shoot/${color}/order-inscription.svg`} alt="inscription" />
      </div>
    </Link>
  );
};
