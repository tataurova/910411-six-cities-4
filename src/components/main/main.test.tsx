import * as React from "react";
import * as renderer from "react-test-renderer";
import Main from "./main";
import offers from "../../mocks/offers";
import {cities} from "../../mocks/cities";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {mockFunction} from "../../utils/common";
import {AuthorizationStatus} from "../../const";

const onBookmarkButtonCLick = jest.fn();
const mockStore = configureStore([]);
const initialState = {
  onBookmarkButtonCLick,
  AUTH: {
    authorizationStatus: AuthorizationStatus.AUTH,
  },
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
                onMenuClick = {mockFunction}
                isFetching = {false}
              />
            </BrowserRouter>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
