import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import NotFound from "./not-found.tsx";
import {AuthorizationStatus, DEFAULT_ERROR_STATUS} from "../../const.js";

describe(`<NotFound />`, () => {
  it(`Should NotFound render correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <NotFound
              authorizationStatus = {AuthorizationStatus.NO_AUTH}
              user = {``}
              error = {DEFAULT_ERROR_STATUS}
            />
          </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
