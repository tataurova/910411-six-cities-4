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
  };
};
