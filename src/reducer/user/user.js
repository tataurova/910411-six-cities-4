import {AuthorizationStatus} from "../../const.js";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: ``,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  WRITE_USER: `WRITE_USER`,
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  writeUser: (user) => {
    return {
      type: ActionType.WRITE_USER,
      payload: user,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
    case ActionType.WRITE_USER:
      return Object.assign({}, state, {
        user: action.payload,
      });
  }

  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((answer) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        return answer;
      })
      .then((answer) => {
        dispatch(ActionCreator.writeUser(answer.data.email));
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.writeUser(response.data.email));
      });
  },
};

export {
  ActionCreator,
  ActionType,
  AuthorizationStatus,
  Operation,
  reducer,
};
