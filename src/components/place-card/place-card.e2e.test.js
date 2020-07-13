import React from "react";
import {shallow} from "enzyme";
import PlaceCard from "./place-card.jsx";
import {CardType} from "../../const.js";

const offer = {
  id: 1,
  title: `Canal View Prinsengracht`,
  type: `Apartment`,
  price: 120,
  rating: 4,
  premium: true,
  photo: `img/apartment-01.jpg`,
};

describe(`<PlaceCard />`, () => {
  const onPlaceCardHover = jest.fn((id) => {
    return id;
  });

  const main = shallow(
      <PlaceCard
        offer={offer}
        cardType={CardType.CITY}
        onPlaceCardHover={onPlaceCardHover}
      />
  );

  it(`When you hover the cursor over the card the handler is called with id of realty object`, () => {

    const card = main.find(`.place-card`);
    card.simulate(`mouseenter`);
    expect(onPlaceCardHover).toHaveBeenCalledWith(1);

  });

  it(`When you move the cursor from the card the handler is called with id 0`, () => {

    const card = main.find(`.place-card`);
    card.simulate(`mouseleave`);
    expect(onPlaceCardHover).toHaveBeenCalledWith(0);

  });
});
