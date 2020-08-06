import * as React from "react";
import * as renderer from "react-test-renderer";
import CitiesList from "./cities-list";
import {cities} from "../../mocks/cities";
import {mockFunction} from "../../utils/common";

describe(`<CitiesList />`, () => {
  it(`Render CitiesList`, () => {
    const activeCity = `Paris`;
    const tree = renderer
      .create(<CitiesList
        cities = {cities}
        activeCity = {activeCity}
        onMenuClick = {mockFunction}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
