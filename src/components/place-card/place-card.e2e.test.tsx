import * as React from "react";
import {mount, configure} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import {Provider} from "react-redux";
import PlaceCard from "./place-card";
import {CardType} from "../../const";
import configureStore from "redux-mock-store";
import {BrowserRouter} from "react-router-dom";
import {mapDispatchToProps} from "./place-card";
import PlaceList from "../place-list/place-list";
import offers from "../../mocks/offers";
import {SortType} from "../../const";
import {mockFunction} from "../../utils/common";

configure({adapter: new Adapter()});

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
      <Provider store={store}>
        <BrowserRouter>
          <PlaceCard
            offer={offer}
            cardType={CardType.CITY}
            onPlaceCardHover={onPlaceCardHover}
          />
        </BrowserRouter>
      </Provider>
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
        <BrowserRouter>
          <PlaceCard
            store={store}
            offer={newOffer}
            cardType={CardType.CITY}
            onPlaceCardHover={onPlaceCardHover}
          />
        </BrowserRouter>
      ),
    });
    main.update();

    expect(instance.shouldComponentUpdate).toHaveBeenCalledTimes(1);
    expect(instance.shouldComponentUpdate).toHaveReturnedWith(true);
    jest.clearAllMocks();

  });

  it(`When doesnt change prop offer, the method shouldComponentUpdate is called with false`, () => {
    const tree = mount(
        <Provider store = {store}>
          <BrowserRouter>
            <PlaceList
              offers={offers}
              activeSortType={SortType.DEFAULT}
              cardType={CardType.NEAR_PLACE}
              onPlaceCardHover={mockFunction}
            />
          </BrowserRouter>
        </Provider>
    );

    const component = tree.find(`PlaceCard`).at(1);
    const instance = component.instance();
    jest.spyOn(instance, `shouldComponentUpdate`);

    tree.setProps({
      children: (
        <BrowserRouter>
          <PlaceList
            offers={offers.slice(1)}
            activeSortType={SortType.DEFAULT}
            cardType={CardType.NEAR_PLACE}
            onPlaceCardHover={mockFunction}
          />
        </BrowserRouter>
      ),
    });
    tree.update();

    expect(instance.shouldComponentUpdate).toHaveBeenCalledTimes(1);
    expect(instance.shouldComponentUpdate).toHaveReturnedWith(false);
  });
});
