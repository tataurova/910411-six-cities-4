import {extend} from "../../utils/common.js";
import {getOffer} from "../../adapters/offers.js";
import {getComment} from "../../adapters/comments.js";
import {ActionCreator as AppActionCreator} from "../app/app.js";
import {getUpdatedOffers} from "../../utils/offers.js";
import {SHOW_REVIEW_MAX_NUMBER, DEFAULT_ERROR_STATUS, FavoriteStatus, AppRoute} from "../../const.js";

const initialState = {
  isFetching: false,
  offers: [],
  favoriteOffers: [],
  nearbyOffers: [],
  reviews: [],
  error: DEFAULT_ERROR_STATUS,
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_FAVORITE_OFFERS: `LOAD_FAVORITE_OFFERS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  WRITE_ERROR: `WRITE_ERROR`,
  SET_FETCHING_STATUS: `SET_FETCHING_STATUS`,
  LOAD_NEARBY_OFFERS: `LOAD_NEARBY_OFFERS`,
};

const ActionCreator = {
  setFetchingStatus: (status) => {
    return {
      type: ActionType.SET_FETCHING_STATUS,
      payload: status,
    };
  },
  loadOffers: (offers) => {
    return {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };
  },
  loadNearbyOffers: (offers) => {
    return {
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: offers,
    };
  },
  loadReviews: (reviews) => {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };
  },
  loadFavoriteOffers: (offers) => {
    return {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: offers,
    };
  },
  writeError: (error) => {
    return {
      type: ActionType.WRITE_ERROR,
      payload: error,
    };
  },
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.setFetchingStatus(true));
    return api.get(AppRoute.HOTELS)
      .then((response) => {
        const offers = response.data.map((offer) => getOffer(offer));
        dispatch(ActionCreator.setFetchingStatus(false));
        dispatch(ActionCreator.loadOffers(offers));
        dispatch(AppActionCreator.setCities(offers));
      })
      .catch((error) => {
        dispatch(ActionCreator.writeError(error.response.status));
        dispatch(ActionCreator.setFetchingStatus(false));
      });
  },
  loadFavoriteOffers: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.setFetchingStatus(true));
    return api.get(AppRoute.FAVORITE)
      .then((response) => {
        const favoriteOffers = response.data.map((offer) => getOffer(offer));
        dispatch(ActionCreator.setFetchingStatus(false));
        dispatch(ActionCreator.loadFavoriteOffers(favoriteOffers));
      })
      .catch((error) => {
        dispatch(ActionCreator.writeError(error.response.status));
        dispatch(ActionCreator.setFetchingStatus(false));
      });
  },
  loadReviews: (id) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setFetchingStatus(true));
    return api.get(`${AppRoute.COMMENTS}/${id}`)
      .then((response) => {
        const reviews = response.data.map((review) => getComment(review));
        const sortedReviews = reviews.sort((a, b) => b.date - a.date);
        dispatch(ActionCreator.setFetchingStatus(false));
        dispatch(ActionCreator.loadReviews(sortedReviews.slice(0, SHOW_REVIEW_MAX_NUMBER)));
      })
      .catch((error) => {
        dispatch(ActionCreator.writeError(error.response.status));
        dispatch(ActionCreator.setFetchingStatus(false));
      });
  },
  loadNearbyOffers: (id) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setFetchingStatus(true));
    return api.get(`${AppRoute.HOTELS}/${id}${AppRoute.NEARBY}`)
      .then((response) => {
        const nearbyOffers = response.data.map((offer) => getOffer(offer));
        dispatch(ActionCreator.setFetchingStatus(false));
        dispatch(ActionCreator.loadNearbyOffers(nearbyOffers));
      })
      .catch((error) => {
        dispatch(ActionCreator.writeError(error.response.status));
        dispatch(ActionCreator.setFetchingStatus(false));
      });
  },
  sendComment: (commentData, id) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setFetchingStatus(true));
    return api.post(`${AppRoute.COMMENTS}/${id}`, {
      comment: commentData.comment,
      rating: commentData.rating})
      .then(() => {
        dispatch(ActionCreator.setFetchingStatus(false));
        dispatch(ActionCreator.writeError(initialState.error));
      })
      .then(() => {
        dispatch(ActionCreator.setFetchingStatus(true));
        return api.get(`${AppRoute.COMMENTS}/${id}`)
          .then((response) => {
            const reviews = response.data.map((review) => getComment(review));
            dispatch(ActionCreator.setFetchingStatus(false));
            dispatch(ActionCreator.loadReviews(reviews));
          });
      })
      .catch((error) => {
        dispatch(ActionCreator.writeError(error.response.status));
        dispatch(ActionCreator.setFetchingStatus(false));
      });
  },
  setToFavorite: (id, status) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setFetchingStatus(true));
    const statusParameter = status ? FavoriteStatus.ADD : FavoriteStatus.REMOVE;
    return api.post(`${AppRoute.FAVORITE}/${id}/${statusParameter}`)
      .then((response) => {
        dispatch(ActionCreator.setFetchingStatus(false));
        dispatch(ActionCreator.writeError(initialState.error));
        const offers = getUpdatedOffers(response.data, getState().DATA.offers.slice());
        dispatch(ActionCreator.loadOffers(offers));
      })
      .catch((error) => {
        dispatch(ActionCreator.writeError(error.response.status));
        dispatch(ActionCreator.setFetchingStatus(false));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FETCHING_STATUS:
      return extend(state, {
        isFetching: action.payload,
      });
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    case ActionType.WRITE_ERROR:
      return extend(state, {
        error: action.payload,
      });
    case ActionType.LOAD_FAVORITE_OFFERS:
      return extend(state, {
        favoriteOffers: action.payload,
      });
    case ActionType.LOAD_NEARBY_OFFERS:
      return extend(state, {
        nearbyOffers: action.payload,
      });
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
