import React from "react";
import renderer from "react-test-renderer";
import SortedPlaceList from "./sorted-place-list.tsx";
import offers from "../../mocks/offers.js";
import {BrowserRouter} from "react-router-dom";
import {SortType} from "../../const.js";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const onBookmarkButtonCLick = jest.fn();
const mockStore = configureStore([]);
const initialState = {
  onBookmarkButtonCLick,
};
const store = mockStore(initialState);

describe(`<SortedPlaceList />`, () => {
  it(`Should PlaceList render correctly`, () => {
    const activeCity = `Cologne`;
    const tree = renderer
      .create(
          <Provider store = {store}>
            <BrowserRouter>
              <SortedPlaceList
                offers = {offers}
                city = {activeCity}
                state = {SortType.DEFAULT}
                onChangeItem = {() => {}}
                onPlaceCardHover = {() => {}}
              />
            </BrowserRouter>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
