import * as React from "react";
import * as renderer from "react-test-renderer";
import PlaceListContainer from "./place-list-container";
import offers from "../../mocks/offers";
import {BrowserRouter} from "react-router-dom";
import {DEFAULT_HOVERED_CARD, AuthorizationStatus} from "../../const";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {mockFunction} from "../../utils/common";

const onBookmarkButtonCLick = jest.fn();
const mockStore = configureStore([]);
const initialState = {
  onBookmarkButtonCLick,
  AUTH: {
    authorizationStatus: AuthorizationStatus.AUTH,
  },
};
const store = mockStore(initialState);

describe(`<PlaceListContainer />`, () => {
  it(`Should PlaceListContainer render correctly`, () => {
    const activeCity = `Amsterdam`;
    const tree = renderer
      .create(
          <Provider store = {store}>
            <BrowserRouter>
              <PlaceListContainer
                offers = {offers}
                city = {activeCity}
                state = {DEFAULT_HOVERED_CARD}
                onChangeItem = {mockFunction}
              />
            </BrowserRouter>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
