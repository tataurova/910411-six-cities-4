import React from "react";
import renderer from "react-test-renderer";
import PlaceListContainer from "./place-list-container.jsx";
import offers from "../../mocks/offers.js";
import {BrowserRouter} from "react-router-dom";
import {DEFAULT_HOVERED_CARD} from "../../const.js";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const onBookmarkButtonCLick = jest.fn();
const mockStore = configureStore([]);
const initialState = {
  onBookmarkButtonCLick,
};
const store = mockStore(initialState);

describe(`<PlaceListContainer />`, () => {
  it(`Should PlaceListContainer render correctly`, () => {
    const activeCity = `Amsterdam`;
    const tree = renderer
      .create(
          <Provider store = {store}>
            <BrowserRouter>
              <PlaceListContainer
                offers = {offers}
                city = {activeCity}
                state = {DEFAULT_HOVERED_CARD}
                onChangeItem = {() => {}}
              />
            </BrowserRouter>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
