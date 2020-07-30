import React from "react";
import PropTypes from "prop-types";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import Map from "../map/map.jsx";
import CommentForm from "../comment-form/comment-form.jsx";
import {placeFullCardType} from "../../../types";
import PlaceList from "../place-list/place-list.jsx";
import Header from "../header/header.jsx";
import {CardType, NEAR_PLACES_MAX_COUNT, MAP_NEAR_PLACES_MAX_COUNT, SortType, AuthorizationStatus} from "../../const.js";
import {withCompletedComment} from "../../hocs/with-completed-comment/with-completed-comment.jsx";

const CommentFormWithCompletedComment = withCompletedComment(CommentForm);

const PlaceFullCard = ({offerInfo, id, authorizationStatus, user, onSubmitForm, isFetching, error}) => {
  const idNumber = Number(id);
  const {offer, nearOffers} = offerInfo;
  const activeCity = offer.city;

  const {title, type, price, rating, premium, bedrooms, adults, additional, details, owner, photos, reviews} = offer;
  const {photo, name, isSuper} = owner;
  return (
    <>
    <Header
      authorizationStatus = {authorizationStatus}
      user = {user}
    />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {photos.map((item, index) => (
                <div key ={item + index} className="property__image-wrapper">
                  <img className="property__image" src={item} alt="Photo studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {premium &&
                <div className="place-card__mark">
                  <span>Premium</span>
                </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${20 * rating}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                Max {adults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {additional.map((item) => (
                    <li key={item} className="property__inside-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${isSuper ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={photo} width="74" height="74"
                      alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {details}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewsList reviews={reviews}/>
                {authorizationStatus === AuthorizationStatus.AUTH && <CommentFormWithCompletedComment
                  onSubmitForm={onSubmitForm}
                  id={id}
                  isFetching={isFetching}
                  error={error}
                />}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              offers={nearOffers.slice(0, MAP_NEAR_PLACES_MAX_COUNT).concat(offer)}
              activeCity={activeCity}
              hoveredCardId={idNumber}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <PlaceList
                offers = {nearOffers.slice(0, NEAR_PLACES_MAX_COUNT)}
                activeSortType = {SortType.DEFAULT}
                cardType = {CardType.NEAR_PLACE}
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default PlaceFullCard;

PlaceFullCard.propTypes = {
  offerInfo: PropTypes.shape({
    offer: PropTypes.shape(placeFullCardType).isRequired,
    nearOffers: PropTypes.arrayOf(PropTypes.shape(placeFullCardType).isRequired).isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.number.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};
