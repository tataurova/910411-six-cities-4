import React from 'react';
import MainPage from '../main-page/main-page.jsx';
import PlaceFullCard from "../place-full-card/place-full-card.jsx";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/data/data.js";
import {placeCardType} from "../../../types.js";
import {getOfferInfo} from "../../utils/offers.js";
import {getMemoizedCityOffers} from "../../reducer/data/selectors.js";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    return <MainPage
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
            this.props.cityOffers.length > 0 && <PlaceFullCard
              offerInfo = {getOfferInfo(this.props.cityOffers, props.match.params.id)}
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
  isLoading: state.isLoading,
  offers: state.offers,
  cities: state.cities,
  city: state.city,
  cityOffers: getMemoizedCityOffers(state),
});

export const mapDispatchToProps = (dispatch) => ({
  onMenuClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(placeCardType)).isRequired,
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  city: PropTypes.string.isRequired,
  cityOffers: PropTypes.arrayOf(PropTypes.shape(placeCardType)).isRequired,
  onMenuClick: PropTypes.func.isRequired,
};
