import * as React from 'react';
import Sort from "../sort/sort";
import PlaceList from "../place-list/place-list";
import {CardType, DEFAULT_SORT_STATE} from "../../const";
import {placeCardType} from "../../types";
import withSelectedItem from "../../hocs/with-selected-item/with-selected-item";

const SortWithSelectedItem = withSelectedItem(Sort, DEFAULT_SORT_STATE);

interface Props {
  offers: placeCardType[];
  city: string;
  state: string;
  onPlaceCardHover: () => void;
  onChangeItem: () => void;
}

const SortedPlaceList: React.FunctionComponent<Props> = ({offers, city, onPlaceCardHover, state, onChangeItem}: Props) => {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {city}</b>
      <SortWithSelectedItem
        activeSortType = {state}
        onSortTypeClick = {onChangeItem}
      />
      <PlaceList
        offers = {offers}
        activeSortType = {state}
        cardType = {CardType.CITY}
        onPlaceCardHover = {onPlaceCardHover}
      />
    </section>
  );
};

export default SortedPlaceList;
