import React from "react";
import PropTypes from "prop-types";

const NoPlaces = ({activeCity, isLoading}) => {
  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">{isLoading || `No places to stay available`}</b>
          <p className="cities__status-description">{isLoading ? `Loading...` : `We could not find any property available at the moment in ${activeCity}`}</p>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </div>
  );
};

export default NoPlaces;

NoPlaces.propTypes = {
  activeCity: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
