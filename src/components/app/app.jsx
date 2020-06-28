import React, {PureComponent} from 'react';
import Main from '../main/main.jsx';
import PlaceFullCard from "../place-full-card/place-full-card.jsx";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {placeCardType, mapSettingsType} from "../../../types.js";

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
    return <Main
      offers = {this.props.offers}
      placeCount = {this.props.placeCount}
      mapSettings = {this.props.mapSettings}
      onPlaceCardHeaderClick = {this.handleCardHeaderClick}
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
              mapSettings = {this.props.mapSettings}
              onPlaceCardHeaderClick = {this.handleCardHeaderClick}
              {...props.match.params}
            />
          }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(placeCardType)).isRequired,
  mapSettings: PropTypes.shape(mapSettingsType).isRequired,
  placeCount: PropTypes.number.isRequired,
};

