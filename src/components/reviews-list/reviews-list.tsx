import * as React from 'react';
import ReviewsItem from "../reviews-item/reviews-item";
import {Review} from "../../types";

interface Props {
  reviews: Review[];
}

const ReviewsList: React.FunctionComponent<Props> = ({reviews}: Props) => {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewsItem key={review.id} review={review}/>
      ))}
    </ul>
  );
};

export default ReviewsList;
