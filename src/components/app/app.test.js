import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import offers from "../../mocks/offers.js";
import {cities} from "../../mocks/cities.js";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

describe(`<App />`, () => {
  it(`Render App`, () => {
    const mockStore = configureStore([]);

    const store = mockStore({
      DATA: {
        isLoading: false,
        isSending: false,
        offers,
        error: -1,
      },
      APP: {
        cities,
        city: `Cologne`,
      },
      AUTH: {
        authorizationStatus: `NO_AUTH`,
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
        isLoading: false,
        isSending: false,
        offers,
        error: -1,
      },
      APP: {
        cities,
        city: `Cologne`,
      },
      AUTH: {
        authorizationStatus: `AUTH`,
        user: `test@test.ru`,
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
