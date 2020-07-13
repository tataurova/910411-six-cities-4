import React from "react";
import renderer from "react-test-renderer";
import SortedPlaceList from "./sorted-place-list.jsx";
import offers from "../../mocks/offers.js";
import {BrowserRouter} from "react-router-dom";
import {SortType} from "../../const.js";

describe(`<SortedPlaceList />`, () => {
  it(`Should PlaceList render correctly`, () => {
    const cityOffers = offers[`Amsterdam`];
    const tree = renderer
      .create(
          <BrowserRouter>
            <SortedPlaceList
              offers={cityOffers}
              city = {`Amsterdam`}
              state = {SortType.DEFAULT}
              onChangeItem={() => {}}
              onPlaceCardHover={() => {}}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
