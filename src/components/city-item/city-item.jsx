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

export default CityItem;

CityItem.propTypes = {
  city: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onMenuClick: PropTypes.func.isRequired,
};
