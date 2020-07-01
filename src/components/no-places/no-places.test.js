import React from "react";
import renderer from "react-test-renderer";
import NoPlaces from "./no-places.jsx";

describe(`<NoPlaces />`, () => {
  it(`Should NoPlaces render correctly`, () => {
    const activeCity = `Paris`;
    const tree = renderer
      .create(
          <NoPlaces
            activeCity={activeCity}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
