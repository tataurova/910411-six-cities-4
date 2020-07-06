import React from "react";
import renderer from "react-test-renderer";
import ReviewsItem from "./reviews-item.jsx";

const review = {
  name: `Max`,
  photo: `img/avatar-max.jpg`,
  rating: 4,
  text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.
        The building is green and from 18th century.`,
  date: `April 2019`,
};

describe(`<ReviewsItem />`, () => {
  it(`Should PlaceList render correctly`, () => {
    const tree = renderer
      .create(
          <ReviewsItem
            review = {review}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
