import PropTypes from "prop-types";

export const placeCardType = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  premium: PropTypes.bool.isRequired,
  photo: PropTypes.string.isRequired,
};
