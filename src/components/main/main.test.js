import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {PLACES_COUNT, MapSettings} from "../../const.js";
import offers from "../../mocks/offers.js";
import {BrowserRouter} from "react-router-dom";

describe(`<Main />`, () => {
  it(`Should Main render correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Main
              offers={offers}
              placeCount={PLACES_COUNT}
              mapSettings={MapSettings}
              onPlaceCardHeaderClick={() => {}}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
