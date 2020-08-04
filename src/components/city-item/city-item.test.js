import React from "react";
import renderer from "react-test-renderer";
import CityItem from "./city-item.tsx";

describe(`<CityItem />`, () => {
  it(`Render CityItem`, () => {
    const city = `Paris`;
    const isActive = true;
    const tree = renderer
      .create(<CityItem
        city = {city}
        isActive = {isActive}
        onMenuClick = {() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
