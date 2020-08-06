import React from "react";
import renderer from "react-test-renderer";
import NoPlaces from "./no-places";

describe(`<NoPlaces />`, () => {
  it(`Should NoPlaces render correctly`, () => {
    const activeCity = `Paris`;
    const tree = renderer
      .create(
          <NoPlaces
            activeCity={activeCity}
            isFetching = {false}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Should NoPlaces render correctly while fetching`, () => {
    const activeCity = `Paris`;
    const tree = renderer
      .create(
          <NoPlaces
            activeCity={activeCity}
            isFetching = {true}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
