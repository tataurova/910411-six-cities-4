import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import offers from "../../mocks/offers.js";
import {cities} from "../../mocks/cities.js";
import {BrowserRouter} from "react-router-dom";

describe(`<Main />`, () => {
  const activeCity = `Cologne`;

  it(`Should Main render correctly`, () => {

    const tree = renderer
      .create(
          <BrowserRouter>
            <Main
              offers = {offers}
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

  it(`Should Main render correctly without offers`, () => {
    const cityOffers = [];
    const tree = renderer
      .create(
          <BrowserRouter>
            <Main
              offers = {cityOffers}
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
