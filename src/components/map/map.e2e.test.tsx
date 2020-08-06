import React from "react";
import {mount} from "enzyme";
import Map from "./map";
import offers from "../../mocks/offers";

describe(`Map`, () => {
  const activeCity = `Cologne`;
  const cityOffers = offers;
  const hoveredCardId = 1;
  const main = mount(
      <Map
        offers = {cityOffers}
        activeCity = {activeCity}
        hoveredCardId = {hoveredCardId}
      />
  );

  const instance = main.instance();
  jest.spyOn(instance, `componentDidUpdate`);

  it(`When changing prop hoveredCardId, the method is called componentDidUpdate, condition shouldHighlightMarker`, () => {

    main.setProps({hoveredCardId: 2});
    expect(instance.componentDidUpdate).toHaveBeenCalledTimes(1);
    jest.clearAllMocks();

  });

  it(`When changing prop activeCity, the method is called componentDidUpdate, condition shouldUpdateMarkers`, () => {

    main.setProps({activeCity: `Paris`});
    expect(instance.componentDidUpdate).toHaveBeenCalledTimes(1);
  });
});

