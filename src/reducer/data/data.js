import {extend} from "../../utils/common.js";
import {getOffer} from "../../adapters/offers.js";
import {ActionCreator as AppActionCreator} from "../app/app.js";
import {getUpdatedOffers} from "../../utils/offers.js";

const initialState = {
  isLoading: false,
  isSending: false,
  offers: [],
  error: -1,
};

const ActionType = {
  SET_LOADING_STATUS: `SET_LOADING_STATUS`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  WRITE_ERROR: `WRITE_ERROR`,
  SET_SENDING_STATUS: `SET_SENDING_STATUS`,
};

const ActionCreator = {
  setLoadingStatus: (status) => {
    return {
      type: ActionType.SET_LOADING_STATUS,
      payload: status,
    };
  },
  loadOffers: (offers) => {
    return {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };
  },
  writeError: (error) => {
    return {
      type: ActionType.WRITE_ERROR,
      payload: error,
    };
  },
  setSendingStatus: (status) => {
    return {
      type: ActionType.SET_SENDING_STATUS,
      payload: status,
    };
  },
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.setLoadingStatus(true));
    return api.get(`/hotels`)
      .then((response) => {
        const offers = response.data.map((offer) => getOffer(offer));
        dispatch(ActionCreator.setLoadingStatus(false));
        dispatch(ActionCreator.loadOffers(offers));
        dispatch(AppActionCreator.setCities(offers));
      })
      .catch((error) => {
        dispatch(ActionCreator.writeError(error.response.status));
        dispatch(ActionCreator.setLoadingStatus(false));
      });
  },
  sendComment: (commentData, id) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setSendingStatus(true));
    return api.post(`/comments/${id}`, {
      comment: commentData.comment,
      rating: commentData.rating})
      .then(() => {
        dispatch(ActionCreator.setSendingStatus(false));
        dispatch(ActionCreator.writeError(initialState.error));
      })
      .catch((error) => {
        dispatch(ActionCreator.writeError(error.response.status));
        dispatch(ActionCreator.setSendingStatus(false));
      });
  },
  setToFavorite: (id, status) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setSendingStatus(true));
    const statusParameter = status ? 1 : 0;
    return api.post(`/favorite/${id}/${statusParameter}`)
      .then((response) => {
        dispatch(ActionCreator.setSendingStatus(false));
        dispatch(ActionCreator.writeError(initialState.error));
        const offers = getUpdatedOffers(response.data, getState().DATA.offers.slice());
        dispatch(ActionCreator.loadOffers(offers));
      })
      .catch((error) => {
        dispatch(ActionCreator.writeError(error.response.status));
        dispatch(ActionCreator.setSendingStatus(false));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_LOADING_STATUS:
      return extend(state, {
        isLoading: action.payload,
      });
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
    case ActionType.WRITE_ERROR:
      return extend(state, {
        error: action.payload,
      });
    case ActionType.SET_SENDING_STATUS:
      return extend(state, {
        isSending: action.payload,
      });
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
