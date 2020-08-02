import React from "react";
import renderer from "react-test-renderer";
import Favorites from "./favorites.jsx";
import {BrowserRouter} from "react-router-dom";
import offers from "../../mocks/offers.js";
import configureStore from "redux-mock-store";
import {CardType} from "../../const.js";
import {AuthorizationStatus} from "../../const.js";

const onBookmarkButtonCLick = jest.fn();
const mockStore = configureStore([]);
const initialState = {
  onBookmarkButtonCLick,
};
const store = mockStore(initialState);

describe(`<Favorites />`, () => {
  it(`Render Favorites`, () => {
    const testUser = `test@test.ru`;
    const tree = renderer
      .create(
          <BrowserRouter>
            <Favorites
              store = {store}
              cardType = {CardType.FAVORITE}
              authorizationStatus = {AuthorizationStatus.AUTH}
              user = {testUser}
              favoriteOffers={offers}
              loadFavoriteOffers={() => {}}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
