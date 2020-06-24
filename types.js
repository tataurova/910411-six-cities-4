import PropTypes from "prop-types";

export const placeCardType = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    premium: PropTypes.bool.isRequired,
    photo: PropTypes.string.isRequired,
};

export const placeFullCardType = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    premium: PropTypes.bool.isRequired,
    photo: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    adults: PropTypes.number.isRequired,
    additional: PropTypes.arrayOf(PropTypes.string.isRequired),
    details: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      photo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isSuper: PropTypes.bool.isRequired,
    }).isRequired,
    photos: PropTypes.arrayOf(PropTypes.string.isRequired)
};
