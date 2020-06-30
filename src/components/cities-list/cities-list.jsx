import React from "react";
import PropTypes from "prop-types";

const CitiesList = ({cities, activeCity, onMenuClick}) => {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li key={city} className="locations__item">
          <a className={`locations__item-link tabs__item ${activeCity === city ? `tabs__item--active` : ``}`} href="#">
            <span data-city={`${city}`} onClick={(evt) => onMenuClick(evt.target.dataset.city)}>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CitiesList;

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeCity: PropTypes.string.isRequired,
  onMenuClick: PropTypes.func.isRequired,
};
