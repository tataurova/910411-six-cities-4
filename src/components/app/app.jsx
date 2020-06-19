import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';
import {placeCardType} from "../../../types.js";

const onPlaceCardHeaderClick = () => {};

const App = ({offers, placeCount}) => {
  return <Main
    offers = {offers}
    placeCount = {placeCount}
    onPlaceCardHeaderClick = {onPlaceCardHeaderClick}
  />;
};

export default App;

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(placeCardType)).isRequired,
  placeCount: PropTypes.number.isRequired,
};

