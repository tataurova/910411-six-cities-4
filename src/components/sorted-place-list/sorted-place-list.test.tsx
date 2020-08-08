import * as React from "react";
import * as renderer from "react-test-renderer";
import SortedPlaceList from "./sorted-place-list";
import offers from "../../mocks/offers";
import {BrowserRouter} from "react-router-dom";
import {SortType, AuthorizationStatus} from "../../const";
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

describe(`<SortedPlaceList />`, () => {
  it(`Should PlaceList render correctly`, () => {
    const activeCity = `Cologne`;
    const tree = renderer
      .create(
          <Provider store = {store}>
            <BrowserRouter>
              <SortedPlaceList
                offers = {offers}
                city = {activeCity}
                state = {SortType.DEFAULT}
                onChangeItem = {mockFunction}
                onPlaceCardHover = {mockFunction}
              />
            </BrowserRouter>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
