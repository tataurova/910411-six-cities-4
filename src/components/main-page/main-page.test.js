import React from "react";
import renderer from "react-test-renderer";
import MainPage from "./main-page.jsx";
import offers from "../../mocks/offers.js";
import cities from "../../mocks/cities.js";
import {BrowserRouter} from "react-router-dom";

describe(`<MainPage />`, () => {
  it(`Should MainPage render correctly`, () => {
    const activeCity = `Amsterdam`;
    const cityOffers = offers[activeCity];
    const tree = renderer
      .create(
          <BrowserRouter>
            <MainPage
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
