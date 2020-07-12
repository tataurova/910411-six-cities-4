import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";
import {placeCardType} from "../../../types.js";
import {sortOffers} from "../../utils/sort.js";
import {SortType} from "../../const";

const PlaceList = (props) => {
  const offers = (props.activeSortType === SortType.DEFAULT) ? props.offers : sortOffers(props.activeSortType, props.offers);
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          {...props} />
      ))}
    </div>
  );
};

export default PlaceList;

PlaceList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(placeCardType)).isRequired,
  activeSortType: PropTypes.string.isRequired,
  cardType: PropTypes.string.isRequired,
  onPlaceCardHover: PropTypes.func,
};
