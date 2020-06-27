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
  it(`When you hover the cursor over the card the handler is called with id of realty object`, () => {
    const onPlaceCardHeaderClick = jest.fn();
    const handleChangeActiveCard = jest.fn((id) => {
      return id;
    });
    const main = shallow(
        <PlaceCard
          offer={offer}
          cardType={CardType.CITY}
          onHover={handleChangeActiveCard}
          onPlaceCardHeaderClick={onPlaceCardHeaderClick}
        />
    );
    const card = main.find(`.place-card`);
    card.simulate(`mouseover`);
    expect(handleChangeActiveCard).toHaveBeenCalledWith(1);

  });
  it(`When you click on the card header the handler is called with id of realty object`, () => {
    const onPlaceCardHeaderClick = jest.fn((id) => {
      return id;
    });
    const handleChangeActiveCard = jest.fn(() => {});
    const main = shallow(
        <PlaceCard
          offer={offer}
          cardType={CardType.CITY}
          onHover={handleChangeActiveCard}
          onPlaceCardHeaderClick={onPlaceCardHeaderClick}
        />
    );
    const header = main.find(`.place-card__name`);
    header.simulate(`click`);
    expect(onPlaceCardHeaderClick).toHaveBeenCalledWith(1);
  });
});
