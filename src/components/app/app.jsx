import React from 'react';
import Main from '../main/main.jsx';

// eslint-disable-next-line react/prop-types
const App = ({places}) => {
  return <Main
    placesCount = {places}
  />;
};

export default App;
