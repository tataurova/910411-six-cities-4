import * as React from "react";
import * as renderer from "react-test-renderer";
import Sort from "./sort";
import {SortType, DEFAULT_SORT_STATE} from "../../const";
import {mockFunction} from "../../utils/common";

describe(`<Sort />`, () => {
  it(`Should Sort render correctly`, () => {
    const tree = renderer
      .create(
          <Sort
            activeSortType = {SortType.DEFAULT}
            state = {DEFAULT_SORT_STATE}
            onSortTypeClick = {mockFunction}
            onChangeItem = {mockFunction}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Sort render correctly`, () => {
    const tree = renderer
      .create(
          <Sort
            activeSortType = {SortType.DEFAULT}
            state = {true}
            onSortTypeClick = {mockFunction}
            onChangeItem = {mockFunction}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Sort render correctly`, () => {
    const tree = renderer
      .create(
          <Sort
            activeSortType = {SortType.PRICE_UP}
            state = {true}
            onSortTypeClick = {mockFunction}
            onChangeItem = {mockFunction}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
