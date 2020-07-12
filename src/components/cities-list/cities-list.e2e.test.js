import React from "react";
import CitiesList from "./cities-list.jsx";
import {mount} from "enzyme";
import cities from "../../mocks/cities.js";

describe(`<CitiesList />`, () => {
  it(`When you click on the city, the function onMenuClick is called with arguments from dataset`, () => {
    const activeCity = `Paris`;
    const onMenuClick = jest.fn((value) => {
      return value;
    });
    const tree = mount(
        <CitiesList
          cities = {cities}
          activeCity = {activeCity}
          onMenuClick = {onMenuClick}
        />
    );

    const menuItems = tree.find(`span`);
    const menuItem = menuItems.at(0);
    menuItem.simulate(`click`, {target: {dataset: {city: `Amsterdam`}}});
    expect(onMenuClick).toHaveBeenCalledWith(`Amsterdam`);
  });
});
