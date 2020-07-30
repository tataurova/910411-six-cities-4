import React from "react";
import PrivateRoute from "./private-route.jsx";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import Favorites from "../favorites/favorites";

const mockStore = configureStore([]);
const exact = true;

describe(`<PrivateRoute />`, () => {
  it(`Should PrivateRoute render correctly`, () => {
    const initialState = {
      AUTH: {
        authorizationStatus: `AUTH`
      },
    };
    const store = mockStore(initialState);
    const tree = renderer.create(
        <BrowserRouter>
          <PrivateRoute
            store={store}
            path={`/favorites`}
            exact={true}
            render={() => {
              return (
                <Favorites
                  authorizationStatus = {`AUTH`}
                  user = {`test@test.ru`}
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
        authorizationStatus: `NO_AUTH`
      },
    };
    const store = mockStore(initialState);
    const tree = renderer.create(
        <BrowserRouter>
          <PrivateRoute
            store={store}
            exact={exact}
            path={`/favorites`}
            render={() => {
              return (
                <Favorites
                  authorizationStatus = {`AUTH`}
                  user = {`test@test.ru`}
                />
              );
            }}
          />
        </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
