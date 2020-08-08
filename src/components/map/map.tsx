import * as React from 'react';
import * as leaflet from "leaflet";
import {Offer} from "../../types";
import {MapSettings} from "../../const";
import {addMarkersToMap} from "../../utils/map";

interface Props {
  offers: Offer[];
  activeCity: string;
  hoveredCardId: number;
}

class Map extends React.PureComponent<Props> {
  private map: leaflet.map;
  private leafletIcon: leaflet.icon;
  private leafletActiveIcon: leaflet.icon;
  private markersGroup: leaflet.markersGroup;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {offers, hoveredCardId} = this.props;
    const activeCityCoordinates = offers[0].cityCoordinates;
    this.leafletIcon = leaflet.icon({
      iconSize: MapSettings.ICON_SIZE,
      iconUrl: MapSettings.ICON_URL,
    });
    this.leafletActiveIcon = leaflet.icon({
      iconSize: MapSettings.ICON_SIZE,
      iconUrl: MapSettings.ACTIVE_ICON_URL,
    });

    this.map = leaflet.map(`map`, {
      center: activeCityCoordinates,
      zoom: offers[0].cityZoom,
      zoomControl: false,
      marker: true,
    });
    this.map.setView(activeCityCoordinates, offers[0].cityZoom);
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
    const activeCityCoordinates = this.props.offers[0].cityCoordinates;

    if (shouldUpdateMarkers) {
      this.markersGroup.clearLayers();
      this.map.setView(activeCityCoordinates, this.props.offers[0].cityZoom);
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
