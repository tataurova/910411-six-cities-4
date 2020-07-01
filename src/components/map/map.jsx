import React from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";
import {placeFullCardType, mapSettingsType} from "../../../types.js";
import {cityCoordinates} from "../../mocks/cities.js";

const addMarkersToMap = (offers, icon, map) => {
  const markers = [];
  offers.forEach((offer) => {
    const marker = leaflet.marker(offer.coordinates, {icon});
    markers.push(marker);
  });
  const markersGroup = leaflet.layerGroup(markers).addTo(map);
  return markersGroup;
};

class Map extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {offers, mapSettings, activeCity} = this.props;
    const {icon, zoom} = mapSettings;
    const leafletIcon = leaflet.icon(icon);
    const activeCityCoordinates = cityCoordinates[activeCity];
    this.map = leaflet.map(`map`, {
      center: activeCityCoordinates,
      zoom,
      zoomControl: false,
      marker: true,
    })
      .setView(activeCityCoordinates, zoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);
    this.markersGroup = addMarkersToMap(offers, leafletIcon, this.map);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.offers !== nextProps.offers) {
      const activeCityCoordinates = cityCoordinates[nextProps.activeCity];
      const zoom = nextProps.mapSettings.zoom;
      this.markersGroup.clearLayers();
      this.map.setView(activeCityCoordinates, zoom);
      const leafletIcon = leaflet.icon(nextProps.mapSettings.icon);
      this.markersGroup = addMarkersToMap(nextProps.offers, leafletIcon, this.map);
    }
    return true;
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}}></div>
    );
  }
}

export default Map;

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(placeFullCardType)).isRequired,
  mapSettings: PropTypes.shape(mapSettingsType).isRequired,
  activeCity: PropTypes.string.isRequired,
};
