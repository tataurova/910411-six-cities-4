import * as React from "react";
import {mapStateToProps, mapDispatchToProps} from "./app";
import offers from "../../mocks/offers";
import App from "./app";
import configureStore from "redux-mock-store";
import * as Adapter from "enzyme-adapter-react-16";
import {Provider} from "react-redux";
import {mount, configure} from "enzyme";
import {cities} from "../../mocks/cities";
import {DEFAULT_ERROR_STATUS, AuthorizationStatus} from "../../const";

configure({adapter: new Adapter()});

describe(`Tests for redux functions in App component`, () => {
  it(`MapStateToProps returns props from initial state`, () => {
    const initialState = {
      DATA: {
        isFetching: false,
        offers: [],
        favoriteOffers: [],
        nearbyOffers: [],
        reviews: [],
        error: DEFAULT_ERROR_STATUS,
      },
      APP: {
        cities: [],
        city: ``,
      },
      AUTH: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        user: ``,
      },
    };

    const result = {
      isFetching: false,
      offers: [],
      favoriteOffers: [],
      nearbyOffers: [],
      reviews: [],
      cities: [],
      city: ``,
      cityOffers: [],
      error: DEFAULT_ERROR_STATUS,
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      user: ``,
    };

    expect(mapStateToProps(initialState)).toEqual(result);
  });

  it(`MapDispatchToProps should be called for onMenuClick with right type and payload`, () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).onMenuClick(`Amsterdam`);
    expect(dispatch.mock.calls[0][0]).toEqual({type: `CHANGE_CITY`, payload: `Amsterdam`});
  });

  it(`MapDispatchToProps should be called for sendComment with right type and payload`, () => {
    const dispatch = jest.fn(() => {
      return Promise.resolve();
    });
    const id = 1;
    mapDispatchToProps(dispatch).sendComment({comment: `test`, rating: 1}, id);
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it(`MapDispatchToProps should be called for login with right type and payload`, () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).login({login: `test@test.ru`, password: 123});
    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});

describe(`Tests for App component`, () => {
  const mockStore = configureStore([]);
  const activeCity = `Cologne`;
  const testUser = `test@test.ru`;
  const onMenuClick = jest.fn();

  const initialState = {
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
    onMenuClick,
  };

  const store = mockStore(initialState);

  it(`Initial state from store should be right`, () => {
    const tree = mount(
        <Provider store={store}>
          <App />
        </Provider>
    );
    expect(tree.props().store.getState()).toBe(initialState);

  });
});

