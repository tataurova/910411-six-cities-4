import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {reducer, ActionType, ActionCreator, Operation} from "./data.js";
import offers, {serverOffers} from "../../mocks/offers.js";
import {reviews, serverReviews} from "../../mocks/reviews.js";
import {AppRoute} from "../../const.js";
import {DEFAULT_ERROR_STATUS, SUCCESS_RESPONSE_CODE} from "../../const.js";
import {FavoriteStatus} from "../../const";

const api = createAPI(() => {});
const mockData = serverOffers;

describe(`Operation for API to /hotels works correctly`, () => {
  const offersLoader = Operation.loadOffers();
  const dispatch = jest.fn();

  it(`Should make a correct API call to /hotels`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
      .onGet(AppRoute.HOTELS)
      .reply(SUCCESS_RESPONSE_CODE, mockData);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
      });
  });

  it(`Should make a call of action type for error from server`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
      .onGet(AppRoute.HOTELS)
      .reply(Error.NOT_FOUND, mockData);

    return offersLoader(dispatch, () => {}, api)
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });

  it(`Should make a error 401 from server`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
      .onGet(AppRoute.HOTELS)
      .reply(Error.UNAUTHORIZED, [{fake: true}]);

    expect(api.get(AppRoute.HOTELS)).rejects.toThrowError();
  });

  it(`Should make a error 404 from server`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
      .onGet(AppRoute.HOTELS)
      .reply(Error.NOT_FOUND, [{fake: true}]);
    expect(api.get(AppRoute.HOTELS)).rejects.toThrowError();
  });
});

describe(`Operation for API to /hotels/id/nearby works correctly`, () => {
  const id = 1;
  const nearbyOffersLoader = Operation.loadNearbyOffers(id);
  const dispatch = jest.fn();

  it(`Should make a correct API call to /hotels/id/nearby`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
      .onGet(`${AppRoute.HOTELS}/${id}${AppRoute.NEARBY}`)
      .reply(SUCCESS_RESPONSE_CODE, mockData);

    return nearbyOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
      });
  });

  it(`Should make a call of action type for error from server`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
      .onGet(`${AppRoute.HOTELS}/${id}${AppRoute.NEARBY}`)
      .reply(Error.NOT_FOUND, mockData);

    return nearbyOffersLoader(dispatch, () => {}, api)
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });

  it(`Should make a error 401 from server`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
      .onGet(`${AppRoute.HOTELS}/${id}${AppRoute.NEARBY}`)
      .reply(Error.UNAUTHORIZED, [{fake: true}]);

    expect(api.get(`${AppRoute.HOTELS}/${id}${AppRoute.NEARBY}`)).rejects.toThrowError();
  });
});

describe(`Operation for API to /favorite works correctly`, () => {
  const favoriteOffersLoader = Operation.loadFavoriteOffers();
  const dispatch = jest.fn();

  it(`Should make a correct API call to /favorite`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
      .onGet(AppRoute.FAVORITE)
      .reply(SUCCESS_RESPONSE_CODE, mockData);

    return favoriteOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
      });
  });

  it(`Should make a call of action type for error from server`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
      .onGet(AppRoute.FAVORITE)
      .reply(Error.NOT_FOUND, mockData);

    return favoriteOffersLoader(dispatch, () => {}, api)
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });

  it(`Should make a error 401 from server`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
      .onGet(AppRoute.FAVORITE)
      .reply(Error.UNAUTHORIZED, [{fake: true}]);

    expect(api.get(AppRoute.FAVORITE)).rejects.toThrowError();
  });
});

describe(`Operation for API to /comments/1 works correctly, post request`, () => {
  const id = 1;
  const commentSender = Operation.sendComment({comment: `test`, rating: 0}, id);
  const dispatch = jest.fn();

  it(`Should make a correct API call to /comments`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
      .onPost(`${AppRoute.COMMENTS}/${id}`)
      .reply(SUCCESS_RESPONSE_CODE, [{comment: `test`, rating: 0}])
      .onGet(`${AppRoute.COMMENTS}/${id}`)
      .reply(SUCCESS_RESPONSE_CODE, serverReviews);

    return commentSender(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(6);
      });
  });

  it(`Should make a call of action type for error from server`, function () {

    const apiMock = new MockAdapter(api);
    apiMock
      .onPost(`${AppRoute.COMMENTS}/${id}`)
      .reply(Error.BAD_REQUEST, [{fake: true}]);

    return commentSender(dispatch, () => {}, api)
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
  });

  it(`Should make a error 400 from server`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
      .onPost(`${AppRoute.COMMENTS}/${id}`)
      .reply(Error.BAD_REQUEST, [{fake: true}]);

    expect(api.post(`${AppRoute.COMMENTS}/${id}`)).rejects.toThrowError();
  });
});

describe(`Operation for API to /comments/1 works correctly, get request`, () => {
  const dispatch = jest.fn();
  const id = 1;
  const reviewsLoader = Operation.loadReviews(id);

  it(`Should make a correct API call to /comments`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
      .onGet(`${AppRoute.COMMENTS}/${id}`)
      .reply(SUCCESS_RESPONSE_CODE, serverReviews);

    return reviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
      });
  });

  it(`Should make a call of action type for error from server`, function () {

    const apiMock = new MockAdapter(api);
    apiMock
      .onGet(`${AppRoute.COMMENTS}/${id}`)
      .reply(Error.BAD_REQUEST, [{fake: true}]);

    return reviewsLoader(dispatch, () => {}, api)
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
  });

  it(`Should make a error 400 from server`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
      .onGet(`${AppRoute.COMMENTS}/${id}`)
      .reply(Error.BAD_REQUEST, [{fake: true}]);

    expect(api.get(`${AppRoute.COMMENTS}/${id}`)).rejects.toThrowError();
  });
});

describe(`Operation for API to /favorite/id works correctly`, () => {
  const dispatch = jest.fn();
  const mockOffer = serverOffers[0];
  const getState = jest.fn(() => {
    return {DATA: {offers}};
  });
  const statusParameter = FavoriteStatus.ADD;
  const id = `1`;

  it(`Should make a correct API call to /favorite/1/1`, function () {
    const favoriteFlagSender = Operation.setToFavorite(1, 1);
    const apiMock = new MockAdapter(api);
    apiMock
      .onPost(`${AppRoute.FAVORITE}/${id}/${statusParameter}`)
      .reply(SUCCESS_RESPONSE_CODE, mockOffer);

    return favoriteFlagSender(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
      });
  });

  it(`Should make a correct API call to /favorite/1/0`, function () {
    jest.clearAllMocks();
    const favoriteFlagSender = Operation.setToFavorite(1, 1);
    const apiMock = new MockAdapter(api);
    apiMock
      .onPost(`${AppRoute.FAVORITE}/${id}/${statusParameter}`)
      .reply(SUCCESS_RESPONSE_CODE, mockOffer);

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
      .onPost(`${AppRoute.FAVORITE}/${id}/${statusParameter}`)
      .reply(Error.BAD_REQUEST, [{fake: true}]);

    return favoriteFlagSender(dispatch, () => {}, api)
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
  });

  it(`Should make a error 400 from server`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
      .onPost(`${AppRoute.FAVORITE}/${id}/${statusParameter}`)
      .reply(Error.BAD_REQUEST, [{fake: true}]);

    expect(api.post(`${AppRoute.FAVORITE}/${id}/${statusParameter}`)).rejects.toThrowError();
  });
});

describe(`Reducer tests`, () => {
  it(`The reducer without additional parameters should return the initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      isFetching: false,
      offers: [],
      error: DEFAULT_ERROR_STATUS,
      favoriteOffers: [],
      nearbyOffers: [],
      reviews: [],
    });
  });

  it(`The reducer should change the initial values to new ones`, () => {
    expect(reducer({
      isFetching: false,
      offers: [],
      error: DEFAULT_ERROR_STATUS,
      favoriteOffers: [],
      nearbyOffers: [],
      reviews: [],
    }, {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    })).toEqual({
      isFetching: false,
      offers,
      error: DEFAULT_ERROR_STATUS,
      favoriteOffers: [],
      nearbyOffers: [],
      reviews: [],
    });

    expect(reducer({
      isFetching: false,
      offers: [],
      favoriteOffers: [],
      error: DEFAULT_ERROR_STATUS,
      nearbyOffers: [],
      reviews: [],
    }, {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: offers,
    })).toEqual({
      isFetching: false,
      offers: [],
      favoriteOffers: offers,
      error: DEFAULT_ERROR_STATUS,
      nearbyOffers: [],
      reviews: [],
    });

    expect(reducer({
      isFetching: false,
      offers: [],
      favoriteOffers: [],
      error: DEFAULT_ERROR_STATUS,
      nearbyOffers: [],
      reviews: [],
    }, {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    })).toEqual({
      isFetching: false,
      offers: [],
      favoriteOffers: [],
      error: DEFAULT_ERROR_STATUS,
      nearbyOffers: [],
      reviews,
    });

    expect(reducer({
      isFetching: false,
      offers: [],
      favoriteOffers: [],
      error: DEFAULT_ERROR_STATUS,
      nearbyOffers: [],
      reviews: [],
    }, {
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: offers,
    })).toEqual({
      isFetching: false,
      offers: [],
      favoriteOffers: [],
      error: DEFAULT_ERROR_STATUS,
      nearbyOffers: offers,
      reviews: [],
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
      error: DEFAULT_ERROR_STATUS,
    }, {
      type: ActionType.WRITE_ERROR,
      payload: Error.UNAUTHORIZED,
    })).toEqual({
      error: Error.UNAUTHORIZED,
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

  it(`Action creator of the load favorite offers returns correct action`, () => {
    expect(ActionCreator.loadFavoriteOffers(offers)).toEqual({
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: offers,
    });
  });

  it(`Action creator of the nearby offers returns correct action`, () => {
    expect(ActionCreator.loadNearbyOffers(offers)).toEqual({
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: offers,
    });
  });

  it(`Action creator of the reviews returns correct action`, () => {
    expect(ActionCreator.loadReviews(reviews)).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    });
  });

  it(`Action creator of the writing error returns correct action`, () => {
    expect(ActionCreator.writeError(Error.UNAUTHORIZED)).toEqual({
      type: ActionType.WRITE_ERROR,
      payload: Error.UNAUTHORIZED,
    });
  });

  it(`Action creator of the setting fetching status returns correct action`, () => {
    expect(ActionCreator.setFetchingStatus(true)).toEqual({
      type: ActionType.SET_FETCHING_STATUS,
      payload: true,
    });
  });
});
