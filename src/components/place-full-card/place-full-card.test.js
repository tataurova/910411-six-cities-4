import React from "react";
import renderer from "react-test-renderer";
import PlaceFullCard from "./place-full-card.jsx";
import {MapSettings} from "../../const.js";
import {BrowserRouter} from "react-router-dom";
import offers from "../../mocks/offers.js";

describe(`<PlaceFullCard />`, () => {
  it(`Should PlaceFullCard render correctly`, () => {
    const activeCity = `Amsterdam`;
    const cityOffers = offers[activeCity];
    const tree = renderer
      .create(
          <BrowserRouter>
            <PlaceFullCard
              offers={cityOffers}
              mapSettings={MapSettings}
              id = {`1`}
              activeCity={activeCity}
              onPlaceCardHeaderClick = {() => {}}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
