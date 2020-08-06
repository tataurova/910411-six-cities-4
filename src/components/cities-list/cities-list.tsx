import * as React from 'react';
import CityItem from "../city-item/city-item";

const isActiveCity = (city, activeCity) => {
  return city === activeCity;
};

interface Props {
  cities: string[];
  activeCity: string;
  onMenuClick: (city: string) => void;
}

const CitiesList: React.FunctionComponent<Props> = ({cities, activeCity, onMenuClick}: Props) => {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (<CityItem
        key = {city}
        city = {city}
        isActive = {isActiveCity(city, activeCity)}
        onMenuClick={onMenuClick}
      />))}
    </ul>
  );
};

export default CitiesList;
