import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {reducer, ActionType, ActionCreator, Operation} from "./data.js";
import offers, {serverOffers} from "../../mocks/offers";

const api = createAPI(() => {});
const mockData = serverOffers;

describe(`Operation for API to /hotels works correctly`, () => {
  const dispatch = jest.fn();
  const offersLoader = Operation.loadOffers();

  it(`Should make a correct API call to /hotels`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
      .onGet(`/hotels`)
      .reply(200, mockData);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
      });
  });

  it(`Should make a call of action type for error from server`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
      .onGet(`/hotels`)
      .reply(404, mockData);

    return offersLoader(dispatch, () => {}, api)
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });

  it(`Should make a error 401 from server`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
      .onGet(`/hotels`)
      .reply(401, [{fake: true}]);

    expect(api.get(`/hotels`)).rejects.toThrowError();
  });

  it(`Should make a error 404 from server`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
      .onGet(`/hotels`)
      .reply(404, [{fake: true}]);
    expect(api.get(`/hotels`)).rejects.toThrowError();
  });
});

describe(`Operation for API to /comments works correctly`, () => {
  const id = 1;
  const dispatch = jest.fn();
  const commentSender = Operation.sendComment({comment: `test`, rating: 0}, id);

  it(`Should make a correct API call to /comments`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
      .onPost(`/comments/1`)
      .reply(200, [{comment: `test`, rating: 0}]);

    return commentSender(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
      });
  });

  it(`Should make a call of action type for error from server`, function () {

    const apiMock = new MockAdapter(api);
    apiMock
      .onPost(`/comments/1`)
      .reply(400, [{fake: true}]);

    return commentSender(dispatch, () => {}, api)
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
  });

  it(`Should make a error 400 from server`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
      .onPost(`/comments/1`)
      .reply(400, [{fake: true}]);

    expect(api.post(`/comments/1`)).rejects.toThrowError();
  });
});

describe(`Operation for API to /favorite works correctly`, () => {
  const dispatch = jest.fn();
  const mockOffer = serverOffers[0];
  const getState = jest.fn(() => {
    return {DATA: {offers}};
  });
  it(`Should make a correct API call to /favorite/1/1`, function () {
    const favoriteFlagSender = Operation.setToFavorite(1, 1);
    const apiMock = new MockAdapter(api);
    apiMock
      .onPost(`/favorite/1/1`)
      .reply(200, mockOffer);

    return favoriteFlagSender(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
      });
  });

  it(`Should make a correct API call to /favorite/1/0`, function () {
    jest.clearAllMocks();
    const favoriteFlagSender = Operation.setToFavorite(1, 0);
    const apiMock = new MockAdapter(api);
    apiMock
      .onPost(`/favorite/1/0`)
      .reply(200, mockOffer);

    return favoriteFlagSender(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
      });
  });

  it(`Should make a call of action type for error from server`, function () {
    jest.clearAllMocks();
    const favoriteFlagSender = Operation.setToFavorite(1, 1);
    const apiMock = new MockAdapter(api);
    apiMock
      .onPost(`/favorite/1/1`)
      .reply(400, [{fake: true}]);

    return favoriteFlagSender(dispatch, () => {}, api)
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
  });

  it(`Should make a error 400 from server`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
      .onPost(`/favorite/1/1`)
      .reply(400, [{fake: true}]);

    expect(api.post(`/favorite/1/1`)).rejects.toThrowError();
  });
});

describe(`Reducer tests`, () => {
  it(`The reducer without additional parameters should return the initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      isFetching: false,
      offers: [],
      error: -1,
      favoriteOffers: [],
    });
  });

  it(`The reducer should change the initial values to new ones`, () => {
    expect(reducer({
      isFetching: false,
      offers: [],
      error: -1,
    }, {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    })).toEqual({
      isFetching: false,
      offers,
      error: -1,
    });

    expect(reducer({
      isFetching: false,
    }, {
      type: ActionType.SET_FETCHING_STATUS,
      payload: true,
    })).toEqual({
      isFetching: true,
    });

    expect(reducer({
      error: -1,
    }, {
      type: ActionType.WRITE_ERROR,
      payload: 404,
    })).toEqual({
      error: 404,
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

  it(`Action creator of the writing error returns correct action`, () => {
    expect(ActionCreator.writeError(404)).toEqual({
      type: ActionType.WRITE_ERROR,
      payload: 404,
    });
  });

  it(`Action creator of the setting fetching status returns correct action`, () => {
    expect(ActionCreator.setFetchingStatus(true)).toEqual({
      type: ActionType.SET_FETCHING_STATUS,
      payload: true,
    });
  });
});
