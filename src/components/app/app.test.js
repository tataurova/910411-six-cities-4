import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const PLACES_COUNT = 312;

const PLACE_NAMES = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`,
];

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      placesCount={PLACES_COUNT}
      placeNames={PLACE_NAMES}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
