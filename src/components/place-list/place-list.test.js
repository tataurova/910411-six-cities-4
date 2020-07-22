import React from "react";
import renderer from "react-test-renderer";
import PlaceList from "./place-list.jsx";
import offers from "../../mocks/offers.js";
import {CardType, SortType} from "../../const.js";
import {BrowserRouter} from "react-router-dom";

describe(`<PlaceList />`, () => {
  it(`Should PlaceList render correctly`, () => {
    const activeSortType = SortType.DEFAULT;
    const tree = renderer
      .create(
          <BrowserRouter>
            <PlaceList
              offers={offers}
              activeSortType={activeSortType}
              cardType={CardType.NEAR_PLACE}
              onPlaceCardHover={() => {}}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
