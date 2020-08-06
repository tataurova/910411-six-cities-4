import * as React from "react";
import * as Adapter from "enzyme-adapter-react-16";
import CitiesList from "./cities-list";
import {mount, configure} from "enzyme";
import {cities} from "../../mocks/cities";

configure({adapter: new Adapter()});

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
