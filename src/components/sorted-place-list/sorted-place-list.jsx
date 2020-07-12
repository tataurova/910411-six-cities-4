import React from "react";
import Sort from "../sort/sort.jsx";
import PlaceList from "../place-list/place-list.jsx";
import {CardType} from "../../const.js";
import PropTypes from "prop-types";
import {placeCardType} from "../../../types.js";

const SortedPlaceList = (props) => {
  const {offers, city, onPlaceCardHover} = props;
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {city}</b>
      <Sort
        activeSortType = {props.state}
        onSortTypeClick = {props.onChangeItem}
      />
      <PlaceList
        offers = {offers}
        activeSortType = {props.state}
        cardType = {CardType.CITY}
        onPlaceCardHover = {onPlaceCardHover}
      />
    </section>
  );
};

export default SortedPlaceList;

SortedPlaceList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(placeCardType)).isRequired,
  city: PropTypes.string.isRequired,
  onPlaceCardHover: PropTypes.any,
};
