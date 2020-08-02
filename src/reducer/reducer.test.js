import reducer from "./reducer.js";

describe(`Reducer tests`, () => {
  it(`The combine reducer without additional parameters should return the initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      DATA: {
        isFetching: false,
        offers: [],
        error: -1,
        favoriteOffers: [],
        nearbyOffers: [],
        reviews: [],
      },
      APP: {
        cities: [],
        city: ``,
      },
      AUTH: {
        authorizationStatus: `NO_AUTH`,
        user: ``,
      },
    });
  });
});
