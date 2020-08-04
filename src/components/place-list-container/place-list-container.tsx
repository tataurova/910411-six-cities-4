import React from "react";
import SortedPlaceList from "../sorted-place-list/sorted-place-list";
import Map from "../map/map";
import PropTypes from "prop-types";
import {placeCardType} from "../../../types";
import {SortType} from "../../const";
import withSelectedItem from "../../hocs/with-selected-item/with-selected-item";

const SortedPlaceListWithSelectedItem = withSelectedItem(SortedPlaceList, SortType.DEFAULT);

const PlaceListContainer = (props) => {
  const {offers, city, state, onChangeItem} = props;
  return (
    <div className="cities__places-container container">
      <SortedPlaceListWithSelectedItem
        offers = {offers}
        city = {city}
        onPlaceCardHover = {onChangeItem}
      />
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map
            offers = {offers}
            activeCity = {city}
            hoveredCardId = {state}
          />
        </section>
      </div>
    </div>
  );
};

export default PlaceListContainer;

PlaceListContainer.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(placeCardType)).isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.number.isRequired,
  onChangeItem: PropTypes.func.isRequired,
};
