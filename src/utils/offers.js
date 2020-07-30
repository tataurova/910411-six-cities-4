import {getOffer} from "../adapters/offers.js";

export const getOfferInfo = (offers, offerId) => {
  const idNumber = Number(offerId);
  return {
    offer: offers.filter((item) => item.id === idNumber)[0],
    nearOffers: offers.filter((item) => item.id !== idNumber),
  };
};

export const getUpdatedOffers = (serverOffer, offers) => {
  const renewedOffer = getOffer(serverOffer);
  const oldOffer = offers.filter((item) => item.id === renewedOffer.id)[0];
  const oldOfferIndex = offers.indexOf(oldOffer);
  offers.splice(oldOfferIndex, 1, renewedOffer);
  return offers;
};
