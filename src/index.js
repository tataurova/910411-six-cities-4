import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const settings = {
  places: 312,
};

const init = () => {
  ReactDOM.render(
      <App
        {...settings}
      />,
      document.querySelector(`#root`)
  );
};

init();
