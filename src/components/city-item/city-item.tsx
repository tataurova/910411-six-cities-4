import * as React from 'react';

interface Props {
  city: string;
  isActive: boolean;
  onMenuClick: (city: string) => void;
}

const CityItem: React.FunctionComponent<Props> = ({city, isActive, onMenuClick}: Props) => {

  return (
    <li key={city} className="locations__item">
      <a className={`locations__item-link tabs__item ${isActive ? `tabs__item--active` : ``}`} href="#">
        <span data-city={`${city}`} onClick={(evt) => onMenuClick((evt.target as HTMLElement).dataset.city)}>{city}</span>
      </a>
    </li>
  );
};

export default CityItem;
