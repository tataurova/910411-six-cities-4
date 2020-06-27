import React from "react";
import renderer from "react-test-renderer";
import PlaceFullCard from "./place-full-card.jsx";
import {MapSettings} from "../../const.js";
import {BrowserRouter} from "react-router-dom";

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
    coordinates: [52.3909553943508, 4.85309666406198],
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
  },
];

describe(`<PlaceFullCard />`, () => {
  it(`Should PlaceFullCard render correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <PlaceFullCard
              offers={offers}
              mapSettings={MapSettings}
              id = {`1`}
              onPlaceCardHeaderClick = {() => {}}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
