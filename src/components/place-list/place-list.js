import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";
import {placeCardType} from "../../../types";

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
    const {offers, onPlaceCardHeaderClick} = this.props;
    return (
      <>
        {offers.map((offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            onHover={this.handlePlaceCardHover}
            onPlaceCardHeaderClick={onPlaceCardHeaderClick} />
        ))}
      </>
    );
  }
}

PlaceList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(placeCardType)).isRequired,
  onPlaceCardHeaderClick: PropTypes.func.isRequired,
};

export default PlaceList;
