export const getOffer = (data) => {
  return {
    id: data.id,
    title: data.title,
    city: data.city.name,
    cityCoordinates: [data.city.location.latitude, data.city.location.longitude],
    cityZoom: data.city.location.zoom,
    coordinates: [data.location.latitude, data.location.longitude],
    type: data.type,
    price: data.price,
    rating: data.rating,
    premium: data.is_premium,
    favorite: data.is_favorite,
    photo: data.preview_image,
    bedrooms: data.bedrooms,
    adults: data.max_adults,
    additional: data.goods,
    details: data.description,
    owner: {
      photo: data.host.avatar_url,
      name: data.host.name,
      isSuper: data.host.is_pro,
    },
    photos: data.images,
    reviews: [ // todo reviews from server
      {
        name: `Max`,
        photo: `img/avatar-max.jpg`,
        rating: 4,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.
        The building is green and from 18th century.`,
        date: `April 2019`,
      },
    ],
  };
};
