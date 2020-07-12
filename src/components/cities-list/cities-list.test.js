import React from "react";
import renderer from "react-test-renderer";
import CitiesList from "./cities-list.jsx";
import cities from "../../mocks/cities.js";

describe(`<CitiesList />`, () => {
  it(`Render CitiesList`, () => {
    const activeCity = `Paris`;
    const tree = renderer
      .create(<CitiesList
        cities = {cities}
        activeCity = {activeCity}
        onMenuClick = {() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
