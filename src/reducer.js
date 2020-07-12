// import {sortOffers} from "./utils/sort.js";
import {extend} from "./utils/common.js";
import offers from "./mocks/offers.js";
// import {SortType} from "./const.js";

const initialCity = Object.keys(offers)[0];

const initialState = {
  city: initialCity,
  offers: offers[initialCity],
  // sortType: SortType.DEFAULT,
  // hoveredCardId: 0,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  // CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  // CHANGE_HOVERED_CARD: `CHANGE_HOVERED_CARD`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  // changeSortType: (sortType) => ({
  //   type: ActionType.CHANGE_SORT_TYPE,
  //   payload: sortType,
  // }),
  // changeHoveredCard: (id) => ({
  //   type: ActionType.CHANGE_HOVERED_CARD,
  //   payload: id,
  // }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
        offers: offers[action.payload],
      });
    // case ActionType.CHANGE_SORT_TYPE:
    //   return extend(state, {
    //     sortType: action.payload,
    //     offers: sortOffers(action.payload, offers[state.city]),
    //   });
    // case ActionType.CHANGE_HOVERED_CARD:
    //   return extend(state, {
    //     hoveredCardId: action.payload,
    //   });
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
