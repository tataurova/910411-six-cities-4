import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";
import {placeCardType} from "../../../types";

class PlaceList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeActiveCard = this.handleChangeActiveCard.bind(this);
    this.state = {card: ``};
  }

  handleChangeActiveCard(id) {
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
            onHover={this.handleChangeActiveCard}
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
