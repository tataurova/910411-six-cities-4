import React from "react";
import renderer from "react-test-renderer";
import PlaceList from "./place-list.jsx";
import offers from "../../mocks/offers.js";
import {CardType} from "../../const.js";
import {BrowserRouter} from "react-router-dom";

describe(`<PlaceList />`, () => {
  it(`Should PlaceList render correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <PlaceList
              offers={offers}
              cardType={CardType.NEAR_PLACE}
              onHover={() => {}}
              onPlaceCardHeaderClick={() => {}}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
