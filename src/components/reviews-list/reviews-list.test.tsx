import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list";
import {reviews} from "../../mocks/reviews";

describe(`<ReviewsItem />`, () => {
  it(`Should ReviewsList render correctly`, () => {
    const tree = renderer
      .create(
          <ReviewsList
            reviews = {reviews}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
