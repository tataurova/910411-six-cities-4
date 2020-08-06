import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";
import offers from "../../mocks/offers";
import {cities} from "../../mocks/cities";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const onBookmarkButtonCLick = jest.fn();
const mockStore = configureStore([]);
const initialState = {
  onBookmarkButtonCLick,
};
const store = mockStore(initialState);

describe(`<Main />`, () => {
  const activeCity = `Cologne`;

  it(`Should Main render correctly`, () => {

    const tree = renderer
      .create(
          <Provider store = {store}>
            <BrowserRouter>
              <Main
                offers = {offers}
                cities = {cities}
                city = {activeCity}
                onMenuClick = {() => {}}
                isFetching = {false}
              />
            </BrowserRouter>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
