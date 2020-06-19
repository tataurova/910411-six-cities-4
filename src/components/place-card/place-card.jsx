import React from "react";
import PropTypes from "prop-types";

class PlaceCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onHover(this.props.offer.id);
  }

  render() {
    const {name, type, price, rating, premium, photo} = this.props.offer;
    const {handleHeaderClick} = this.props.handleHeaderClick;
    const symbol = Symbol;
    return (
      <article key={symbol + name} className="cities__place-card place-card" onMouseOver={this.handleChange}>
        <div className="place-card__mark">
          <span>{premium ? `Premium` : ``}</span>
        </div>
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={photo} width="260" height="200"
              alt="Place image"/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${20 * rating}%`}}></span>
              <span className="visually-hidden">{rating}</span>
            </div>
          </div>
          <h2 className="place-card__name" onClick={handleHeaderClick}>
            <a href="#">{name}</a>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    );
  }
}


PlaceCard.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    premium: PropTypes.bool.isRequired,
    photo: PropTypes.string.isRequired,
  }),
  onHover: PropTypes.func.isRequired,
  handleHeaderClick: PropTypes.func.isRequired,
};

export default PlaceCard;

