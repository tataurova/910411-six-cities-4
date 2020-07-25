import React from "react";
import Sort from "../sort/sort.jsx";
import PlaceList from "../place-list/place-list.jsx";
import {CardType, DEFAULT_SORT_STATE} from "../../const.js";
import PropTypes from "prop-types";
import {placeCardType} from "../../../types.js";
import withSelectedItem from "../../hocs/with-selected-item/with-selected-item.jsx";

const SortWithSelectedItem = withSelectedItem(Sort, DEFAULT_SORT_STATE);

const SortedPlaceList = (props) => {
  const {offers, city, onPlaceCardHover, state, onChangeItem} = props;
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {city}</b>
      <SortWithSelectedItem
        activeSortType = {state}
        onSortTypeClick = {onChangeItem}
      />
      <PlaceList
        offers = {offers}
        activeSortType = {state}
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
  state: PropTypes.string.isRequired,
  onPlaceCardHover: PropTypes.func.isRequired,
  onChangeItem: PropTypes.func.isRequired,
};
