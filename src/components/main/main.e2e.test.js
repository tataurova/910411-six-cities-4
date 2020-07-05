import React from "react";
import {mount} from "enzyme";
import Main from "./main.jsx";
import offers from "../../mocks/offers";
import cities from "../../mocks/cities";
import {SortType} from "../../const.js";
import {BrowserRouter} from "react-router-dom";

describe(`<Main />`, () => {
  it(`The header click handler should be called`, () => {
    const onPlaceCardHeaderClick = jest.fn();
    const onMenuClick = jest.fn();
    const activeCity = `Amsterdam`;
    const cityOffers = offers[activeCity];
    const main = mount(
        <BrowserRouter>
          <Main
            offers = {cityOffers}
            cities = {cities}
            city = {activeCity}
            sortType = {SortType.DEFAULT}
            hoveredCardId = {1}
            onPlaceCardHover = {() => {}}
            onPlaceCardHeaderClick = {onPlaceCardHeaderClick}
            onMenuClick = {onMenuClick}
            onSortTypeClick = {() => {}}
          />
        </BrowserRouter>
    );

    const headerElements = main.find(`.place-card__name`);
    headerElements.forEach((header) => header.props().onClick());

    expect(onPlaceCardHeaderClick.mock.calls.length).toBe(headerElements.length);

  });
});

