import * as React from 'react';
import SortedPlaceList from "../sorted-place-list/sorted-place-list";
import Map from "../map/map";
import {Offer} from "../../types";
import {SortType} from "../../const";
import withSelectedItem from "../../hocs/with-selected-item/with-selected-item";

const SortedPlaceListWithSelectedItem = withSelectedItem(SortedPlaceList, SortType.DEFAULT);

interface Props {
  offers: Offer[];
  city: string;
  state: number;
  onChangeItem: () => void;
}

const PlaceListContainer: React.FunctionComponent<Props> = (props: Props) => {
  const {offers, city, state, onChangeItem} = props;
  return (
    <div className="cities__places-container container">
      <SortedPlaceListWithSelectedItem
        offers = {offers}
        city = {city}
        onPlaceCardHover = {onChangeItem}
      />
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map
            offers = {offers}
            activeCity = {city}
            hoveredCardId = {state}
          />
        </section>
      </div>
    </div>
  );
};

export default PlaceListContainer;
