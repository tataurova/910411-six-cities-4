import React from "react";
import {shallow} from "enzyme";
import Sort from "./sort.tsx";
import {SortType} from "../../const.js";
import {DEFAULT_SORT_STATE} from "../../const";

describe(`<Sort />`, () => {
  const onChangeItem = jest.fn(() => {
    return true;
  });

  it(`When you select a sorting item by price the handler is called with the argument price-up`, () => {
    const onSortTypeClick = jest.fn((value) => {
      return value;
    });
    const main = shallow(
        <Sort
          activeSortType = {SortType.DEFAULT}
          onSortTypeClick = {onSortTypeClick}
          state = {DEFAULT_SORT_STATE}
          onChangeItem = {onChangeItem}
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
          state = {DEFAULT_SORT_STATE}
          onChangeItem = {onChangeItem}
        />
    );
    const sortTypeButton = main.find(`.places__sorting-type`);
    sortTypeButton.simulate(`click`);
    expect(onChangeItem).toHaveBeenCalledWith(true);
  });
});
