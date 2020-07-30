import {createSelector} from "reselect";
import NameSpace from "../name-space.js";

export const getOffers = (state) => {
  return state[NameSpace.DATA].offers;
};

export const getMemoizedOffers = createSelector(
    getOffers,
    (offers) => {
      return offers;
    }
);
