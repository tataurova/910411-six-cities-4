import * as React from "react";
import * as renderer from "react-test-renderer";
import ReviewsItem from "./reviews-item";
import {reviews} from "../../mocks/reviews";

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
