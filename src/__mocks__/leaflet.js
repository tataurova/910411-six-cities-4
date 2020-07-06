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
  setView() {
    return jest.fn();
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
