import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list.jsx";
import {reviews} from "../../mocks/reviews.js";

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
