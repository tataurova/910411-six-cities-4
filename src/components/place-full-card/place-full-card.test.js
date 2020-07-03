import React from "react";
import renderer from "react-test-renderer";
import PlaceFullCard from "./place-full-card.jsx";
import {BrowserRouter} from "react-router-dom";
import offers from "../../mocks/offers.js";

describe(`<PlaceFullCard />`, () => {
  it(`Should PlaceFullCard render correctly`, () => {
    const cityOffers = offers[`Cologne`];
    const tree = renderer
      .create(
          <BrowserRouter>
            <PlaceFullCard
              offers={cityOffers}
              id = {`1`}
              onPlaceCardHeaderClick = {() => {}}
              onPlaceCardHover = {() => {}}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
