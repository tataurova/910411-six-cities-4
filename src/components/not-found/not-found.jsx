import React from "react";
import Header from "../header/header.jsx";
import PropTypes from "prop-types";

const NotFound = ({authorizationStatus, user, error}) => {
  return (
    <div className="page page--gray page--main">
      <Header
        authorizationStatus = {authorizationStatus}
        user = {user}
        error = {error}
      />
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">Not Found</b>
                <p className="cities__status-description">This page does not exist</p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;

NotFound.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
};
