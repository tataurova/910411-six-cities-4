import React from "react";
import renderer from "react-test-renderer";
import PlaceFullCard from "./place-full-card.jsx";
import {BrowserRouter} from "react-router-dom";
import offers from "../../mocks/offers.js";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const onBookmarkButtonCLick = jest.fn();
const mockStore = configureStore([]);
const initialState = {
  onBookmarkButtonCLick,
};
const store = mockStore(initialState);

describe(`<PlaceFullCard />`, () => {
  it(`Should PlaceFullCard render correctly`, () => {
    const offerInfo = {
      offer: offers[0],
      nearOffers: offers,
    };
    const tree = renderer
      .create(
          <Provider store = {store}>
            <BrowserRouter>
              <PlaceFullCard
                offerInfo = {offerInfo}
                id = {`1`}
                onPlaceCardHover = {() => {}}
                authorizationStatus = {`NO_AUTH`}
                user = {``}
                isSending = {false}
                error = {-1}
                onSubmitForm = {() => {}}
              />
            </BrowserRouter>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
