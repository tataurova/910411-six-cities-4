import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {PLACES_COUNT} from "../../const.js";
import offers from "../../mocks/offers.js";

const handleHeaderClick = () => {};

describe(`<App />`, () => {
  it(`Render App`, () => {
    const tree = renderer
      .create(<App
        offers={offers}
        placeCount={PLACES_COUNT}
        handleHeaderClick={handleHeaderClick}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
