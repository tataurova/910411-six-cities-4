import React from "react";
import renderer from "react-test-renderer";
import PlaceFullCard from "./place-full-card.jsx";
import {BrowserRouter} from "react-router-dom";
import offers from "../../mocks/offers.js";

describe(`<PlaceFullCard />`, () => {
  it(`Should PlaceFullCard render correctly`, () => {
    const offerInfo = {
      offer: offers[`Cologne`][0],
      nearOffers: [offers[`Cologne`][1]],
    };
    const tree = renderer
      .create(
          <BrowserRouter>
            <PlaceFullCard
              offerInfo = {offerInfo}
              id = {`1`}
              onPlaceCardHover = {() => {}}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
