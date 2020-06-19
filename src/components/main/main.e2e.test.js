import React from "react";
import {shallow} from "enzyme";
import Main from "./main.jsx";
import {PLACES_COUNT} from "../../const.js";
import offers from "../../mocks/offers";

describe(`<Main />`, () => {
  it(`The header click handler should be called`, () => {
    const onPlaceCardHeaderClick = jest.fn();

    const main = shallow(
        <Main
          offers={offers}
          placeCount={PLACES_COUNT}
          onPlaceCardHeaderClick={() => {}}
        />
    );

    const headerElements = main.find(`.place-card__name`);
    headerElements.forEach((header) => header.props().onClick());

    expect(onPlaceCardHeaderClick.mock.calls.length).toBe(headerElements.length);

  });
});

