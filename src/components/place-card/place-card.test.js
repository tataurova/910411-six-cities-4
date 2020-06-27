import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";
import {BrowserRouter} from "react-router-dom";
import {CardType} from "../../const.js";

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

const createComponent = (props) => renderer.create(
    <BrowserRouter>
      <PlaceCard
        {...props}
      />
    </BrowserRouter>
);

describe(`<PlaceCard />`, () => {
  it(`Should PlaceCard render correctly with a field Premium equal True`, () => {
    const tree = createComponent({
      offer: offerWithPremium,
      cardType: CardType.CITY,
      onHover: () => {},
      onPlaceCardHeaderClick: () => {},
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should PlaceCard render correctly with a field Premium equal False`, () => {
    const tree = createComponent({
      offer: offerWithoutPremium,
      cardType: CardType.CITY,
      onHover: () => {},
      onPlaceCardHeaderClick: () => {},
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
