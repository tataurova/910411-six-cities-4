export const getOfferInfo = (offers, offerId) => {
  const idNumber = Number(offerId);
  for (let key in offers) {
    if (offers.hasOwnProperty(key)) {
      const offer = offers[key].filter((item) => item.id === idNumber)[0];
      if (offer) {
        return {
          offer,
          nearOffers: offers[key],
        };
      }
    }
  }
  return {};
};
