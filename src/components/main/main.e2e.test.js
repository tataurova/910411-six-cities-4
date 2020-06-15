import React from "react";
import {shallow} from "enzyme";
import Main from "./main.jsx";
import {PLACES_COUNT, PLACE_NAMES} from "../../const.js";

describe(`<Main />`, () => {
  it(`The header click handler should be called`, () => {
    const handleHeaderClick = jest.fn();

    const main = shallow(
        <Main
          placesCount={PLACES_COUNT}
          placeNames={PLACE_NAMES}
          handleHeaderClick={handleHeaderClick}
        />
    );

    const headerElements = main.find(`.place-card__name`);
    headerElements.forEach((header) => header.props().onClick());

    expect(handleHeaderClick.mock.calls.length).toBe(headerElements.length);

  });
});

