import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";

const offerWithPremium = {
  id: 1,
  name: `Canal View Prinsengracht`,
  type: `Apartment`,
  price: 120,
  rating: 4,
  premium: true,
  photo: `img/apartment-01.jpg`,
};

const offerWithoutPremium = Object.assign(offerWithPremium, {premium: false});

describe(`<PlaceCard />`, () => {
  it(`Should PlaceCard render correctly with a field Premium equal True`, () => {
    const tree = renderer
      .create(<PlaceCard
        offer={offerWithPremium}
        onHover={() => {}}
        onPlaceCardHeaderClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should PlaceCard render correctly with a field Premium equal False`, () => {
    const tree = renderer
      .create(<PlaceCard
        offer={offerWithoutPremium}
        onHover={() => {}}
        onPlaceCardHeaderClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
