import * as React from "react";
import * as renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import Header from "./header";
import {AuthorizationStatus} from "../../const";
import {DEFAULT_ERROR_STATUS} from "../../const";

describe(`<Header />`, () => {
  it(`Should Header render correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Header
              authorizationStatus = {AuthorizationStatus.NO_AUTH}
              user = {``}
              error = {DEFAULT_ERROR_STATUS}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Header render correctly`, () => {
    const testUser = `test@test.ru`;
    const tree = renderer
      .create(
          <BrowserRouter>
            <Header
              authorizationStatus = {AuthorizationStatus.AUTH}
              user = {testUser}
              error = {DEFAULT_ERROR_STATUS}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
