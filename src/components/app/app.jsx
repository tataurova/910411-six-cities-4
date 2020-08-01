import React from 'react';
import MainPage from '../main-page/main-page.jsx';
import PlaceFullCard from "../place-full-card/place-full-card.jsx";
import PropTypes from 'prop-types';
import {Switch, Route, Router, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/app/app.js";
import {placeCardType} from "../../../types.js";
import {getOfferInfo} from "../../utils/offers.js";
import {getMemoizedCityOffers} from "../../reducer/app/selectors.js";
import {getMemoizedOffers} from "../../reducer/data/selectors.js";
import NameSpace from "../../reducer/name-space.js";
import Login from "../login/login.jsx";
import withAuthentication from "../../hocs/with-authentication/with-authentication.jsx";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {AppRoute, AuthorizationStatus} from "../../const.js";
import history from "../../history.js";
import Favorites from "../favorites/favorites.jsx";
import PrivateRoute from "../private-route/private-route.jsx";
import {CardType} from "../../const.js";

const LoginWithAuthentication = withAuthentication(Login);

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      offers,
      cityOffers,
      login,
      authorizationStatus,
      user,
      sendComment,
      isFetching,
      error,
      favoriteOffers,
      loadFavoriteOffers,
    } = this.props;
    return (
      <Router history = {history}>
        <Switch>
          <Route exact path={AppRoute.MAIN} render={() => {
            return <MainPage
              {...this.props}
            />;
          }}>
          </Route>
          <Route exact path={`${AppRoute.PLACE_FULL_CARD}/:id`} render={(props) =>
            cityOffers.length > 0 && <PlaceFullCard
              offerInfo = {getOfferInfo(offers, props.match.params.id)}
              {...props.match.params}
              authorizationStatus = {authorizationStatus}
              user = {user}
              onSubmitForm = {sendComment}
              isFetching = {isFetching}
              error = {error}
            />
          }
          />
          <Route exact path={AppRoute.LOGIN} render={() => {
            if (authorizationStatus === AuthorizationStatus.AUTH) {
              return <Redirect to={AppRoute.MAIN} />;
            } else {
              return <LoginWithAuthentication
                onSubmitForm = {login}
              />;
            }
          }}>
          </Route>
          <PrivateRoute
            exact
            path={AppRoute.FAVORITES}
            render={() => {
              return (
                <Favorites
                  cardType = {CardType.FAVORITE}
                  favoriteOffers = {favoriteOffers}
                  loadFavoriteOffers = {loadFavoriteOffers}
                  authorizationStatus = {authorizationStatus}
                  user = {user}
                />
              );
            }}
          />
        </Switch>
      </Router>
    );
  }
}

export const mapStateToProps = (state) => ({
  isFetching: state[NameSpace.DATA].isFetching,
  offers: getMemoizedOffers(state),
  cities: state[NameSpace.APP].cities,
  city: state[NameSpace.APP].city,
  cityOffers: getMemoizedCityOffers(state),
  error: state[NameSpace.DATA].error,
  authorizationStatus: state[NameSpace.AUTH].authorizationStatus,
  user: state[NameSpace.AUTH].user,
  favoriteOffers: state[NameSpace.DATA].favoriteOffers,
});

export const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  onMenuClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  sendComment(comment, id) {
    dispatch(DataOperation.sendComment(comment, id));
  },
  loadFavoriteOffers() {
    dispatch(DataOperation.loadFavoriteOffers());
  }
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
  isFetching: PropTypes.bool.isRequired,
  sendComment: PropTypes.func.isRequired,
  loadFavoriteOffers: PropTypes.func.isRequired,
  favoriteOffers: PropTypes.arrayOf(PropTypes.shape(placeCardType)).isRequired,
};
