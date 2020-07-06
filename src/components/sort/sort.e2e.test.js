import React from "react";
import {shallow} from "enzyme";
import Sort from "./sort.jsx";
import {SortType} from "../../const.js";

describe(`<Sort />`, () => {
  it(`When you select a sorting item by price the handler is called with the argument price-up`, () => {
    const onSortTypeClick = jest.fn((value) => {
      return value;
    });
    const main = shallow(
        <Sort
          activeSortType = {SortType.DEFAULT}
          onSortTypeClick = {onSortTypeClick}
        />
    );
    const options = main.find(`.places__option`);
    const option = options.at(1);
    option.simulate(`click`, {target: {dataset: {sort: `price-up`}}});
    expect(onSortTypeClick).toHaveBeenCalledWith(`price-up`);
  });

  it(`When you click the sort button the handler changes the status to open`, () => {
    const main = shallow(
        <Sort
          activeSortType = {SortType.DEFAULT}
          onSortTypeClick = {() => {}}
        />
    );
    const sortTypeButton = main.find(`.places__sorting-type`);
    sortTypeButton.simulate(`click`);
    expect(main.state().opened).toEqual(true);
  });
});
