import {SortType} from "./const.js";
import {extend, sortOffers, getArrayOfOffers} from "./utils.js";
import offers from "./mocks/offers.js";

describe(`utils tests`, () => {
  it(`The sort function should return sorted offers`, () => {
    const firstOffer = {
      id: 1,
      price: 10,
      rating: 4,
    };
    const secondOffer = {
      id: 2,
      price: 30,
      rating: 5,
    };
    const thirdOffer = {
      id: 3,
      price: 5,
      rating: 1,
    };
    const unsortedOffers = [firstOffer, secondOffer, thirdOffer];
    const sortedRatingDownOffers = [secondOffer, firstOffer, thirdOffer];
    const sortedPriceDownOffers = [secondOffer, firstOffer, thirdOffer];
    const sortedPriceUpOffers = [thirdOffer, firstOffer, secondOffer];
    expect(sortOffers(SortType.DEFAULT, unsortedOffers)).toEqual(unsortedOffers);
    expect(sortOffers(SortType.RATING_DOWN, unsortedOffers)).toEqual(sortedRatingDownOffers);
    expect(sortOffers(SortType.PRICE_DOWN, unsortedOffers)).toEqual(sortedPriceDownOffers);
    expect(sortOffers(SortType.PRICE_UP, unsortedOffers)).toEqual(sortedPriceUpOffers);
    expect(sortOffers(`unknown type`, offers)).toEqual(offers);
  });

  it(`The extend function should return a new object with 2 new value`, () => {
    const state = {
      city: `Paris`,
      offers: offers[`Paris`],
      sortType: SortType.DEFAULT,
      hoveredCardId: 0,
    };
    const changes = {
      city: `Amsterdam`,
      offers: offers[`Amsterdam`],
    };
    const result = {
      city: `Amsterdam`,
      offers: offers[`Amsterdam`],
      sortType: SortType.DEFAULT,
      hoveredCardId: 0,
    };
    expect(extend(state, changes)).toEqual(result);
  });

  it(`The getArrayOfOffers function accepts an array of arrays and returns an array`, () => {
    const testArray = [[1, 2, 3], [4, 5, 6]];
    const testResult = [1, 2, 3, 4, 5, 6];
    expect(getArrayOfOffers(testArray)).toEqual(testResult);
  });
});
