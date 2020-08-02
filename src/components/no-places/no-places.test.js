import React from "react";
import renderer from "react-test-renderer";
import NoPlaces from "./no-places.jsx";
import {DEFAULT_ERROR_STATUS, Error} from "../../const.js";

describe(`<NoPlaces />`, () => {
  it(`Should NoPlaces render correctly`, () => {
    const activeCity = `Paris`;
    const tree = renderer
      .create(
          <NoPlaces
            activeCity={activeCity}
            isFetching = {false}
            error = {DEFAULT_ERROR_STATUS}
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
            error = {Error.BAD_REQUEST}
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
            error = {DEFAULT_ERROR_STATUS}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
