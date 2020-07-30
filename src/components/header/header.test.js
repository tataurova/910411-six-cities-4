import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import Header from "./header.jsx";

describe(`<Header />`, () => {
  it(`Should Header render correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Header
              authorizationStatus = {`NO_AUTH`}
              user = {``}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Header render correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Header
              authorizationStatus = {`AUTH`}
              user = {`test@test.ru`}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
