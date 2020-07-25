import {reducer, ActionType, ActionCreator} from "./user.js";
import {AuthorizationStatus} from "../../const.js";
import MockAdapter from "axios-mock-adapter";
import {Operation} from "./user.js";
import {createAPI} from "../../api.js";

describe(`Reducer tests`, () => {
  it(`The reducer without additional parameters should return the initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      user: ``,
    });
  });

  it(`The reducer should change the initial values to new ones`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      user: ``,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `AUTH`,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      user: ``,
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.AUTH,
      user: ``,
    }, {
      type: ActionType.WRITE_USER,
      payload: `test@test.ru`,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      user: `test@test.ru`,
    });
  });
});

describe(`Action creator works correctly`, () => {
  it(`Action creator for the require authorization returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(`NO_AUTH`)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `NO_AUTH`,
    });
  });

  it(`Action creator for the writing user returns correct action`, () => {
    expect(ActionCreator.writeUser(`test@test.ru`)).toEqual({
      type: ActionType.WRITE_USER,
      payload: `test@test.ru`,
    });
  });
});

describe(`Operation work correctly`, () => {
  const api = createAPI(() => {});
  it(`Should make a correct get request to /login`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
      .onGet(`/login`)
      .reply(200, [{fake: true}]);

    const dispatch = jest.fn();
    const loginChecker = Operation.checkAuth();

    return loginChecker(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
  });

  it(`Should make a call of action type for login post request`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
      .onPost(`/login`)
      .reply(200, [{login: `test`, password: `123`}]);

    const dispatch = jest.fn();
    const loginMaker = Operation.login({email: `test`, password: `123`});

    return loginMaker(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
  });

  it(`Should make a error from server`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
      .onGet(`/login`)
      .reply(400, [{fake: true}]);

    expect(api.get(`/login`)).rejects.toThrowError();
  });
});
