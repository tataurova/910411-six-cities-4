import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import NotFound from "./not-found.jsx";
import {AuthorizationStatus} from "../../const.js";

describe(`<NotFound />`, () => {
  it(`Should NotFound render correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <NotFound
              authorizationStatus = {AuthorizationStatus.NO_AUTH}
              user = {``}
            />
          </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
