export default [
  {
    id: 1,
    title: `Canal View Prinsengracht`,
    city: `Cologne`,
    cityCoordinates: [50.938361, 6.959974],
    cityZoom: 13,
    coordinates: [50.960361, 6.967974],
    type: `Apartment`,
    price: 120,
    rating: 4,
    premium: true,
    photo: `img/apartment-01.jpg`,
    bedrooms: 3,
    adults: 6,
    additional: [`Wifi`, `Heating`, `Kitchen`],
    details: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.
     The building is green and from 18th century. An independent House, strategically located between Rembrand
     Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    owner: {
      photo: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      isSuper: true,
    },
    photos: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/room.jpg`
    ],
    reviews: [
      {
        name: `Max`,
        photo: `img/avatar-max.jpg`,
        rating: 4,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.
        The building is green and from 18th century.`,
        date: `April 2019`,
      },
    ],
  }, {
    id: 2,
    title: `Wood and stone place`,
    city: `Cologne`,
    cityCoordinates: [50.938361, 6.959974],
    cityZoom: 13,
    coordinates: [50.913361, 6.9509739999999995],
    type: `Private room`,
    price: 80,
    rating: 4,
    premium: false,
    photo: `img/room.jpg`,
    bedrooms: 2,
    adults: 4,
    additional: [`Wifi`, `Kitchen`, `Cable TV`, `Washing machine`],
    details: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.
     The building is green and from 18th century. An independent House, strategically located between Rembrand
     Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    owner: {
      photo: `img/avatar-max.jpg`,
      name: `Max`,
      isSuper: false,
    },
    photos: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/room.jpg`
    ],
    reviews: [
      {
        name: `Max`,
        photo: `img/avatar-max.jpg`,
        rating: 4,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.
        The building is green and from 18th century.`,
        date: `April 2019`,
      },
    ],
  }
];

/* eslint-disable */
export const serverOffers = [
  {
    id: 1,
    title: `Canal View Prinsengracht`,
    city: {
      name: `Cologne`,
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.960361,
      longitude: 6.967974,
    },
    type: `Apartment`,
    price: 120,
    rating: 4,
    is_premium: true,
    preview_image: `img/apartment-01.jpg`,
    bedrooms: 3,
    max_adults: 6,
    goods: [`Wifi`, `Heating`, `Kitchen`],
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.
     The building is green and from 18th century. An independent House, strategically located between Rembrand
     Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    host: {
      id: 1,
      avatar_url: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      is_pro: true,
    },
    images: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/room.jpg`
    ],
    reviews: [
      {
        name: `Max`,
        photo: `img/avatar-max.jpg`,
        rating: 4,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.
        The building is green and from 18th century.`,
        date: `April 2019`,
      },
    ],
  }, {
    id: 2,
    title: `Wood and stone place`,
    city: {
      name: `Cologne`,
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.913361,
      longitude: 6.9509739999999995,
    },
    type: `Private room`,
    price: 80,
    rating: 4,
    is_premium: false,
    preview_image: `img/room.jpg`,
    bedrooms: 2,
    max_adults: 4,
    goods: [`Wifi`, `Kitchen`, `Cable TV`, `Washing machine`],
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.
     The building is green and from 18th century. An independent House, strategically located between Rembrand
     Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    host: {
      id: 2,
      avatar_url: `img/avatar-max.jpg`,
      name: `Max`,
      is_pro: false,
    },
    images: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/room.jpg`
    ],
    reviews: [
      {
        name: `Max`,
        photo: `img/avatar-max.jpg`,
        rating: 4,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.
        The building is green and from 18th century.`,
        date: `April 2019`,
      },
    ],
  }
];
