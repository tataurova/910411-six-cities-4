import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import Header from "./header.jsx";
import {AuthorizationStatus} from "../../const.js";

describe(`<Header />`, () => {
  it(`Should Header render correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Header
              authorizationStatus = {AuthorizationStatus.NO_AUTH}
              user = {``}
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
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
