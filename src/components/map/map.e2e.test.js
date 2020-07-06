import React from "react";
import {mount} from "enzyme";
import Map from "./map.jsx";
import offers from "../../mocks/offers.js";

describe(`Map`, () => {
  const activeCity = `Amsterdam`;
  const cityOffers = offers[activeCity];
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

