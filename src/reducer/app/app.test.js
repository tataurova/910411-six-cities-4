import {reducer, ActionType, ActionCreator} from "./app.js";
import offers from "../../mocks/offers";

describe(`Reducer tests`, () => {
  it(`The reducer without additional parameters should return the initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      cities: [],
      city: ``,
    });
  });

  it(`The reducer should change the initial values to new ones`, () => {
    expect(reducer({
      cities: [],
      city: `Paris`,
    }, {
      type: ActionType.CHANGE_CITY,
      payload: `Cologne`,
    })).toEqual({
      cities: [],
      city: `Cologne`,
    });

    expect(reducer({
      cities: [],
      city: ``,
    }, {
      type: ActionType.SET_CITIES,
      payload: [`Cologne`],
    })).toEqual({
      cities: [`Cologne`],
      city: `Cologne`,
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

  it(`Action creator of the set cities returns correct action`, () => {
    expect(ActionCreator.setCities(offers)).toEqual({
      type: ActionType.SET_CITIES,
      payload: [`Cologne`],
    });
  });
});

describe(`Operation works correctly`, () => {
  it(`Operation function loadOffers returns `, () => {
    const city = `Paris`;
    expect(ActionCreator.changeCity(city)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: city,
    });
  });

  it(`Action creator of the city change returns correct action`, () => {
    expect(ActionCreator.setCities(offers)).toEqual({
      type: ActionType.SET_CITIES,
      payload: [`Cologne`],
    });
  });
});


