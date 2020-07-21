import React from "react";
import renderer from "react-test-renderer";
import MainPage from "./main-page.jsx";
import offers from "../../mocks/offers.js";
import {cities} from "../../mocks/cities.js";
import {BrowserRouter} from "react-router-dom";

describe(`<MainPage />`, () => {
  it(`Should MainPage render correctly`, () => {
    const activeCity = `Cologne`;
    const tree = renderer
      .create(
          <BrowserRouter>
            <MainPage
              cityOffers = {offers}
              cities = {cities}
              city = {activeCity}
              onMenuClick = {() => {}}
              isLoading = {false}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
