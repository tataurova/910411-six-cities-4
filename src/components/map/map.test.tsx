import React from "react";
import renderer from "react-test-renderer";
import Map from "./map";
import offers from "../../mocks/offers";

describe(`<Map />`, () => {
  it(`Should Map render correctly`, () => {
    const activeCity = `Cologne`;
    const cityOffers = offers;
    const hoveredCardId = 1;
    const tree = renderer
      .create(
          <Map
            offers={cityOffers}
            activeCity = {activeCity}
            hoveredCardId={hoveredCardId}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
