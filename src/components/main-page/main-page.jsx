import React from 'react';
import PropTypes from 'prop-types';
import {placeCardType} from "../../../types.js";
import Header from "../header/header.jsx";
import Main from "../main/main.jsx";

const MainPage = ({offers, cities, city, onMenuClick}) => {
  return (
    <>
      <div className="page page--gray page--main">
        <Header />
        <Main
          offers = {offers}
          cities = {cities}
          city = {city}
          onMenuClick = {onMenuClick}
        />
      </div>
    </>
  );
};

export default MainPage;

MainPage.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(placeCardType)).isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  city: PropTypes.string.isRequired,
  onMenuClick: PropTypes.func.isRequired,
};
