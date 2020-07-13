import {extend} from "./utils/common.js";
import offers from "./mocks/offers.js";

const initialCity = Object.keys(offers)[0];

const initialState = {
  city: initialCity,
  offers: offers[initialCity],
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
        offers: offers[action.payload],
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
