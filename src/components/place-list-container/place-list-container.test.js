import React from "react";
import renderer from "react-test-renderer";
import PlaceListContainer from "./place-list-container.jsx";
import offers from "../../mocks/offers.js";
import {BrowserRouter} from "react-router-dom";
import {DEFAULT_HOVERED_CARD} from "../../const.js";

describe(`<PlaceListContainer />`, () => {
  it(`Should PlaceListContainer render correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <PlaceListContainer
              offers = {offers}
              city = {`Amsterdam`}
              state = {DEFAULT_HOVERED_CARD}
              onChangeItem = {() => {}}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
