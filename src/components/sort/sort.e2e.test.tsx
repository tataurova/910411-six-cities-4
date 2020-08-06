import * as React from "react";
import * as Adapter from "enzyme-adapter-react-16";
import {shallow, configure} from "enzyme";
import Sort from "./sort";
import {SortType, DEFAULT_SORT_STATE} from "../../const";

configure({adapter: new Adapter()});

describe(`<Sort />`, () => {
  const onChangeItem = jest.fn(() => {
    return true;
  });
  const onSortTypeClick = jest.fn((value) => {
    return value;
  });

  it(`When you select a sorting item by price the handler is called with the argument price-up`, () => {
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
          onSortTypeClick = {onSortTypeClick}
          state = {DEFAULT_SORT_STATE}
          onChangeItem = {onChangeItem}
        />
    );
    const sortTypeButton = main.find(`.places__sorting-type`);
    sortTypeButton.simulate(`click`);
    expect(onChangeItem).toHaveBeenCalledWith(true);
  });
});
