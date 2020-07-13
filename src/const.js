export const MapSettings = {
  ICON_URL: `img/pin.svg`,
  ACTIVE_ICON_URL: `img/pin-active.svg`,
  ICON_SIZE: [30, 30],
  ZOOM: 12,
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
