import React from "react";
import PropTypes from "prop-types";
import ReviewsItem from "../reviews-item/reviews-item.jsx";
import {reviewsItemType} from "../../../types.js";

const ReviewsList = ({reviews}) => {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewsItem key={review} review={review}/>
      ))}
    </ul>
  );
};

export default ReviewsList;

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewsItemType)).isRequired,
};
