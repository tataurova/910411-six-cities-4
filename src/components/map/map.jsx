import React from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";
import {placeFullCardType, mapSettingsType} from "../../../types.js";

export default class Map extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {offers, mapSettings} = this.props;
    const {city, icon, zoom} = mapSettings;
    const leafletIcon = leaflet.icon(icon);
    this.map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true,
    })
      .setView(city, zoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);
    offers.forEach((offer) => {
      leaflet
        .marker(offer.coordinates, {leafletIcon})
        .addTo(this.map);
    });
  }

  render() {
    return (
      <div></div>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(placeFullCardType)).isRequired,
  mapSettings: PropTypes.shape(mapSettingsType).isRequired,
};
