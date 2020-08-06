import React from "react";
import PrivateRoute from "./private-route";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import Favorites from "../favorites/favorites";
import {AuthorizationStatus, AppRoute} from "../../const";

const mockStore = configureStore([]);
const exact = true;

describe(`<PrivateRoute />`, () => {
  const testUser = `test@test.ru`;

  it(`Should PrivateRoute render correctly`, () => {
    const initialState = {
      AUTH: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
    };
    const store = mockStore(initialState);
    const tree = renderer.create(
        <BrowserRouter>
          <PrivateRoute
            store={store}
            path={AppRoute.FAVORITES}
            exact={true}
            render={() => {
              return (
                <Favorites
                  authorizationStatus = {AuthorizationStatus.AUTH}
                  user = {testUser}
                />
              );
            }}
          />
        </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should PrivateRoute render correctly`, () => {
    const initialState = {
      AUTH: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      },
    };
    const store = mockStore(initialState);
    const tree = renderer.create(
        <BrowserRouter>
          <PrivateRoute
            store={store}
            exact={exact}
            path={AppRoute.FAVORITES}
            render={() => {
              return (
                <Favorites
                  authorizationStatus = {AuthorizationStatus.AUTH}
                  user = {testUser}
                />
              );
            }}
          />
        </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
