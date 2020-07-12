import React from 'react';
import PropTypes from 'prop-types';
import {placeCardType} from "../../../types.js";
import CitiesList from "../cities-list/cities-list.jsx";
import NoPlaces from "../no-places/no-places.jsx";
import PlaceListContainer from "../place-list-container/place-list-container.jsx";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

const Main = ({offers, cities, city, onMenuClick}) => {
  return (
    <>
      <div className="page page--gray page--main">
        <Header />

        <main className={`page__main page__main--index ${offers.length === 0 ? `page__main--index-empty` : ``}`}>
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesList cities = {cities} activeCity = {city} onMenuClick = {onMenuClick}/>
            </section>
          </div>
          <div className="cities">
            {offers.length > 0 ? (<PlaceListContainer offers = {offers} city = {city} />) : ``}
            {offers.length > 0 || <NoPlaces activeCity = {city} />}
          </div>
        </main>
      </div>
    </>
  );
};

export default Main;

Main.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(placeCardType)).isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  city: PropTypes.string.isRequired,
  onMenuClick: PropTypes.func.isRequired,
};
