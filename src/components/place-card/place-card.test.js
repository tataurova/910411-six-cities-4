import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";

const offer = {
  id: 1,
  name: `Canal View Prinsengracht`,
  type: `Apartment`,
  price: 120,
  rating: 4,
  premium: true,
  photo: `img/apartment-01.jpg`,
};

describe(`<PlaceCard />`, () => {
  it(`Should PlaceCard render correctly`, () => {
    const tree = renderer
      .create(<PlaceCard
        offer={offer}
        onHover={() => {}}
        handleHeaderClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
