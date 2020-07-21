import React from "react";
import renderer from "react-test-renderer";
import MainPage from "./main-page.jsx";
import offers from "../../mocks/offers.js";
import {cities} from "../../mocks/cities.js";
import {BrowserRouter} from "react-router-dom";

describe(`<MainPage />`, () => {
  const activeCity = `Cologne`;

  it(`Should MainPage render correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <MainPage
              cityOffers = {offers}
              cities = {cities}
              city = {activeCity}
              onMenuClick = {() => {}}
              isLoading = {false}
              error = {-1}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should MainPage render correctly without offers`, () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <MainPage
            cityOffers = {[]}
            cities = {cities}
            city = {activeCity}
            onMenuClick = {() => {}}
            isLoading = {false}
            error = {-1}
          />
        </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
