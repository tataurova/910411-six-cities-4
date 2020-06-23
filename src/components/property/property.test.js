import React from "react";
import renderer from "react-test-renderer";
import Property from "./property.jsx";

const offer = {
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
};

describe(`<Property />`, () => {
  it(`Should Property render correctly`, () => {
    const tree = renderer
      .create(<Property
        offer={offer}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
