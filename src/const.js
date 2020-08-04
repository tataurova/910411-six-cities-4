export const MapSettings = {
  ICON_URL: `img/pin.svg`,
  ACTIVE_ICON_URL: `img/pin-active.svg`,
  ICON_SIZE: [30, 30],
};

export const CardType = {
  CITY: `cities`,
  NEAR_PLACE: `near-places`,
  FAVORITE: `favorites`,
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
  FAVORITE: `/favorite`,
  HOTELS: `/hotels`,
  COMMENTS: `/comments`,
  NEARBY: `/nearby`,
  SERVER_URL: `https://4.react.pages.academy/six-cities`,
};

export const LoginInput = {
  EMAIL: `email`,
  PASSWORD: `password`,
};

export const Error = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  SERVICE_UNAVAILABLE: 503,
  TIMEOUT_ERROR: `timeout_error`,
};

export const FavoriteStatus = {
  ADD: 1,
  REMOVE: 0,
};

export const RatingValue = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
};

export const CommentLength = {
  START_TYPING: 1,
  MIN: 50,
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

export const MAX_TIMEOUT = 5000;

export const LOGIN_MIN_LENGTH = 6;

export const PASSWORD_MIN_LENGTH = 1;

export const DEFAULT_RATING = 0;

export const SHOW_REVIEW_MAX_NUMBER = 10;

export const DEFAULT_ERROR_STATUS = false;

export const SUCCESS_RESPONSE_CODE = 200;

export const SHOW_ERROR_TIMEOUT = 3000;

