import React from 'react';
import PropTypes from 'prop-types';
import PlaceList from "../place-list/place-list.jsx";
import {placeCardType} from "../../../types.js";
import {CardType} from "../../const.js";
import Map from "../map/map.jsx";
import CitiesList from "../cities-list/cities-list.jsx";
import NoPlaces from "../no-places/no-places.jsx";
import Sort from "../sort/sort.jsx";

const Main = ({offers, cities, city, sortType, hoveredCardId, onPlaceCardHeaderClick, onMenuClick, onSortTypeClick, onPlaceCardHover}) => {
  return (
    <>
      <div style={{display: `none`}}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path>
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path
              d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path>
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path>
          </symbol>
        </svg>
      </div>
      <div className="page page--gray page--main">
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

        <main className={`page__main page__main--index ${offers.length === 0 ? `page__main--index-empty` : ``}`}>
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesList cities = {cities} activeCity = {city} onMenuClick = {onMenuClick}/>
            </section>
          </div>
          <div className="cities">
            {offers.length > 0 ? (<div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {city}</b>
                <Sort activeSortType = {sortType} onSortTypeClick = {onSortTypeClick}/>
                <div className="cities__places-list places__list tabs__content">
                  <PlaceList
                    offers = {offers}
                    cardType = {CardType.CITY}
                    onPlaceCardHeaderClick = {onPlaceCardHeaderClick}
                    onPlaceCardHover = {onPlaceCardHover}
                  />
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    offers = {offers}
                    activeCity = {city}
                    hoveredCardId = {hoveredCardId}
                  />
                </section>
              </div>
            </div>) : ``}
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
  sortType: PropTypes.string.isRequired,
  hoveredCardId: PropTypes.number.isRequired,
  onPlaceCardHover: PropTypes.func.isRequired,
  onPlaceCardHeaderClick: PropTypes.func.isRequired,
  onMenuClick: PropTypes.func.isRequired,
  onSortTypeClick: PropTypes.func.isRequired,
};
