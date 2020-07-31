import React, {createRef} from "react";
import renderer from "react-test-renderer";
import Login from "./login.jsx";
import {BrowserRouter} from "react-router-dom";

describe(`<Login />`, () => {
  it(`Should Login render correctly`, () => {
    const state = {
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

  it(`Should Login render correctly with valid form`, () => {
    const state = {
      loginValid: true,
      passwordValid: true,
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
