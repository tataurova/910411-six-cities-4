import React from "react";
import {shallow} from "enzyme";
import Map from "./map.jsx";
import offers from "../../mocks/offers.js";

describe(`<Map />`, () => {
  it(`Map`, () => {
    const activeCity = `Amsterdam`;
    const cityOffers = offers[activeCity];
    const hoveredCardId = 1;
    const main = shallow(
        <Map
          offers={cityOffers}
          activeCity = {activeCity}
          hoveredCardId={hoveredCardId}
        />
    );
    main.setProps({activeCity: `Paris`});
    expect(main.componentDidUpdate).toHaveBeenCalledTimes(1);
  });
});

