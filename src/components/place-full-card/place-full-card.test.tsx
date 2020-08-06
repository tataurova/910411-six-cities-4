import * as React from "react";
import * as renderer from "react-test-renderer";
import PlaceFullCard from "./place-full-card";
import {BrowserRouter} from "react-router-dom";
import offers from "../../mocks/offers";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {DEFAULT_ERROR_STATUS, AuthorizationStatus} from "../../const";
import {mockFunction} from "../../utils/common";

const onBookmarkButtonCLick = jest.fn();
const mockStore = configureStore([]);
const initialState = {
  onBookmarkButtonCLick,
};
const store = mockStore(initialState);

describe(`<PlaceFullCard />`, () => {
  it(`Should PlaceFullCard render correctly`, () => {
    const id = `1`;
    const tree = renderer
      .create(
          <Provider store = {store}>
            <BrowserRouter>
              <PlaceFullCard
                offer = {offers[0]}
                id = {id}
                authorizationStatus = {AuthorizationStatus.NO_AUTH}
                user = {``}
                isFetching = {false}
                error = {DEFAULT_ERROR_STATUS}
                onSubmitForm = {mockFunction}
                reviews={[]}
                onBookmarkButtonCLick = {mockFunction}
                loadReviews = {mockFunction}
                loadNearbyOffers = {mockFunction}
                nearbyOffers = {[]}
              />
            </BrowserRouter>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
