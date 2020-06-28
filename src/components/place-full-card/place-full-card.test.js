import React from "react";
import renderer from "react-test-renderer";
import PlaceFullCard from "./place-full-card.jsx";
import {MapSettings} from "../../const.js";
import {BrowserRouter} from "react-router-dom";
import offers from "../../mocks/offers.js";

describe(`<PlaceFullCard />`, () => {
  it(`Should PlaceFullCard render correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <PlaceFullCard
              offers={offers}
              mapSettings={MapSettings}
              id = {`1`}
              onPlaceCardHeaderClick = {() => {}}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
