import * as React from "react";
import * as Adapter from "enzyme-adapter-react-16";
import {mount, configure} from "enzyme";
import {BrowserRouter} from "react-router-dom";
import PlaceFullCard from "./place-full-card";
import {AuthorizationStatus, DEFAULT_ERROR_STATUS} from "../../const";
import offers from "../../mocks/offers";

configure({adapter: new Adapter()});

describe(`<PlaceFullCard />`, () => {
  const id = `1`;
  const onBookmarkButtonCLick = jest.fn();
  const loadReviews = jest.fn();
  const loadNearbyOffers = jest.fn();
  const onSubmitForm = jest.fn();
  const testUser = `test@test.ru`;
  it(`When you click on the bookmark button with authorization the handler is called`, () => {
    const main = mount(
        <BrowserRouter>
          <PlaceFullCard
            offer={offers[0]}
            id={id}
            authorizationStatus={AuthorizationStatus.AUTH}
            user={testUser}
            isFetching={false}
            error={DEFAULT_ERROR_STATUS}
            onSubmitForm={onSubmitForm}
            reviews={[]}
            onBookmarkButtonCLick={onBookmarkButtonCLick}
            loadReviews={loadReviews}
            loadNearbyOffers={loadNearbyOffers}
            nearbyOffers={[]}
          />
        </BrowserRouter>
    );
    const card = main.find(`.property__bookmark-button`);
    card.simulate(`click`);
    expect(onBookmarkButtonCLick).toHaveBeenCalledTimes(1);
    expect(onBookmarkButtonCLick).toHaveBeenCalledWith(`1`, true);

  });

  it(`When you click on the bookmark button without authorization the handler is not called`, () => {
    jest.clearAllMocks();
    const main = mount(
        <BrowserRouter>
          <PlaceFullCard
            offer={offers[0]}
            id={id}
            authorizationStatus={AuthorizationStatus.NO_AUTH}
            user={``}
            isFetching={false}
            error={DEFAULT_ERROR_STATUS}
            onSubmitForm={onSubmitForm}
            reviews={[]}
            onBookmarkButtonCLick={onBookmarkButtonCLick}
            loadReviews={loadReviews}
            loadNearbyOffers={loadNearbyOffers}
            nearbyOffers={[]}
          />
        </BrowserRouter>
    );
    const card = main.find(`.property__bookmark-button`);
    card.simulate(`click`);
    expect(onBookmarkButtonCLick).toHaveBeenCalledTimes(0);
  });
});
