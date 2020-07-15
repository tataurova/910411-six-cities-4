import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import offers from "../../mocks/offers.js";
import cities from "../../mocks/cities.js";
import {BrowserRouter} from "react-router-dom";

describe(`<Main />`, () => {
  const activeCity = `Amsterdam`;

  it(`Should Main render correctly`, () => {
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
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
