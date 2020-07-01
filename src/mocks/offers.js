import {cityCoordinates} from "./cities.js";

const offers = [
  {
    id: 1,
    title: `Canal View Prinsengracht`,
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
  }, {
    id: 3,
    title: `Canal View Prinsengracht`,
    type: `Apartment`,
    price: 132,
    rating: 4,
    premium: false,
    photo: `img/apartment-02.jpg`,
    bedrooms: 1,
    adults: 2,
    additional: [`Wifi`, `Cable TV`, `Towels`],
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
    id: 4,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    price: 180,
    rating: 5,
    premium: true,
    photo: `img/apartment-03.jpg`,
    bedrooms: 4,
    adults: 8,
    additional: [`Wifi`, `Heating`, `Kitchen`, `Cable TV`, `Fridge`, `Dishwasher`, `Baby seat`, `Coffee machine`],
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
  }, {
    id: 5,
    title: `Mock title`,
    type: `Apartment`,
    price: 1800,
    rating: 2,
    premium: false,
    photo: `img/apartment-03.jpg`,
    bedrooms: 4,
    adults: 8,
    additional: [`Wifi`, `Heating`, `Kitchen`, `Cable TV`, `Fridge`, `Dishwasher`, `Baby seat`, `Coffee machine`],
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
  }, {
    id: 6,
    title: `Mock title`,
    type: `Apartment`,
    price: 18000,
    rating: 1,
    premium: false,
    photo: `img/apartment-03.jpg`,
    bedrooms: 4,
    adults: 8,
    additional: [`Wifi`, `Heating`, `Kitchen`, `Cable TV`, `Fridge`, `Dishwasher`, `Baby seat`, `Coffee machine`],
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
  }];

const random = (min, max) => {
  return min + Math.random() * (max - min);
};

const generateOffers = (basicOffers, city) => {
  let cityOffers = [];
  basicOffers.forEach((offer) => {
    const cityHorCoordinate = cityCoordinates[city][0] + (random(1, 9) * 0.002);
    const cityVertCoordinate = cityCoordinates[city][1] + (random(1, 9) * 0.002);
    const cityOffer = Object.assign({}, offer, {coordinates: [cityHorCoordinate, cityVertCoordinate]});
    cityOffers.push(cityOffer);
  });
  return cityOffers;
};

const offersCologne = generateOffers(offers.slice(0, 2), `Cologne`);
const offersBrussels = generateOffers(offers.slice(0, 3), `Brussels`);
const offersAmsterdam = generateOffers(offers.slice(0, 4), `Amsterdam`);
const offersHamburg = generateOffers(offers.slice(0, 5), `Hamburg`);
const offersDusseldorf = generateOffers(offers, `Dusseldorf`);

export default {
  Paris: [],
  Cologne: offersCologne,
  Brussels: offersBrussels,
  Amsterdam: offersAmsterdam,
  Hamburg: offersHamburg,
  Dusseldorf: offersDusseldorf,
};
