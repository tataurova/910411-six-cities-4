import {extend} from "../../utils/common.js";
import {getOffer} from "../../adapters/offers.js";
import {ActionCreator as AppActionCreator} from "../app/app.js";

const initialState = {
  isLoading: false,
  offers: [],
  error: -1,
};

const ActionType = {
  SET_LOADING_STATUS: `SET_LOADING_STATUS`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  WRITE_ERROR: `WRITE_ERROR`,
};

const ActionCreator = {
  setLoadingStatus: (status) => {
    return {
      type: ActionType.SET_LOADING_STATUS,
      payload: status,
    };
  },
  loadOffers: (offers) => {
    return {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };
  },
  writeError: (error) => {
    return {
      type: ActionType.WRITE_ERROR,
      payload: error,
    };
  },
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.setLoadingStatus(true));
    return api.get(`/hotels`)
      .then((response) => {
        const offers = response.data.map((offer) => getOffer(offer));
        dispatch(ActionCreator.loadOffers(offers));
        dispatch(AppActionCreator.setCities(offers));
      })
      .catch((error) => {
        dispatch(ActionCreator.writeError(error.status));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_LOADING_STATUS:
      return extend(state, {
        isLoading: action.payload,
      });
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        isLoading: false,
        offers: action.payload,
      });
    case ActionType.WRITE_ERROR:
      return extend(state, {
        error: action.payload,
        isLoading: false,
      });
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
