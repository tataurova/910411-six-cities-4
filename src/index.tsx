import * as React from 'react';
import * as ReactDOM from "react-dom";
import App from './components/app/app';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducer/reducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {createAPI} from "./api";
import {Operation as DataOperation, ActionCreator as DataActionCreator} from "./reducer/data/data";
import {Operation as UserOperation, ActionCreator, AuthorizationStatus} from "./reducer/user/user";
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
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
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

