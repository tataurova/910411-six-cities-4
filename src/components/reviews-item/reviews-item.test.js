import React from "react";
import renderer from "react-test-renderer";
import ReviewsItem from "./reviews-item.jsx";
import {reviews} from "../../mocks/reviews.js";

describe(`<ReviewsItem />`, () => {
  it(`Should PlaceList render correctly`, () => {
    const tree = renderer
      .create(
          <ReviewsItem
            review = {reviews[0]}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
