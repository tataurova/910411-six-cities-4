import React from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";
import {placeFullCardType} from "../../../types.js";
import {cityCoordinates} from "../../mocks/cities.js";
import {MapSettings} from "../../const.js";
import {addMarkersToMap} from "../../utils/map.js";

class Map extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {offers, activeCity, hoveredCardId} = this.props;
    this.leafletIcon = leaflet.icon({
      iconSize: MapSettings.ICON_SIZE,
      iconUrl: MapSettings.ICON_URL,
    });
    this.leafletActiveIcon = leaflet.icon({
      iconSize: MapSettings.ICON_SIZE,
      iconUrl: MapSettings.ACTIVE_ICON_URL,
    });
    const activeCityCoordinates = cityCoordinates[activeCity];
    this.map = leaflet.map(`map`, {
      center: activeCityCoordinates,
      zoom: MapSettings.ZOOM,
      zoomControl: false,
      marker: true,
    })
      .setView(activeCityCoordinates, MapSettings.ZOOM);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);
    this.markersGroup = addMarkersToMap(offers, hoveredCardId, this.leafletIcon, this.leafletActiveIcon, this.map);
  }

  componentDidUpdate(prevProps) {
    const shouldUpdateMarkers = this.props.activeCity !== prevProps.activeCity;
    const shouldHighlightMarker = this.props.hoveredCardId !== prevProps.hoveredCardId;
    if (shouldUpdateMarkers) {
      const activeCityCoordinates = cityCoordinates[this.props.activeCity];
      this.markersGroup.clearLayers();
      this.map.setView(activeCityCoordinates, MapSettings.ZOOM);
      this.markersGroup = addMarkersToMap(this.props.offers, this.props.hoveredCardId, this.leafletIcon, this.leafletActiveIcon, this.map);
    }
    if (shouldHighlightMarker) {
      this.markersGroup.clearLayers();
      this.markersGroup = addMarkersToMap(this.props.offers, this.props.hoveredCardId, this.leafletIcon, this.leafletActiveIcon, this.map);
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
  activeCity: PropTypes.string.isRequired,
  hoveredCardId: PropTypes.number.isRequired,
};
