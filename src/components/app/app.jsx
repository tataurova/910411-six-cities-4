import React from 'react';
import MainPage from '../main-page/main-page.jsx';
import PlaceFullCard from "../place-full-card/place-full-card.jsx";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import {placeCardType} from "../../../types.js";
import cities from "../../mocks/cities.js";
import citiesOffers from "../../mocks/offers.js";
import {getOfferInfo} from "../../utils/offers.js";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    return <MainPage
      cities = {cities}
      {...this.props}
    />;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/offer/:id" render={(props) =>
            <PlaceFullCard
              offerInfo = {getOfferInfo(citiesOffers, props.match.params.id)}
              // onPlaceCardHover = {this.props.onPlaceCardHover}
              {...props.match.params}
            />
          }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
  // sortType: state.sortType,
  // hoveredCardId: state.hoveredCardId,
});

export const mapDispatchToProps = (dispatch) => ({
  onMenuClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  // onSortTypeClick(sortType) {
  //   dispatch(ActionCreator.changeSortType(sortType));
  // },
  // onPlaceCardHover(id) {
  //   dispatch(ActionCreator.changeHoveredCard(id));
  // }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(placeCardType)).isRequired,
  // sortType: PropTypes.string.isRequired,
  // hoveredCardId: PropTypes.number.isRequired,
  // onPlaceCardHover: PropTypes.func.isRequired,
  onMenuClick: PropTypes.func.isRequired,
  // onSortTypeClick: PropTypes.func.isRequired,
};
