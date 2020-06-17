import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {PLACES_COUNT, PLACE_NAMES} from "../../const.js";

describe(`<Main />`, () => {
  it(`Should Main render correctly`, () => {
    const tree = renderer
      .create(<Main
        placesCount={PLACES_COUNT}
        placeNames={PLACE_NAMES}
        handleHeaderClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
