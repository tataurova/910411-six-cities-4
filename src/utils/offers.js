export const getOfferInfo = (offers, offerId) => {
  const idNumber = Number(offerId);
  return {
    offer: offers.filter((item) => item.id === idNumber)[0],
    nearOffers: offers.filter((item) => item.id !== idNumber),
  };
  // for (let key in offers) {
  //   if (offers.hasOwnProperty(key)) {
  //     const offer = offers[key].filter((item) => item.id === idNumber)[0];
  //     if (offer) {
  //       return {
  //         offer,
  //         nearOffers: offers[key].filter((item) => item.id !== offer.id),
  //       };
  //     }
  //   }
  // }
  // return {};
};
