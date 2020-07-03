import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";
import {placeCardType} from "../../../types.js";

const PlaceList = ({offers, cardType, onPlaceCardHeaderClick, onPlaceCardHover}) => {
  return (
    <>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          cardType={cardType}
          onPlaceCardHover={onPlaceCardHover}
          onPlaceCardHeaderClick={onPlaceCardHeaderClick} />
      ))}
    </>
  );
};

PlaceList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(placeCardType)).isRequired,
  cardType: PropTypes.string.isRequired,
  onPlaceCardHeaderClick: PropTypes.func.isRequired,
  onPlaceCardHover: PropTypes.func.isRequired,
};

export default PlaceList;
