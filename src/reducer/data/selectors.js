import {createSelector} from "reselect";

export const getCityOffers = (state) => {
  return state.cityOffers;
};

export const getActiveCity = (state) => {
  return state.city;
};

export const getMemoizedCityOffers = createSelector(
    getCityOffers,
    getActiveCity,
    (offers, city) => {
      return offers.filter((offer) => offer.city === city);
    }
);
