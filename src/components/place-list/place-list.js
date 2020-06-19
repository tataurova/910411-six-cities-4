import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";

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
    const {offers, handleHeaderClick} = this.props;
    return (
      <>
        {offers.map((offer, index) => (
          <PlaceCard
            key={offer + index}
            offer={offer}
            onHover={this.handleChangeActiveCard}
            handleHeaderClick={handleHeaderClick} />
        ))}
      </>
    );
  }
}

PlaceList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleHeaderClick: PropTypes.func.isRequired,
};

export default PlaceList;
