import * as React from "react";
import * as renderer from "react-test-renderer";
import Favorites from "./favorites";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import offers from "../../mocks/offers";
import configureStore from "redux-mock-store";
import {CardType} from "../../const";
import {AuthorizationStatus} from "../../const";
import {DEFAULT_ERROR_STATUS} from "../../const";
import {mockFunction} from "../../utils/common";

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
          <Provider store = {store}>
            <BrowserRouter>
              <Favorites
                cardType = {CardType.FAVORITE}
                authorizationStatus = {AuthorizationStatus.AUTH}
                user = {testUser}
                favoriteOffers={offers}
                loadFavoriteOffers={mockFunction}
                error = {DEFAULT_ERROR_STATUS}
              />
            </BrowserRouter>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
