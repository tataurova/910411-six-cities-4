import React from "react";
import {mount} from "enzyme";
import PlaceCard from "./place-card.jsx";
import {CardType} from "../../const.js";
import configureStore from "redux-mock-store";
import {BrowserRouter} from "react-router-dom";
import {mapDispatchToProps} from "./place-card.jsx";
import PlaceList from "../place-list/place-list.jsx";
import offers from "../../mocks/offers.js";
import {SortType} from "../../const.js";

const offer = {
  id: 1,
  title: `Canal View Prinsengracht`,
  type: `Apartment`,
  price: 120,
  rating: 4,
  premium: true,
  photo: `img/apartment-01.jpg`,
};

const newOffer = {
  id: 1,
  title: `Canal View Prinsengracht`,
  type: `Apartment`,
  price: 120,
  rating: 4,
  premium: false,
  photo: `img/apartment-01.jpg`,
};

const mockStore = configureStore([]);
const initialState = {
  onBookmarkButtonCLick: jest.fn(),
  loadFavoriteOffers: jest.fn(),
};
const store = mockStore(initialState);

describe(`<PlaceCard />`, () => {
  const onPlaceCardHover = jest.fn((id) => {
    return id;
  });
  const main = mount(
      <BrowserRouter>
        <PlaceCard
          store={store}
          offer={offer}
          cardType={CardType.CITY}
          onPlaceCardHover={onPlaceCardHover}
        />
      </BrowserRouter>
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

  it(`When the function is called the dispatch is called`, () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).onBookmarkButtonCLick(1, true);
    expect(dispatch).toHaveBeenCalledTimes(1);

  });

  it(`When the function is called the dispatch is called`, () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).loadFavoriteOffers();
    expect(dispatch).toHaveBeenCalledTimes(1);

  });

  it(`When changes prop offer, the method shouldComponentUpdate is called with true`, () => {
    const component = main.find(`PlaceCard`);
    const instance = component.instance();
    jest.spyOn(instance, `shouldComponentUpdate`);

    main.setProps({
      children: (
        <PlaceCard
          store={store}
          offer={newOffer}
          cardType={CardType.CITY}
          onPlaceCardHover={onPlaceCardHover}
        />
      ),
    });
    main.update();

    expect(instance.shouldComponentUpdate).toHaveBeenCalledTimes(1);
    expect(instance.shouldComponentUpdate).toHaveReturnedWith(true);
    jest.clearAllMocks();

  });

  it(`When doesnt change prop offer, the method shouldComponentUpdate is called with false`, () => {
    const tree = mount(
        <BrowserRouter>
          <PlaceList
            store = {store}
            offers={offers}
            activeSortType={SortType.DEFAULT}
            cardType={CardType.NEAR_PLACE}
            onPlaceCardHover={() => {}}
          />
        </BrowserRouter>
    );

    const component = tree.find(`PlaceCard`).at(1);
    const instance = component.instance();
    jest.spyOn(instance, `shouldComponentUpdate`);

    tree.setProps({
      children: (
        <PlaceList
          store = {store}
          offers={offers.slice(1)}
          activeSortType={SortType.DEFAULT}
          cardType={CardType.NEAR_PLACE}
          onPlaceCardHover={() => {}}
        />
      ),
    });
    tree.update();

    expect(instance.shouldComponentUpdate).toHaveBeenCalledTimes(1);
    expect(instance.shouldComponentUpdate).toHaveReturnedWith(false);
  });
});
