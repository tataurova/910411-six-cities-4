import React from "react";
import PropTypes from "prop-types";
import {reviewType} from "../../../types";

const ReviewsItem = ({review}) => {
  const {name, photo, rating, text, date} = review;
  const formatDate = `${date.toLocaleString(`en-EN`, {month: `long`})} ${date.getFullYear()}`;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={photo} width="54" height="54"
            alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${20 * rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time">{formatDate}</time>
      </div>
    </li>
  );
};

export default ReviewsItem;

ReviewsItem.propTypes = {
  review: PropTypes.shape(reviewType).isRequired,
};
