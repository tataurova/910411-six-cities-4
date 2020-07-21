import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {reducer, ActionType, ActionCreator, Operation} from "./data.js";
import offers, {serverOffers} from "../../mocks/offers";

const api = createAPI(() => {});
const mockData = serverOffers;

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
      .onGet(`/hotels`)
      .reply(200, mockData);

    const dispatch = jest.fn();
    const offersLoader = Operation.loadOffers();

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
      });
  });

  it(`Should make a error 401 from server`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
      .onGet(`/hotels`)
      .reply(401, [{fake: true}]);

    expect(api.get(`/hotels`)).rejects.toThrow();
  });

  it(`Should make a error 404 from server`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
      .onGet(`/hotels`)
      .reply(404, [{fake: true}]);
    expect(api.get(`/hotels`)).rejects.toThrow();
  });
});

describe(`Reducer tests`, () => {
  it(`The reducer without additional parameters should return the initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      isLoading: false,
      offers: [],
    });
  });

  it(`The reducer should change the initial values to new ones`, () => {
    expect(reducer({
      isLoading: false,
      offers: [],
    }, {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    })).toEqual({
      isLoading: false,
      offers,
    });

    expect(reducer({
      isLoading: false,
    }, {
      type: ActionType.SET_LOADING_STATUS,
      payload: true,
    })).toEqual({
      isLoading: true,
    });
  });
});

describe(`Action creator works correctly`, () => {
  it(`Action creator of the load offers returns correct action`, () => {
    expect(ActionCreator.loadOffers(offers)).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    });
  });
});


