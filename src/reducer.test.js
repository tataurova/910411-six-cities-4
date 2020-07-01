import {reducer, ActionType, ActionCreator} from "./reducer.js";
import offers from "./mocks/offers.js";

describe(`Reducer tests`, () => {
  it(`The reducer without additional parameters should return the initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      city: `Amsterdam`,
      offers: offers[`Amsterdam`],
    });
  });

  it(`The reducer should change the initial values to new ones`, () => {
    expect(reducer({
      city: `Amsterdam`,
      offers: offers[`Amsterdam`],
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
