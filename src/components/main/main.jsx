import React from 'react';
import PropTypes from 'prop-types';
import {placeCardType} from "../../../types.js";
import CitiesList from "../cities-list/cities-list.jsx";
import NoPlaces from "../no-places/no-places.jsx";
import PlaceListContainer from "../place-list-container/place-list-container.jsx";

const Main = ({offers, cities, city, onMenuClick}) => {
  return (
    <>
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
