import React from 'react';
import MainPage from '../main-page/main-page.jsx';
import PlaceFullCard from "../place-full-card/place-full-card.jsx";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/app/app.js";
import {placeCardType} from "../../../types.js";
import {getOfferInfo} from "../../utils/offers.js";
import {getMemoizedCityOffers} from "../../reducer/app/selectors.js";
import NameSpace from "../../reducer/name-space.js";
import Login from "../login/login.jsx";
import withAuthentication from "../../hocs/with-authentication/with-authentication.jsx";
import {Operation as UserOperation} from "../../reducer/user/user";

const LoginWithAuthentication = withAuthentication(Login);

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
    const {offers, cityOffers, login, authorizationStatus, user} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/offer/:id" render={(props) =>
            cityOffers.length > 0 && <PlaceFullCard
              offerInfo = {getOfferInfo(offers, props.match.params.id)}
              {...props.match.params}
              authorizationStatus = {authorizationStatus}
              user = {user}
            />
          }
          />
          <Route exact path="/auth">
            <LoginWithAuthentication
              onSubmitForm = {login}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export const mapStateToProps = (state) => ({
  isLoading: state[NameSpace.DATA].isLoading,
  offers: state[NameSpace.DATA].offers,
  cities: state[NameSpace.APP].cities,
  city: state[NameSpace.APP].city,
  cityOffers: getMemoizedCityOffers(state),
  error: state[NameSpace.DATA].error,
  authorizationStatus: state[NameSpace.AUTH].authorizationStatus,
  user: state[NameSpace.AUTH].user,
});

export const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
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
  error: PropTypes.number.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
};
