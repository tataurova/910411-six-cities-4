import React from "react";
import PropTypes from "prop-types";
import ReviewsItem from "../reviews-item/reviews-item";
import {reviewType} from "../../../types";

const ReviewsList = ({reviews}) => {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewsItem key={review.id} review={review}/>
      ))}
    </ul>
  );
};

export default ReviewsList;

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewType)).isRequired,
};
