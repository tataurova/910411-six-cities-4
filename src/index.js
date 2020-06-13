import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const PLACES_COUNT = 312;

const PLACE_NAMES = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`,
];

const init = () => {
  ReactDOM.render(
      <App
        placesCount = {PLACES_COUNT}
        placeNames = {PLACE_NAMES}
      />,
      document.querySelector(`#root`)
  );
};

init();
