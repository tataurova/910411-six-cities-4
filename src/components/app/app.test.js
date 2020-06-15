import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {PLACES_COUNT, PLACE_NAMES} from "../../const.js";

describe(`<App />`, () => {
  it(`Render App`, () => {
    const tree = renderer
      .create(<App
        placesCount={PLACES_COUNT}
        placeNames={PLACE_NAMES}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
