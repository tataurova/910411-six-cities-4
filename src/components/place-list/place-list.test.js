import React from "react";
import renderer from "react-test-renderer";
import PlaceList from "./place-list.js";
import offers from "../../mocks/offers.js";
import {BrowserRouter} from "react-router-dom";

describe(`<PlaceList />`, () => {
  it(`Should PlaceList render correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <PlaceList
              offers={offers}
              onHover={() => {}}
              onPlaceCardHeaderClick={() => {}}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
