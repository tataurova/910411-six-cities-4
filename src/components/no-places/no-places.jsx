import React from "react";
import PropTypes from "prop-types";
import {MIN_ERROR_CODE} from "../../const.js";

const NoPlaces = ({activeCity, isFetching, error}) => {
  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          {error > MIN_ERROR_CODE
            ? <p className="cities__status-description">Something went wrong, please, try again later</p>
            : <><b className="cities__status">{isFetching || `No places to stay available`}</b>
            <p className="cities__status-description">{isFetching ? `Loading...` : `We could not find any property available at the moment in ${activeCity}`}
            </p></>}
        </div>
      </section>
      <div className="cities__right-section"></div>
    </div>
  );
};

export default NoPlaces;

NoPlaces.propTypes = {
  activeCity: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.number.isRequired,
};
