import React from "react";
import renderer from "react-test-renderer";
import Sort from "./sort";
import {SortType, DEFAULT_SORT_STATE} from "../../const";

describe(`<Sort />`, () => {
  it(`Should Sort render correctly`, () => {
    const tree = renderer
      .create(
          <Sort
            activeSortType = {SortType.DEFAULT}
            state = {DEFAULT_SORT_STATE}
            onSortTypeClick = {() => {}}
            onChangeItem = {() => {}}
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
            onSortTypeClick = {() => {}}
            onChangeItem = {() => {}}
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
            onSortTypeClick = {() => {}}
            onChangeItem = {() => {}}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
