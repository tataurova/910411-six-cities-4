import React from 'react';
import Main from '../main/main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {countPlaces} = props;
  return <Main
    count = {countPlaces}
  />;
};

export default App;
