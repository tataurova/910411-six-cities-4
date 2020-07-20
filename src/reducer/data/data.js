import {extend} from "../../utils/common.js";
import {getOffer} from "../../adapters/offers.js";

const initialState = {
  isLoading: false,
  offers: [],
  cities: [],
  city: ``,
  cityOffers: [],
};

const ActionType = {
  SET_LOADING_STATUS: `SET_LOADING_STATUS`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  CHANGE_CITY: `CHANGE_CITY`,
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
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.setLoadingStatus(true));
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));
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
      const offers = action.payload.map((offer) => getOffer(offer));
      const cities = new Set(action.payload.map((offer) => offer.city.name));
      const firstCity = [...cities][0];
      return extend(state, {
        isLoading: false,
        offers,
        cities: [...cities],
        city: firstCity,
        cityOffers: offers.filter((el) => el.city === firstCity),
      });
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
        cityOffers: state.offers.filter((offer) => offer.city === action.payload),
      });
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
