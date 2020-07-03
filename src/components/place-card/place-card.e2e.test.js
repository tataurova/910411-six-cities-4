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
  const onPlaceCardHeaderClick = jest.fn();
  const onPlaceCardHover = jest.fn((id) => {
    return id;
  });
  it(`When you hover the cursor over the card the handler is called with id of realty object`, () => {
    const main = shallow(
        <PlaceCard
          offer={offer}
          cardType={CardType.CITY}
          onPlaceCardHeaderClick={onPlaceCardHeaderClick}
          onPlaceCardHover={onPlaceCardHover}
        />
    );
    const card = main.find(`.place-card`);
    card.simulate(`mouseover`);
    expect(onPlaceCardHover).toHaveBeenCalledWith(1);

  });

  it(`When you move the cursor from the card the handler is called with id 0`, () => {
    const main = shallow(
        <PlaceCard
          offer={offer}
          cardType={CardType.CITY}
          onPlaceCardHeaderClick={onPlaceCardHeaderClick}
          onPlaceCardHover={onPlaceCardHover}
        />
    );
    const card = main.find(`.place-card`);
    card.simulate(`mouseout`);
    expect(onPlaceCardHover).toHaveBeenCalledWith(0);

  });

  it(`When you click on the card header the handler is called with id of realty object`, () => {
    const main = shallow(
        <PlaceCard
          offer={offer}
          cardType={CardType.CITY}
          onPlaceCardHeaderClick={onPlaceCardHeaderClick}
          onPlaceCardHover={onPlaceCardHover}
        />
    );
    const header = main.find(`.place-card__name`);
    header.simulate(`click`);
    expect(onPlaceCardHeaderClick).toHaveBeenCalledWith(1);
  });
});
