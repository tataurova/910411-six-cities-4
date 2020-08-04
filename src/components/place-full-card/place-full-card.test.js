import React from "react";
import renderer from "react-test-renderer";
import PlaceFullCard from "./place-full-card.tsx";
import {BrowserRouter} from "react-router-dom";
import offers from "../../mocks/offers.js";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {DEFAULT_ERROR_STATUS, AuthorizationStatus} from "../../const.js";

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
                onPlaceCardHover = {() => {}}
                authorizationStatus = {AuthorizationStatus.NO_AUTH}
                user = {``}
                isFetching = {false}
                error = {DEFAULT_ERROR_STATUS}
                onSubmitForm = {() => {}}
                reviews={[]}
                onBookmarkButtonCLick = {() => {}}
                loadReviews = {() => {}}
                loadNearbyOffers = {() => {}}
                nearbyOffers = {[]}
              />
            </BrowserRouter>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
