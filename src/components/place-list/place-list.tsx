import * as React from 'react';
import PlaceCard from "../place-card/place-card";
import {placeCardType} from "../../types";
import {sortOffers} from "../../utils/sort";
import {SortType} from "../../const";

interface Props {
  offers: placeCardType[];
  activeSortType: string;
  cardType: string;
  onPlaceCardHover?: () => void;
}

const PlaceList: React.FunctionComponent<Props> = (props: Props) => {
  const offers = (props.activeSortType === SortType.DEFAULT) ? props.offers : sortOffers(props.activeSortType, props.offers);
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          {...props} />
      ))}
    </div>
  );
};

export default PlaceList;
