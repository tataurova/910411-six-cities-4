const leaflet = {
  icon() {
    return {
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30],
    };
  },
  map() {
    return {
      setView: jest.fn(),
    };
  },
  tileLayer() {
    return {
      addTo: jest.fn(),
    };
  },
  marker() {
    return {
      addTo: jest.fn(),
    };
  },
  layerGroup() {
    return {
      addTo() {
        return {
          clearLayers: jest.fn(),
        };
      }
    };
  },
};

module.exports = leaflet;
// export const addMarkersToMap = (offers, hoveredCardId, icon, activeIcon, map) => {
//   const markers = [];
//   offers.forEach((offer) => {
//     const marker = leaflet.marker(offer.coordinates, {icon: offer.id === hoveredCardId ? activeIcon : icon});
//     markers.push(marker);
//   });
//   const markersGroup = leaflet.layerGroup(markers).addTo(map).clearLayers();
//   return markersGroup;
// };
