import * as React from "react";
import * as renderer from "react-test-renderer";
import MainPage from "./main-page";
import offers from "../../mocks/offers";
import {cities} from "../../mocks/cities";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {AuthorizationStatus, DEFAULT_ERROR_STATUS} from "../../const";
import {mockFunction} from "../../utils/common";

const onBookmarkButtonCLick = jest.fn();
const mockStore = configureStore([]);
const initialState = {
  onBookmarkButtonCLick,
};
const store = mockStore(initialState);

describe(`<MainPage />`, () => {
  const activeCity = `Cologne`;

  it(`Should MainPage render correctly`, () => {
    const tree = renderer
      .create(
          <Provider store = {store}>
            <BrowserRouter>
              <MainPage
                cityOffers = {offers}
                cities = {cities}
                city = {activeCity}
                onMenuClick = {mockFunction}
                isFetching = {false}
                error = {DEFAULT_ERROR_STATUS}
                authorizationStatus = {AuthorizationStatus.NO_AUTH}
                user = {``}
              />
            </BrowserRouter>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should MainPage render correctly without offers`, () => {
    const tree = renderer
      .create(
          <Provider store = {store}>
            <BrowserRouter>
              <MainPage
                cityOffers = {[]}
                cities = {cities}
                city = {activeCity}
                onMenuClick = {mockFunction}
                isFetching = {false}
                error = {DEFAULT_ERROR_STATUS}
                authorizationStatus = {AuthorizationStatus.NO_AUTH}
                user = {``}
              />
            </BrowserRouter>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
