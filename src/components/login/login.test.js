import React, {createRef} from "react";
import renderer from "react-test-renderer";
import Login from "./login.jsx";
import {BrowserRouter} from "react-router-dom";

describe(`<Login />`, () => {
  it(`Should Login render correctly`, () => {
    const state = {
      formValid: null,
      loginValid: null,
      passwordValid: null,
    };
    const loginRef = createRef();
    const passwordRef = createRef();
    const tree = renderer
      .create(
          <BrowserRouter>
            <Login
              state = {state}
              onSubmit = {() => {}}
              onChange = {() => {}}
              loginRef = {loginRef}
              passwordRef = {passwordRef}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
