import {mapStateToProps, mapDispatchToProps} from "./app.jsx";
import offers from "../../mocks/offers.js";
import React from "react";
import App from "./app.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {mount} from "enzyme";
import {cities} from "../../mocks/cities.js";

describe(`Tests for redux functions in App component`, () => {
  it(`MapStateToProps returns props from initial state`, () => {
    const initialState = {
      DATA: {
        isLoading: false,
        offers: [],
        error: -1,
      },
      APP: {
        cities: [],
        city: ``,
      },
      AUTH: {
        authorizationStatus: `NO_AUTH`,
        user: ``,
      },
    };

    const result = {
      isLoading: false,
      offers: [],
      cities: [],
      city: ``,
      cityOffers: [],
      error: -1,
      authorizationStatus: `NO_AUTH`,
      user: ``,
    };

    expect(mapStateToProps(initialState)).toEqual(result);
  });

  it(`MapDispatchToProps should be called for onMenuClick with right type and payload`, () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).onMenuClick(`Amsterdam`);
    expect(dispatch.mock.calls[0][0]).toEqual({type: `CHANGE_CITY`, payload: `Amsterdam`});
  });
});

describe(`Tests for App component`, () => {
  const mockStore = configureStore([]);
  const initialState = {
    DATA: {
      isLoading: false,
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
  };
  const store = mockStore(initialState);

  const tree = mount(
      <Provider store={store}>
        <App />
      </Provider>
  );

  it(`Initial state from store should be right`, () => {

    expect(tree.props().store.getState()).toBe(initialState);

  });
});

