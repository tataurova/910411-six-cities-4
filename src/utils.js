import {SortType} from "./const.js";
import leaflet from "leaflet";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

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

export const getArrayOfOffers = (citiesOffers) => {
  let allOffers = [];
  Object.values(citiesOffers).forEach((item) => {
    allOffers = allOffers.concat(item);
  });
  return allOffers;
};

export const addMarkersToMap = (offers, hoveredCardId, icon, activeIcon, map) => {
  const markers = [];
  offers.forEach((offer) => {
    const marker = leaflet.marker(offer.coordinates, {icon: offer.id === hoveredCardId ? activeIcon : icon});
    markers.push(marker);
  });
  const markersGroup = leaflet.layerGroup(markers).addTo(map);
  return markersGroup;
};

export const getNearOffers = (offers, id, city) => {
  const numberId = Number(id);
  return offers.filter((offer) => offer.id !== numberId && offer.city === city);
};

export const findOfferById = (offers, id) => {
  return offers.filter((offer) => offer.id === id)[0];
};
