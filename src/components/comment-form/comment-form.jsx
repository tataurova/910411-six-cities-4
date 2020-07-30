import React from "react";
import {MIN_ERROR_CODE} from "../../const.js";
import PropTypes from "prop-types";
import {RatingValue, DEFAULT_RATING} from "../../const.js";

const CommentLength = {
  START_TYPING: 1,
  MIN: 50,
};

const CommentForm = ({state, isSending, error, onChange, onSubmit}) => {
  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={state.rating > DEFAULT_RATING && state.comment.length >= CommentLength.MIN ? onSubmit : null}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars"
          type="radio" checked={state.rating === RatingValue.FIVE} disabled={isSending} onChange={onChange}/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars"
          type="radio" checked={state.rating === RatingValue.FOUR} disabled={isSending} onChange={onChange}/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars"
          type="radio" checked={state.rating === RatingValue.THREE} disabled={isSending} onChange={onChange}/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars"
          type="radio" checked={state.rating === RatingValue.TWO} disabled={isSending} onChange={onChange}/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star"
          type="radio" checked={state.rating === RatingValue.ONE} disabled={isSending} onChange={onChange}/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label"
          title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved" value={state.comment} onChange={onChange} disabled={isSending}></textarea>
      {error > MIN_ERROR_CODE && state.rating === DEFAULT_RATING && state.comment.length < CommentLength.START_TYPING && <p className="form-error">Something went wrong, please, try again later</p>}
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe
            your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={state.rating === DEFAULT_RATING || state.comment.length < CommentLength.MIN}>Submit</button>
      </div>
    </form>
  );
};

export default CommentForm;

CommentForm.propTypes = {
  state: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    comment: PropTypes.text,
  }).isRequired,
  isSending: PropTypes.bool.isRequired,
  error: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

CommentForm.defaultProps = {
  state: PropTypes.shape({
    comment: ``,
  })
};
