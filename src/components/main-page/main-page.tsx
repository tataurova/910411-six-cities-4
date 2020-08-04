import React from 'react';
import PropTypes from 'prop-types';
import {placeCardType} from "../../../types.js";
import Header from "../header/header.tsx";
import Main from "../main/main.tsx";

const MainPage = ({cityOffers, cities, city, onMenuClick, isFetching, error, authorizationStatus, user}) => {
  return (
    <>
      <div className="page page--gray page--main">
        <Header
          authorizationStatus = {authorizationStatus}
          user = {user}
          error = {error}
        />
        <Main
          offers = {cityOffers}
          cities = {cities}
          city = {city}
          onMenuClick = {onMenuClick}
          isFetching = {isFetching}
          error = {error}
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
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};
