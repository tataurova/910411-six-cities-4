import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";
import {placeCardType} from "../../../types.js";

class PlaceList extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlaceCardHover = this.handlePlaceCardHover.bind(this);
    this.state = {card: ``};
  }

  handlePlaceCardHover(id) {
    this.setState({card: id});
  }

  render() {
    const {offers, cardType, onPlaceCardHeaderClick} = this.props;
    return (
      <>
        {offers.map((offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            cardType = {cardType}
            onHover={this.handlePlaceCardHover}
            onPlaceCardHeaderClick={onPlaceCardHeaderClick} />
        ))}
      </>
    );
  }
}

PlaceList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(placeCardType)).isRequired,
  cardType: PropTypes.string.isRequired,
  onPlaceCardHeaderClick: PropTypes.func.isRequired,
};

export default PlaceList;
