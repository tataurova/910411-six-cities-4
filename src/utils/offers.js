import {getOffer} from "../adapters/offers.js";

export const findOffer = (offers, offerId) => {
  const idNumber = Number(offerId);
  return offers.filter((item) => item.id === idNumber)[0];
};

export const getUpdatedOffers = (serverOffer, offers) => {
  const renewedOffer = getOffer(serverOffer);
  const oldOffer = offers.filter((item) => item.id === renewedOffer.id)[0];
  const oldOfferIndex = offers.indexOf(oldOffer);
  offers.splice(oldOfferIndex, 1, renewedOffer);
  return offers;
};
