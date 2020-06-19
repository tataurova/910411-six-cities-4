import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const handleHeaderClick = () => {};

const App = ({offers, placeCount}) => {
  return <Main
    offers = {offers}
    placeCount = {placeCount}
    handleHeaderClick = {handleHeaderClick}
  />;
};

export default App;

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  placeCount: PropTypes.number.isRequired,
};
