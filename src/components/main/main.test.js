import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import offers from "../../mocks/offers.js";
import {cities} from "../../mocks/cities.js";
import {BrowserRouter} from "react-router-dom";

describe(`<Main />`, () => {
  it(`Should Main render correctly`, () => {
    const activeCity = `Cologne`;
    const tree = renderer
      .create(
          <BrowserRouter>
            <Main
              offers = {offers}
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
