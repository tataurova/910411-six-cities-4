import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import PlaceCard from "../place-card/place-card.jsx";
import {placeCardType} from "../../../types.js";

class Favorites extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadFavoriteOffers();
  }

  render() {
    const {favoriteOffers} = this.props;

    return (
        <>
          <Header
            authorizationStatus={this.props.authorizationStatus}
            user={this.props.user}
          />
          {favoriteOffers.length > 0 ? <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">

                  <div className="favorites__places">
                    {favoriteOffers.map((offer) => (
                      <li key={offer.id} className="favorites__locations-items">
                        <div className="favorites__locations locations locations--current">
                          <div className="locations__item">
                            <a className="locations__item-link" href="#">
                              <span>{offer.city}</span>
                            </a>
                          </div>
                        </div>
                        <PlaceCard
                          offer={offer}
                          {...this.props} />
                      </li>
                    ))}
                  </div>
                </ul>
              </section>
            </div>
          </main> : <main className="page__main page__main--favorites page__main--favorites-empty">
            <div className="page__favorites-container container">
              <section className="favorites favorites--empty">
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan yor future
                    trips.</p>
                </div>
              </section>
            </div>
          </main>
          }
        </>);
  }
}

export default Favorites;

Favorites.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  loadFavoriteOffers: PropTypes.func.isRequired,
  favoriteOffers: PropTypes.arrayOf(PropTypes.shape(placeCardType)).isRequired,
};
