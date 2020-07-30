import React from "react";
import renderer from "react-test-renderer";
import Favorites from "./favorites.jsx";
import {BrowserRouter} from "react-router-dom";

describe(`<Favorites />`, () => {
  it(`Render Favorites`, () => {

    const tree = renderer
      .create(
          <BrowserRouter>
            <Favorites
              authorizationStatus = {`AUTH`}
              user = {`test@test.ru`}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
