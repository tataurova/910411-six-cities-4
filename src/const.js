export const MapSettings = {
  ICON_URL: `img/pin.svg`,
  ACTIVE_ICON_URL: `img/pin-active.svg`,
  ICON_SIZE: [30, 30],
};

export const CardType = {
  CITY: `cities`,
  NEAR_PLACE: `near-places`,
};

export const SortType = {
  DEFAULT: `default`,
  PRICE_UP: `price-up`,
  PRICE_DOWN: `price-down`,
  RATING_DOWN: `rating-down`,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const AppRoute = {
  MAIN: `/`,
  LOGIN: `/login`,
  PLACE_FULL_CARD: `/offer`,
  FAVORITES: `/favorites`,
};

export const LoginInput = {
  EMAIL: `email`,
  PASSWORD: `password`,
};

export const RatingValue = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
};

export const SORT_TYPES = [
  `Popular`,
  `Price: low to high`,
  `Price: high to low`,
  `Top rated first`,
];

export const INITIAL_STATE_HOVERED_CARD = 0;

export const NEAR_PLACES_MAX_COUNT = 3;

export const MAP_NEAR_PLACES_MAX_COUNT = 2;

export const DEFAULT_HOVERED_CARD = 0;

export const DEFAULT_SORT_STATE = false;

export const MIN_ERROR_CODE = 399;

export const MAX_TIMEOUT = 5000;

export const LOGIN_MIN_LENGTH = 6;

export const PASSWORD_MIN_LENGTH = 1;

export const DEFAULT_RATING = 0;

