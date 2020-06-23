import React, {PureComponent} from 'react';
import Main from '../main/main.jsx';
import Property from "../property/property.jsx";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {placeCardType} from "../../../types.js";

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
    const {page} = this.state;
    if (page === 0) {
      return <Main
        offers = {this.props.offers}
        placeCount = {this.props.placeCount}
        onPlaceCardHeaderClick = {this.handleCardHeaderClick}
      />;
    } else {
      const offer = this.props.offers.filter((item) => item.id === page);
      return <Property
        offer = {offer[0]}
      />;
    }

  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          {this.props.offers.map((offer) => (
            <Route key={offer.id} exact path={`/dev-component${offer.id}`}>
              <Property
                offer = {offer}
              />
            </Route>))}

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(placeCardType)).isRequired,
  placeCount: PropTypes.number.isRequired,
};

