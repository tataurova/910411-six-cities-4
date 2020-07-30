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
            isFetching = {false}
            error = {-1}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Should NoPlaces render correctly with error`, () => {
    const activeCity = `Paris`;
    const tree = renderer
      .create(
          <NoPlaces
            activeCity={activeCity}
            isFetching = {false}
            error = {400}
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
            error = {-1}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
