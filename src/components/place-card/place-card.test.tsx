import * as React from "react";
import * as renderer from "react-test-renderer";
import PlaceCard from "./place-card";
import {BrowserRouter} from "react-router-dom";
import {CardType} from "../../const";
import configureStore from "redux-mock-store";
import {mockFunction} from "../../utils/common";

const offerWithPremium = {
  id: 1,
  title: `Canal View Prinsengracht`,
  type: `Apartment`,
  price: 120,
  rating: 4,
  premium: true,
  photo: `img/apartment-01.jpg`,
};

const offerWithoutPremium = Object.assign(offerWithPremium, {premium: false});
const mockStore = configureStore([]);
const initialState = {
  onBookmarkButtonCLick: mockFunction,
  loadFavoriteOffers: mockFunction,
};
const store = mockStore(initialState);

const createComponent = (props) => renderer.create(
    <BrowserRouter>
      <PlaceCard
        store = {store}
        {...props}
      />
    </BrowserRouter>
);

describe(`<PlaceCard />`, () => {
  it(`Should PlaceCard render correctly with a field Premium equal True`, () => {
    const tree = createComponent({
      offer: offerWithPremium,
      cardType: CardType.CITY,
      onPlaceCardHover: mockFunction,
      onBookmarkButtonCLick: mockFunction,
      loadFavoriteOffers: mockFunction,
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should PlaceCard render correctly with a field Premium equal False`, () => {
    const tree = createComponent({
      offer: offerWithoutPremium,
      cardType: CardType.CITY,
      onPlaceCardHover: mockFunction,
      onBookmarkButtonCLick: mockFunction,
      loadFavoriteOffers: mockFunction,
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
