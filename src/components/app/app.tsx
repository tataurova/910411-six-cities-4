import React from 'react';
import MainPage from '../main-page/main-page.js';
import PlaceFullCard from "../place-full-card/place-full-card.js";
import PropTypes from 'prop-types';
import {Switch, Route, Router, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/app/app.js";
import {placeCardType, reviewType} from "../../../types.js";
import {findOffer} from "../../utils/offers.js";
import {getMemoizedCityOffers} from "../../reducer/app/selectors.js";
import {getMemoizedOffers} from "../../reducer/data/selectors.js";
import NameSpace from "../../reducer/name-space.js";
import Login from "../login/login.js";
import withAuthentication from "../../hocs/with-authentication/with-authentication.jsx";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {AppRoute, AuthorizationStatus} from "../../const.js";
import history from "../../history.js";
import Favorites from "../favorites/favorites.js";
import PrivateRoute from "../private-route/private-route.js";
import {CardType} from "../../const.js";
import NotFound from "../not-found/not-found.js";

const LoginWithAuthentication = withAuthentication(Login);

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      offers,
      login,
      authorizationStatus,
      user,
      sendComment,
      isFetching,
      error,
      favoriteOffers,
      loadFavoriteOffers,
      loadReviews,
      reviews,
      loadNearbyOffers,
      nearbyOffers,
      onBookmarkButtonCLick,
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
          <Route exact path={`${AppRoute.PLACE_FULL_CARD}/:id`} render={(props) => {
            const offer = findOffer(offers, props.match.params.id);
            if (offer) {
              return <PlaceFullCard
                offer = {findOffer(offers, props.match.params.id)}
                {...props.match.params}
                authorizationStatus = {authorizationStatus}
                user = {user}
                onSubmitForm = {sendComment}
                isFetching = {isFetching}
                error = {error}
                loadReviews = {loadReviews}
                reviews = {reviews}
                loadNearbyOffers = {loadNearbyOffers}
                nearbyOffers = {nearbyOffers}
                onBookmarkButtonCLick = {onBookmarkButtonCLick}
              />;
            } else {
              return <NotFound
                authorizationStatus = {authorizationStatus}
                user = {user}
              />;
            }
          }
          }
          />
          <Route exact path={AppRoute.LOGIN} render={() => {
            switch (authorizationStatus) {
              case AuthorizationStatus.AUTH:
                return <Redirect to={AppRoute.MAIN} />;
              case AuthorizationStatus.NO_AUTH:
                return <LoginWithAuthentication
                  onSubmitForm = {login}
                  authorizationStatus = {authorizationStatus}
                  user = {user}
                  error = {error}
                />;
              default:
                throw error(`Unknown AuthorizationStatus ${authorizationStatus}`);
            }
          }
          }
          />
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
                  error = {error}
                />
              );
            }}
          />
          <Route
            render={() => {
              return <NotFound
                authorizationStatus = {authorizationStatus}
                user = {user}
                error = {error}
              />;
            }} />
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
  reviews: state[NameSpace.DATA].reviews,
  nearbyOffers: state[NameSpace.DATA].nearbyOffers,
});

export const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  onMenuClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  sendComment(comment, id) {
    dispatch(DataOperation.sendComment(comment, id))
      .then(() => dispatch(DataOperation.loadReviews(id)));
  },
  loadFavoriteOffers() {
    dispatch(DataOperation.loadFavoriteOffers());
  },
  loadReviews(id) {
    dispatch(DataOperation.loadReviews(id));
  },
  loadNearbyOffers(id) {
    dispatch(DataOperation.loadNearbyOffers(id));
  },
  onBookmarkButtonCLick(id, status) {
    dispatch(DataOperation.setToFavorite(id, status));
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
  error: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  sendComment: PropTypes.func.isRequired,
  loadFavoriteOffers: PropTypes.func.isRequired,
  favoriteOffers: PropTypes.arrayOf(PropTypes.shape(placeCardType)).isRequired,
  loadReviews: PropTypes.func.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewType)).isRequired,
  nearbyOffers: PropTypes.arrayOf(PropTypes.shape(placeCardType)).isRequired,
  loadNearbyOffers: PropTypes.func.isRequired,
  onBookmarkButtonCLick: PropTypes.func.isRequired,
};
