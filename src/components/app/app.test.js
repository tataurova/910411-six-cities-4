import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import offers from "../../mocks/offers.js";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

describe(`<App />`, () => {
  it(`Render App`, () => {
    const store = mockStore({
      city: `Amsterdam`,
      offers: offers[`Amsterdam`],
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
