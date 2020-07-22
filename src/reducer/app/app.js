import {extend} from "../../utils/common.js";

const initialState = {
  cities: [],
  city: ``,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SET_CITIES: `SET_CITIES`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  setCities: (offers) => ({
    type: ActionType.SET_CITIES,
    payload: [...new Set(offers.map((offer) => offer.city))],
  }),
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });
    case ActionType.SET_CITIES:
      return extend(state, {
        cities: action.payload,
        city: action.payload[0],
      });
  }

  return state;
};

export {reducer, ActionType};
