import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import offers from "./mocks/offers.js";
import {PLACES_COUNT, MapSettings} from "./const.js";

const init = () => {
  ReactDOM.render(
      <App
        offers = {offers}
        placeCount = {PLACES_COUNT}
        mapSettings = {MapSettings}
      />,
      document.querySelector(`#root`)
  );
};

init();
