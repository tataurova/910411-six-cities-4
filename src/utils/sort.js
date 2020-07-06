import {SortType} from "../const.js";

export const sortOffers = (sortType, offers) => {
  switch (sortType) {
    case SortType.DEFAULT:
      return offers;
    case SortType.PRICE_UP:
      return offers.sort((a, b) => a.price - b.price);
    case SortType.PRICE_DOWN:
      return offers.sort((a, b) => b.price - a.price);
    case SortType.RATING_DOWN:
      return offers.sort((a, b) => b.rating - a.rating);
  }
  return offers;
};

export const getSortTypeName = (sortType) => {
  switch (sortType) {
    case SortType.PRICE_UP:
      return `Price: low to high`;
    case SortType.PRICE_DOWN:
      return `Price: high to low`;
    case SortType.RATING_DOWN:
      return `Top rated first`;
  }
  return `Popular`;
};
