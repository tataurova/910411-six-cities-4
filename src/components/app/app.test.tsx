import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import offers from "../../mocks/offers";
import {cities} from "../../mocks/cities";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {DEFAULT_ERROR_STATUS, AuthorizationStatus} from "../../const";

describe(`<App />`, () => {
  const activeCity = `Cologne`;
  const testUser = `test@test.ru`;
  it(`Render App`, () => {
    const mockStore = configureStore([]);

    const store = mockStore({
      DATA: {
        isFetching: false,
        offers,
        favoriteOffers: offers,
        nearbyOffers: [],
        reviews: [],
        error: DEFAULT_ERROR_STATUS,
      },
      APP: {
        cities,
        city: activeCity,
      },
      AUTH: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        user: ``,
      },
      onMenuClick: () => {},
    });
    const tree = renderer
      .create(
          <Provider store={store}>
            <App />
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render App with authorization`, () => {
    const mockStore = configureStore([]);

    const store = mockStore({
      DATA: {
        isFetching: false,
        offers,
        favoriteOffers: offers,
        nearbyOffers: [],
        reviews: [],
        error: DEFAULT_ERROR_STATUS,
      },
      APP: {
        cities,
        city: activeCity,
      },
      AUTH: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user: testUser,
      },
      onMenuClick: () => {},
    });
    const tree = renderer
      .create(
          <Provider store={store}>
            <App />
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
