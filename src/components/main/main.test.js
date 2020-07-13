import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
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
              offers = {cityOffers}
              cities = {cities}
              city = {activeCity}
              onMenuClick = {() => {}}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
