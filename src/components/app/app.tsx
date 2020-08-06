import * as React from 'react';
import MainPage from '../main-page/main-page';
import PlaceFullCard from "../place-full-card/place-full-card";
import {Switch, Route, Router, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/app/app";
import {Offer, Review} from "../../types";
import {findOffer} from "../../utils/offers";
import {getMemoizedCityOffers} from "../../reducer/app/selectors";
import {getMemoizedOffers} from "../../reducer/data/selectors";
import NameSpace from "../../reducer/name-space";
import Login from "../login/login";
import withAuthentication from "../../hocs/with-authentication/with-authentication";
import {Operation as UserOperation} from "../../reducer/user/user";
import {Operation as DataOperation} from "../../reducer/data/data";
import {AppRoute, AuthorizationStatus} from "../../const";
import history from "../../history";
import Favorites from "../favorites/favorites";
import PrivateRoute from "../private-route/private-route";
import {CardType} from "../../const";
import NotFound from "../not-found/not-found";

const LoginWithAuthentication = withAuthentication(Login);

interface Props {
  offers: Offer[];
  cities: string[];
  city: string;
  cityOffers: Offer[];
  onMenuClick: () => void;
  error: boolean;
  authorizationStatus: string;
  user: string;
  login: () => void;
  isFetching: boolean;
  sendComment: () => void;
  loadFavoriteOffers: () => void;
  favoriteOffers: Offer[];
  loadReviews: () => void;
  reviews: Review[];
  nearbyOffers: Offer[];
  loadNearbyOffers: Offer[];
  onBookmarkButtonCLick: () => void;
}

class App extends React.PureComponent<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      offers,
      cities,
      city,
      cityOffers,
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
      onMenuClick,
    } = this.props;
    return (
      <Router history = {history}>
        <Switch>
          <Route exact path={AppRoute.MAIN} render={() => {
            return <MainPage
              cityOffers = {cityOffers}
              cities = {cities}
              city = {city}
              onMenuClick = {onMenuClick}
              isFetching = {isFetching}
              error = {error}
              authorizationStatus = {authorizationStatus}
              user = {user}
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
                error = {error}
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
                throw new Error(`Unknown AuthorizationStatus ${authorizationStatus}`);
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
