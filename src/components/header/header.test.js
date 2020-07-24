import React from "react";
import renderer from "react-test-renderer";
import Header from "./header.jsx";

describe(`<Header />`, () => {
  it(`Should Header render correctly`, () => {
    const tree = renderer
      .create(
          <Header
            authorizationStatus = {`NO_AUTH`}
            user = {``}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
