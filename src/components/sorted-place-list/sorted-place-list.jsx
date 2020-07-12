import React from "react";
import Sort from "../sort/sort.jsx";
import PlaceList from "../place-list/place-list.jsx";
import {CardType} from "../../const.js";
import {SortType} from "../../const.js";
import PropTypes from "prop-types";
import {placeCardType} from "../../../types.js";

class SortedPlaceList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleSortTypeChange = this.handleSortTypeChange.bind(this);
    this.state = {
      activeSortType: SortType.DEFAULT,
    };
  }

  handleSortTypeChange(sortType) {
    this.setState({activeSortType: sortType});
  }

  render() {
    const {offers, city, onPlaceCardHover} = this.props;
    return (
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {city}</b>
        <Sort
          activeSortType = {this.state.activeSortType}
          onSortTypeClick = {this.handleSortTypeChange}
        />
        <PlaceList
          offers = {offers}
          activeSortType = {this.state.activeSortType}
          cardType = {CardType.CITY}
          onPlaceCardHover = {onPlaceCardHover}
        />
      </section>
    );
  }

}

export default SortedPlaceList;

SortedPlaceList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(placeCardType)).isRequired,
  city: PropTypes.string.isRequired,
  onPlaceCardHover: PropTypes.any,
};
