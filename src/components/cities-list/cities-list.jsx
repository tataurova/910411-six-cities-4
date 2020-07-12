import React from "react";
import PropTypes from "prop-types";

class CityItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {city, isActive, onMenuClick} = this.props;

    return (
      <li key={city} className="locations__item">
        <a className={`locations__item-link tabs__item ${isActive ? `tabs__item--active` : ``}`} href="#">
          <span data-city={`${city}`} onClick={(evt) => onMenuClick(evt.target.dataset.city)}>{city}</span>
        </a>
      </li>
    );
  }
}

// const CitiesList = ({cities, activeCity, onMenuClick}) => {
//   return (
//     <ul className="locations__list tabs__list">
//       {cities.map((city) => (
//         <li key={city} className="locations__item">
//           <a className={`locations__item-link tabs__item ${activeCity === city ? `tabs__item--active` : ``}`} href="#">
//             <span data-city={`${city}`} onClick={(evt) => onMenuClick(evt.target.dataset.city)}>{city}</span>
//           </a>
//         </li>
//       ))}
//     </ul>
//   );
// };

const cityIsActive = (city, activeCity) => {
  return city === activeCity;
};

const CitiesList = ({cities, activeCity, onMenuClick}) => {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (<CityItem
        key = {city}
        city = {city}
        isActive = {cityIsActive(city, activeCity)}
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
