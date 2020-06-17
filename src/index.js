import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {PLACES_COUNT, PLACE_NAMES} from "./const.js";

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
