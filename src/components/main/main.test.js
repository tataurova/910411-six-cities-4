import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const PLACES_COUNT = 312;

const PLACE_NAMES = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`,
];

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      placesCount={PLACES_COUNT}
      placeNames={PLACE_NAMES}
      onHeaderClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
