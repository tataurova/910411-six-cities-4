import {reducer, ActionType, ActionCreator} from "./reducer.js";
import offers from "./mocks/offers.js";
import {SortType} from "./const.js";

describe(`Reducer tests`, () => {
  it(`The reducer without additional parameters should return the initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      city: `Paris`,
      offers: offers[`Paris`],
      sortType: SortType.DEFAULT,
      hoveredCardId: 0,
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
      offers: offers[`Cologne`]
    });
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
});
