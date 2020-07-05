import {mapStateToProps, mapDispatchToProps} from "./app.jsx";
import offers from "../../mocks/offers.js";
import {SortType} from "../../const.js";

describe(`<App />`, () => {
  it(`mapStateToProps returns initial state`, () => {
    const initialState = {
      city: `Paris`,
      offers: offers[`Paris`],
      sortType: SortType.DEFAULT,
      hoveredCardId: 0,
    };

    expect(mapStateToProps(initialState)).toEqual(initialState);
  });

  it(`mapDispatchToProps should be called for onSortTypeClick with right type and payload`, () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).onSortTypeClick(SortType.PRICE_UP);
    expect(dispatch.mock.calls[0][0]).toEqual({type: `CHANGE_SORT_TYPE`, payload: `price-up`});
  });

  it(`mapDispatchToProps should be called for onPlaceCardHover with right type and payload`, () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).onPlaceCardHover(1);
    expect(dispatch.mock.calls[0][0]).toEqual({type: `CHANGE_HOVERED_CARD`, payload: 1});
  });

  it(`mapDispatchToProps should be called for onMenuClick with right type and payload`, () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).onMenuClick(`Amsterdam`);
    expect(dispatch.mock.calls[0][0]).toEqual({type: `CHANGE_CITY`, payload: `Amsterdam`});
  });
});
