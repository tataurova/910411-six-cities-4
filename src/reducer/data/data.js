import {extend} from "../../utils/common.js";
import {getOffer} from "../../adapters/offers.js";
import {ActionCreator as AppActionCreator} from "../app/app.js";
import {getUpdatedOffers} from "../../utils/offers.js";

const initialState = {
  isFetching: false,
  offers: [],
  favoriteOffers: [],
  error: -1,
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  WRITE_ERROR: `WRITE_ERROR`,
  SET_FETCHING_STATUS: `SET_FETCHING_STATUS`,
  LOAD_FAVORITE_OFFERS: `LOAD_FAVORITE_OFFERS`,
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
    return api.get(`/hotels`)
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
    return api.get(`/favorite`)
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
  sendComment: (commentData, id) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setFetchingStatus(true));
    return api.post(`/comments/${id}`, {
      comment: commentData.comment,
      rating: commentData.rating})
      .then(() => {
        dispatch(ActionCreator.setFetchingStatus(false));
        dispatch(ActionCreator.writeError(initialState.error));
      })
      .catch((error) => {
        dispatch(ActionCreator.writeError(error.response.status));
        dispatch(ActionCreator.setFetchingStatus(false));
      });
  },
  setToFavorite: (id, status) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setFetchingStatus(true));
    const statusParameter = status ? 1 : 0;
    return api.post(`/favorite/${id}/${statusParameter}`)
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
    case ActionType.WRITE_ERROR:
      return extend(state, {
        error: action.payload,
      });
    case ActionType.LOAD_FAVORITE_OFFERS:
      return extend(state, {
        favoriteOffers: action.payload,
      });
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
