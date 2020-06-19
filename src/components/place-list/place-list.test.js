import React from "react";
import renderer from "react-test-renderer";
import PlaceList from "./place-list.js";
import offers from "../../mocks/offers.js";

describe(`<PlaceList />`, () => {
  it(`Should PlaceList render correctly`, () => {
    const tree = renderer
      .create(<PlaceList
        offers={offers}
        onHover={() => {}}
        handleHeaderClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
