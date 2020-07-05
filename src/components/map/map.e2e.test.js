import React from "react";
import {shallow} from "enzyme";
import Map from "./map.jsx";
import offers from "../../mocks/offers.js";

describe(`When changing props, the method is called componentDidUpdate`, () => {
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
    const instance = main.instance();
    Map.prototype.componentDidUpdate = jest.fn();
    main.setProps({activeCity: `Paris`});
    expect(instance.componentDidUpdate).toHaveBeenCalledTimes(1);
  });
});

