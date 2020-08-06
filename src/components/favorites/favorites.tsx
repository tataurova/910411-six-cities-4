import * as React from 'react';
import Header from "../header/header";
import PlaceCard from "../place-card/place-card";
import {placeCardType} from "../../types";

interface Props {
  authorizationStatus: string;
  user: string;
  loadFavoriteOffers: () => void;
  favoriteOffers: placeCardType[];
  error: boolean;
  cardType: string;
}

class Favorites extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadFavoriteOffers();
  }

  render() {
    const {favoriteOffers, authorizationStatus, user, error} = this.props;

    return (
      <>
        <Header
          authorizationStatus = {authorizationStatus}
          user = {user}
          error = {error}
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
