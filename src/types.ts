export interface Offer {
  id: number,
  title: string,
  type: string,
  city: string,
  cityCoordinates: number[],
  cityZoom: number,
  price: number,
  rating: number,
  favorite: boolean,
  premium: boolean,
  photo: string,
  bedrooms: number,
  adults: number,
  additional: string[],
  details: string,
  owner: {
    photo: string,
    name: string,
    isSuper: boolean,
  },
  photos: string[],
}

export interface Review {
  id: number,
  name: string,
  photo: string,
  rating: number,
  text: string,
  date: Date,
}
