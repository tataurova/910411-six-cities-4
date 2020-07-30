import {SortType} from "./const.js";
import {extend} from "./utils/common.js";
import {sortOffers, getSortTypeName} from "./utils/sort.js";
import {getOfferInfo, getUpdatedOffers} from "./utils/offers.js";
import offers from "./mocks/offers.js";
import {serverOffers} from "./mocks/offers";

describe(`Utils tests`, () => {
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
      city: `Cologne`,
      offers,
      sortType: SortType.DEFAULT,
      hoveredCardId: 0,
    };
    const changes = {
      city: `Amsterdam`,
    };
    const result = {
      city: `Amsterdam`,
      offers,
      sortType: SortType.DEFAULT,
      hoveredCardId: 0,
    };
    expect(extend(state, changes)).toEqual(result);
  });

  it(`getOfferInfo function should return an offer and offers nearby`, () => {
    const firstOffer = {
      id: 1,
      city: `firstCity`,
    };
    const secondOffer = {
      id: 2,
      city: `firstCity`,
    };
    const thirdOffer = {
      id: 3,
      city: `secondCity`,
    };
    const fourthOffer = {
      id: 4,
      city: `secondCity`,
    };
    const mockOffers = [firstOffer, secondOffer, thirdOffer, fourthOffer];
    const offerId = `4`;
    const result = {
      offer: fourthOffer,
      nearOffers: [firstOffer, secondOffer, thirdOffer],
    };
    expect(getOfferInfo(mockOffers, offerId)).toEqual(result);
  });

  it(`getSortTypeName function should return a name of sortType`, () => {

    expect(getSortTypeName(SortType.RATING_DOWN)).toEqual(`Top rated first`);
    expect(getSortTypeName(SortType.PRICE_DOWN)).toEqual(`Price: high to low`);
    expect(getSortTypeName(SortType.PRICE_UP)).toEqual(`Price: low to high`);
    expect(getSortTypeName(SortType.DEFAULT)).toEqual(`Popular`);
    expect(getSortTypeName(`unknown sort type`)).toEqual(`Popular`);
  });

  it(`getUpdatedOffers function should return updatedOffers`, () => {
    const serverOffer = serverOffers[0];
    expect(getUpdatedOffers(serverOffer, offers)).toEqual(offers);
  });
});
