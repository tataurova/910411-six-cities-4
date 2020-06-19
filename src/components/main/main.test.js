import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {PLACES_COUNT} from "../../const.js";
import offers from "../../mocks/offers.js";

describe(`<Main />`, () => {
  it(`Should Main render correctly`, () => {
    const tree = renderer
      .create(<Main
        offers={offers}
        placeCount={PLACES_COUNT}
        onPlaceCardHeaderClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
