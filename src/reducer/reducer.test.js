import reducer from "./reducer.js";

describe(`Reducer tests`, () => {
  it(`The combine reducer without additional parameters should return the initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      DATA: {
        isLoading: false,
        offers: [],
      },
      APP: {
        cities: [],
        city: ``,
      },
    });
  });
});
