import React from "react";
import renderer from "react-test-renderer";
import PlaceListContainer from "./place-list-container.jsx";
import offers from "../../mocks/offers.js";
import {BrowserRouter} from "react-router-dom";

describe(`<SortedPlaceList />`, () => {
  it(`Should PlaceList render correctly`, () => {
    const cityOffers = offers[`Amsterdam`];
    const tree = renderer
      .create(
          <BrowserRouter>
            <PlaceListContainer
              offers={cityOffers}
              city = {`Amsterdam`}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
