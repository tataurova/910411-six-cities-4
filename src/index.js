import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.tsx';
import {createStore, compose, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducer/reducer.js";
import thunk from "redux-thunk";
import {createAPI} from "./api.js";
import {Operation as DataOperation, ActionCreator as DataActionCreator} from "./reducer/data/data.js";
import {Operation as UserOperation, ActionCreator, AuthorizationStatus} from "./reducer/user/user.js";
import {SHOW_ERROR_TIMEOUT} from "./const";

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const onNoResponse = () => {
  store.dispatch(DataActionCreator.writeError(true));
  setTimeout(() => store.dispatch(DataActionCreator.writeError(false)), SHOW_ERROR_TIMEOUT);
};

const api = createAPI(onUnauthorized, onNoResponse);

export const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
  );
};

store.dispatch(UserOperation.checkAuth())
  .finally(() => {
    store.dispatch(DataOperation.loadOffers())
      .finally(() => {
        init();
      });
  });

