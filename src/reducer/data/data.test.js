import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {reducer, ActionType, Operation, ActionCreator} from "./data.js";
import offers, {serverOffers} from "../../mocks/offers";

const api = createAPI(() => {});
// const mockData = offers;

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
      .onGet(`/hotels`)
      .reply(200, [{fake: true}]);

    const dispatch = jest.fn();
    const offersLoader = Operation.loadOffers();

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a error 401 from server`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
      .onGet(`/hotels`)
      .reply(401, [{fake: true}]);

    api.get(`/hotels`)
      .then(() => {
        expect(api).toThrowError(`Request failed with status code 401`);
      });
  });

  it(`Should make a error 404 from server`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
      .onGet(`/hotels`)
      .reply(404, [{fake: true}]);

    api.get(`/hotels`)
      .then(() => {
        expect(api).toThrowError(`Request failed with status code 404`);
      });
  });
});

describe(`Reducer tests`, () => {
  it(`The reducer without additional parameters should return the initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      isLoading: false,
      offers: [],
      cities: [],
      city: ``,
      cityOffers: [],
    });
  });

  it(`The reducer should change the initial values to new ones`, () => {
    expect(reducer({
      isLoading: false,
      offers,
      cities: [],
      city: `Paris`,
      cityOffers: [],
    }, {
      type: ActionType.CHANGE_CITY,
      payload: `Cologne`,
    })).toEqual({
      isLoading: false,
      offers,
      cities: [],
      city: `Cologne`,
      cityOffers: offers,
    });

    expect(reducer({
      isLoading: false,
      offers: [],
      cities: [],
      city: ``,
      cityOffers: [],
    }, {
      type: ActionType.LOAD_OFFERS,
      payload: serverOffers,
    })).toEqual({
      isLoading: false,
      offers,
      cities: [`Cologne`],
      city: `Cologne`,
      cityOffers: offers,
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

  it(`Action creator of the load offers returns correct action`, () => {
    expect(ActionCreator.loadOffers(offers)).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    });
  });
});


