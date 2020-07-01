import React from "react";
import renderer from "react-test-renderer";
import CitiesList from "./cities-list.jsx";
import cities from "../../mocks/cities.js";

const activeCity = `Paris`;

describe(`<CitiesList />`, () => {
  it(`Render App`, () => {
    const tree = renderer
      .create(<CitiesList
        cities={cities}
        activeCity={activeCity}
        onMenuClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
