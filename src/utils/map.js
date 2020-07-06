import leaflet from "leaflet";

export const addMarkersToMap = (offers, hoveredCardId, icon, activeIcon, map) => {
  const markers = [];
  offers.forEach((offer) => {
    const marker = leaflet.marker(offer.coordinates, {icon: offer.id === hoveredCardId ? activeIcon : icon});
    markers.push(marker);
  });
  const markersGroup = leaflet.layerGroup(markers).addTo(map);
  return markersGroup;
};
