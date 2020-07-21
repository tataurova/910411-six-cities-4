export const getOfferInfo = (offers, offerId) => {
  const idNumber = Number(offerId);
  return {
    offer: offers.filter((item) => item.id === idNumber)[0],
    nearOffers: offers.filter((item) => item.id !== idNumber),
  };
};
