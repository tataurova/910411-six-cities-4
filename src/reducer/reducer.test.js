import reducer from "./reducer.js";
import {AuthorizationStatus, DEFAULT_ERROR_STATUS} from "../const.js";

describe(`Reducer tests`, () => {
  it(`The combine reducer without additional parameters should return the initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      DATA: {
        isFetching: false,
        offers: [],
        error: DEFAULT_ERROR_STATUS,
        favoriteOffers: [],
        nearbyOffers: [],
        reviews: [],
      },
      APP: {
        cities: [],
        city: ``,
      },
      AUTH: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        user: ``,
      },
    });
  });
});
