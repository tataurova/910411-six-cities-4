import * as React from "react";
import * as renderer from "react-test-renderer";
import Login from "./login";
import {BrowserRouter} from "react-router-dom";
import {AuthorizationStatus, DEFAULT_ERROR_STATUS} from "../../const";
import {mockFunction} from "../../utils/common";

describe(`<Login />`, () => {
  const testUser = `test@test.ru`;
  const loginRef = React.createRef<HTMLInputElement>();
  const passwordRef = React.createRef<HTMLInputElement>();

  it(`Should Login render correctly`, () => {
    const state = {
      loginValid: null,
      passwordValid: null,
    };
    const tree = renderer
      .create(
          <BrowserRouter>
            <Login
              state = {state}
              onSubmit = {mockFunction}
              onChange = {mockFunction}
              loginRef = {loginRef}
              passwordRef = {passwordRef}
              authorizationStatus = {AuthorizationStatus.AUTH}
              user = {testUser}
              error = {DEFAULT_ERROR_STATUS}
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
    const tree = renderer
      .create(
          <BrowserRouter>
            <Login
              state = {state}
              onSubmit = {mockFunction}
              onChange = {mockFunction}
              loginRef = {loginRef}
              passwordRef = {passwordRef}
              authorizationStatus = {AuthorizationStatus.AUTH}
              user = {testUser}
              error = {DEFAULT_ERROR_STATUS}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
