import React from "react";
import renderer from "react-test-renderer";
import Sort from "./sort.jsx";
import {SortType} from "../../const.js";

describe(`<Sort />`, () => {
  it(`Should Sort render correctly`, () => {
    const tree = renderer
      .create(
          <Sort
            activeSortType = {SortType.DEFAULT}
            onSortTypeClick = {() => {}}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
