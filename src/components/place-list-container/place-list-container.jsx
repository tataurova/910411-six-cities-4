import React from "react";
import SortedPlaceList from "../sorted-place-list/sorted-place-list.jsx";
import Map from "../map/map.jsx";
import PropTypes from "prop-types";
import {placeCardType} from "../../../types.js";

class PlaceListContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handlePlaceCardHover = this.handlePlaceCardHover.bind(this);
    this.state = {
      hoveredCardId: 0,
    };
  }

  handlePlaceCardHover(id) {
    this.setState({hoveredCardId: id});
  }

  render() {
    const {offers, city} = this.props;
    return (
      <div className="cities__places-container container">
        <SortedPlaceList
          offers = {offers}
          city = {city}
          onPlaceCardHover = {this.handlePlaceCardHover}
        />
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map
              offers = {offers}
              activeCity = {city}
              hoveredCardId = {this.state.hoveredCardId}
            />
          </section>
        </div>
      </div>
    );
  }
}

export default PlaceListContainer;

PlaceListContainer.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(placeCardType)).isRequired,
  city: PropTypes.string.isRequired,
};
