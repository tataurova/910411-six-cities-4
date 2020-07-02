import React, {PureComponent} from 'react';
import Main from '../main/main.jsx';
import PlaceFullCard from "../place-full-card/place-full-card.jsx";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import {placeCardType} from "../../../types.js";
import {MapSettings} from "../../const.js";
import cities from "../../mocks/cities.js";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.handleCardHeaderClick = this.handleCardHeaderClick.bind(this);
    this.state = {
      page: 0,
    };
  }

  handleCardHeaderClick(id) {
    this.setState({page: id});
  }

  _renderApp() {
    const {city, offers, sortType, onMenuClick, onSortTypeClick} = this.props;
    return <Main
      offers = {offers}
      mapSettings={MapSettings}
      cities = {cities}
      activeCity = {city}
      activeSortType = {sortType}
      onPlaceCardHeaderClick = {this.handleCardHeaderClick}
      onMenuClick = {onMenuClick}
      onSortTypeClick = {onSortTypeClick}
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
              offers = {this.props.offers}
              mapSettings = {MapSettings}
              onPlaceCardHeaderClick = {this.handleCardHeaderClick}
              activeCity={this.props.city}
              {...props.match.params}
            />
          }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
  sortType: state.sortType,
});

const mapDispatchToProps = (dispatch) => ({
  onMenuClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  onSortTypeClick(sortType) {
    dispatch(ActionCreator.changeSortType(sortType));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(placeCardType)).isRequired,
  sortType: PropTypes.string.isRequired,
  onMenuClick: PropTypes.func.isRequired,
  onSortTypeClick: PropTypes.func.isRequired,
};
