import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {MapSettings} from "../../const.js";
import offers from "../../mocks/offers.js";
import cities from "../../mocks/cities.js";
import {BrowserRouter} from "react-router-dom";

describe(`<Main />`, () => {
  it(`Should Main render correctly`, () => {
    const activeCity = `Amsterdam`;
    const cityOffers = offers[activeCity];
    const tree = renderer
      .create(
          <BrowserRouter>
            <Main
              offers={cityOffers}
              mapSettings={MapSettings}
              cities={cities}
              activeCity = {activeCity}
              onPlaceCardHeaderClick={() => {}}
              onMenuClick={() => {}}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
