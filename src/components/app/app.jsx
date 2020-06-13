import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = ({placesCount, placeNames}) => {
  return <Main
    placesCount = {placesCount}
    placeNames = {placeNames}
  />;
};

export default App;

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  placeNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};
