import {extend, sortOffers} from "./utils.js";
import offers from "./mocks/offers.js";
import {SortType} from "./const.js";

const initialCity = Object.keys(offers)[0];

const initialState = {
  city: initialCity,
  offers: offers[initialCity],
  sortType: SortType.DEFAULT,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
        offers: offers[action.payload],
      });
    case ActionType.CHANGE_SORT_TYPE:
      return extend(state, {
        sortType: action.payload,
        offers: sortOffers(action.payload, offers[state.city]),
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
