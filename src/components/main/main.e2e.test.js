import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

const PLACES_COUNT = 312;

const PLACE_NAMES = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`,
];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`The header click handler should be called`, () => {
  const onHeaderClick = jest.fn();

  const main = shallow(
      <Main
        placesCount={PLACES_COUNT}
        placeNames={PLACE_NAMES}
        onHeaderClick={onHeaderClick}
      />
  );

  const headerElements = main.find(`.place-card__name`);
  headerElements.forEach((header) => header.props().onClick());

  expect(onHeaderClick.mock.calls.length).toBe(headerElements.length);

});

