import {extend} from "../../utils/common.js";
import {getOffer} from "../../adapters/offers.js";
import {ActionCreator as AppActionCreator} from "../app/app.js";

const initialState = {
  isLoading: false,
  offers: [],
};

const ActionType = {
  SET_LOADING_STATUS: `SET_LOADING_STATUS`,
  LOAD_OFFERS: `LOAD_OFFERS`,
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
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.setLoadingStatus(true));
    return api.get(`/hotels`)
      .then((response) => {
        const offers = response.data.map((offer) => getOffer(offer));
        dispatch(ActionCreator.loadOffers(offers));
        dispatch(AppActionCreator.setCities(offers));
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
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
