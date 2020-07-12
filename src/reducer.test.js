import {reducer, ActionType, ActionCreator} from "./reducer.js";
import offers from "./mocks/offers.js";
// import {SortType} from "./const.js";

describe(`Reducer tests`, () => {
  it(`The reducer without additional parameters should return the initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      city: `Paris`,
      offers: offers[`Paris`],
    });
  });

  it(`The reducer should change the initial values to new ones`, () => {
    expect(reducer({
      city: `Paris`,
      offers: offers[`Paris`],
    }, {
      type: ActionType.CHANGE_CITY,
      payload: `Cologne`,
    })).toEqual({
      city: `Cologne`,
      offers: offers[`Cologne`],
    });

    // expect(reducer({
    //   city: `Paris`,
    //   offers: offers[`Paris`],
    //   sortType: SortType.DEFAULT,
    //   hoveredCardId: 0,
    // }, {
    //   type: ActionType.CHANGE_SORT_TYPE,
    //   payload: SortType.PRICE_UP,
    // })).toEqual({
    //   city: `Paris`,
    //   offers: offers[`Paris`],
    //   sortType: SortType.PRICE_UP,
    //   hoveredCardId: 0,
    // });

    // expect(reducer({
    //   city: `Paris`,
    //   offers: offers[`Paris`],
    //   sortType: SortType.DEFAULT,
    //   hoveredCardId: 0,
    // }, {
    //   type: ActionType.CHANGE_HOVERED_CARD,
    //   payload: 1,
    // })).toEqual({
    //   city: `Paris`,
    //   offers: offers[`Paris`],
    //   sortType: SortType.DEFAULT,
    //   hoveredCardId: 1,
    // });
  });
});

describe(`Action creator works correctly`, () => {
  it(`Action creator of the city change returns correct action`, () => {
    const city = `Paris`;
    expect(ActionCreator.changeCity(city)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: city,
    });
  });

  // it(`Action creator for changing the sorting type returns correct action`, () => {
  //   const checkedSortType = SortType.PRICE_UP;
  //   expect(ActionCreator.changeSortType(checkedSortType)).toEqual({
  //     type: ActionType.CHANGE_SORT_TYPE,
  //     payload: `price-up`,
  //   });
  // });

  // it(`Action creator for changing the ID of a hovered card returns correct action`, () => {
  //   const id = 1;
  //   expect(ActionCreator.changeHoveredCard(id)).toEqual({
  //     type: ActionType.CHANGE_HOVERED_CARD,
  //     payload: 1,
  //   });
  // });
});
