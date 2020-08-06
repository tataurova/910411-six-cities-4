import * as React from "react";
import * as renderer from "react-test-renderer";
import CityItem from "./city-item";
import {mockFunction} from "../../utils/common";

describe(`<CityItem />`, () => {
  it(`Render CityItem`, () => {
    const city = `Paris`;
    const isActive = true;
    const tree = renderer
      .create(<CityItem
        city = {city}
        isActive = {isActive}
        onMenuClick = {mockFunction}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
