import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {PLACES_COUNT, MapSettings} from "../../const.js";
import offers from "../../mocks/offers.js";

describe(`<App />`, () => {
  it(`Render App`, () => {
    const tree = renderer
      .create(<App
        offers={offers}
        mapSettings={MapSettings}
        placeCount={PLACES_COUNT}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
