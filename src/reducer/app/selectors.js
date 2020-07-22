import {createSelector} from "reselect";
import NameSpace from "../name-space.js";

export const getOffers = (state) => {
  return state[NameSpace.DATA].offers;
};

export const getActiveCity = (state) => {
  return state[NameSpace.APP].city;
};

export const getMemoizedCityOffers = createSelector(
    getOffers,
    getActiveCity,
    (offers, city) => {
      return offers.filter((offer) => offer.city === city);
    }
);
