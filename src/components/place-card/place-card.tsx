import * as React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {INITIAL_STATE_HOVERED_CARD, AppRoute, CardType} from "../../const";
import {Operation as DataOperation} from "../../reducer/data/data";
import {placeCardType} from "../../types";

interface Props {
  offer: placeCardType;
  cardType: string;
  onPlaceCardHover?: (id: number) => void;
  onBookmarkButtonCLick: (id: number, status: boolean) => void;
  loadFavoriteOffers: () => void;
}

class PlaceCard extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.handlePlaceCardHover = this.handlePlaceCardHover.bind(this);
    this.handlePlaceCardOut = this.handlePlaceCardOut.bind(this);
  }

  handlePlaceCardHover() {
    this.props.onPlaceCardHover(this.props.offer.id);
  }

  handlePlaceCardOut() {
    this.props.onPlaceCardHover(INITIAL_STATE_HOVERED_CARD);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.offer !== nextProps.offer;
  }

  render() {
    const {offer, cardType, onBookmarkButtonCLick, loadFavoriteOffers} = this.props;
    const {id, title, type, price, rating, premium, photo, favorite} = offer;
    const isCardTypeCity = cardType === CardType.CITY;
    return (
      <>
        <article key={id} className={`${cardType}__place-card place-card`} onMouseEnter={() => isCardTypeCity && this.handlePlaceCardHover()} onMouseLeave={() => isCardTypeCity && this.handlePlaceCardOut()}>
          {isCardTypeCity && (premium &&
           <div className="place-card__mark">
             <span>Premium</span>
           </div>)}
          <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
            <a href="#">
              <img className="place-card__image" src={photo} width="260" height="200"
                alt="Place image"/>
            </a>
          </div>
          <div className={`place-card__info ${cardType === CardType.FAVORITE ? `favorites__card-info` : `` }`}>
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">&euro;{price}</b>
                <span className="place-card__price-text">&#47;&nbsp;night</span>
              </div>
              <button className={`place-card__bookmark-button button ${favorite ? `place-card__bookmark-button--active` : ``}`} type="button" onClick={() => {
                onBookmarkButtonCLick(id, !favorite);
                if (cardType === CardType.FAVORITE) {
                  loadFavoriteOffers();
                }
              }}>
                <svg className="place-card__bookmark-icon" width="18" height="19">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars">
                <span style={{width: `${20 * rating}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <Link to={`${AppRoute.PLACE_FULL_CARD}/${id}`}>{title}</Link>
            </h2>
            <p className="place-card__type">{type}</p>
          </div>
        </article>
      </>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  onBookmarkButtonCLick(id, status) {
    dispatch(DataOperation.setToFavorite(id, status));
  },
  loadFavoriteOffers() {
    dispatch(DataOperation.loadFavoriteOffers());
  }
});

export {PlaceCard};
export default connect(null, mapDispatchToProps)(PlaceCard);
