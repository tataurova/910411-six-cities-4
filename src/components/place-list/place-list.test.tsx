import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";
import PlaceList from "./place-list";
import offers from "../../mocks/offers";
import {CardType, SortType} from "../../const";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {mockFunction} from "../../utils/common";

const onBookmarkButtonCLick = jest.fn();
const mockStore = configureStore([]);
const initialState = {
  onBookmarkButtonCLick,
};
const store = mockStore(initialState);

describe(`<PlaceList />`, () => {
  it(`Should PlaceList render correctly`, () => {
    const activeSortType = SortType.DEFAULT;
    const tree = renderer
      .create(
          <Provider store = {store}>
            <BrowserRouter>
              <PlaceList
                offers={offers}
                activeSortType={activeSortType}
                cardType={CardType.NEAR_PLACE}
                onPlaceCardHover={mockFunction}
              />
            </BrowserRouter>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
