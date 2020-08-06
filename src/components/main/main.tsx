import * as React from 'react';
import CitiesList from "../cities-list/cities-list";
import NoPlaces from "../no-places/no-places";
import PlaceListContainer from "../place-list-container/place-list-container";
import withSelectedItem from "../../hocs/with-selected-item/with-selected-item";
import {DEFAULT_HOVERED_CARD} from "../../const";
import {Offer} from "../../types";

const PlaceListContainerWithSelectedItem = withSelectedItem(PlaceListContainer, DEFAULT_HOVERED_CARD);

interface Props {
  offers: Offer[];
  cities: string[];
  city: string;
  onMenuClick: () => void;
  isFetching: boolean;
}

const Main: React.FunctionComponent<Props> = ({offers, cities, city, onMenuClick, isFetching}: Props) => {
  return (
    <main className={`page__main page__main--index ${offers.length === 0 ? `page__main--index-empty` : ``}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesList cities = {cities} activeCity = {city} onMenuClick = {onMenuClick}/>
        </section>
      </div>
      <div className="cities">
        {offers.length > 0 ? (<PlaceListContainerWithSelectedItem offers = {offers} city = {city} />) : ``}
        {offers.length > 0 || <NoPlaces activeCity = {city} isFetching = {isFetching}/>}
      </div>
    </main>
  );
};

export default Main;
