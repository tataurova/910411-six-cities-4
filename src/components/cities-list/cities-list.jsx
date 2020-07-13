import React from "react";
import PropTypes from "prop-types";
import CityItem from "../city-item/city-item.jsx";

const isActiveCity = (city, activeCity) => {
  return city === activeCity;
};

const CitiesList = ({cities, activeCity, onMenuClick}) => {
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

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeCity: PropTypes.string.isRequired,
  onMenuClick: PropTypes.func.isRequired,
};
