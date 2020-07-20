import React from 'react';
import PropTypes from 'prop-types';
import {placeCardType} from "../../../types.js";
import Header from "../header/header.jsx";
import Main from "../main/main.jsx";

const MainPage = ({cityOffers, cities, city, onMenuClick, isLoading}) => {
  return (
    <>
      <div className="page page--gray page--main">
        <Header />
        <Main
          offers = {cityOffers}
          cities = {cities}
          city = {city}
          onMenuClick = {onMenuClick}
          isLoading = {isLoading}
        />
      </div>
    </>
  );
};

export default MainPage;

MainPage.propTypes = {
  cityOffers: PropTypes.arrayOf(PropTypes.shape(placeCardType)).isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  city: PropTypes.string.isRequired,
  onMenuClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
