import {mount} from "enzyme";
import {BrowserRouter} from "react-router-dom";
import PlaceFullCard from "../place-full-card/place-full-card.jsx";
import {AuthorizationStatus, DEFAULT_ERROR_STATUS} from "../../const.js";
import React from "react";
import offers from "../../mocks/offers.js";

describe(`<PlaceFullCard />`, () => {
  const id = `1`;
  const onBookmarkButtonCLick = jest.fn();
  const main = mount(
      <BrowserRouter>
        <PlaceFullCard
          offer={offers[0]}
          id={id}
          onPlaceCardHover={() => {}}
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          user={``}
          isFetching={false}
          error={DEFAULT_ERROR_STATUS}
          onSubmitForm={() => {}}
          reviews={[]}
          onBookmarkButtonCLick={onBookmarkButtonCLick}
          loadReviews={jest.fn()}
          loadNearbyOffers={jest.fn()}
          nearbyOffers={[]}
        />
      </BrowserRouter>
  );

  it(`When you click on the bookmark button the handler is called`, () => {

    const card = main.find(`.property__bookmark-button`);
    card.simulate(`click`);
    expect(onBookmarkButtonCLick).toHaveBeenCalledTimes(1);
    expect(onBookmarkButtonCLick).toHaveBeenCalledWith(`1`, true);

  });
});
