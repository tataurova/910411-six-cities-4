import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const init = () => {
  const settings = {
    countPlaces: 312,
  };

  ReactDOM.render(
      <App
        countPlaces = {settings.countPlaces}
      />,
      document.querySelector(`#root`)
  );
};

init();
