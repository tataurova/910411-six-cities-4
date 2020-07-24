import React from "react";
import {AuthorizationStatus} from "../../const.js";
import PropTypes from "prop-types";

const Header = ({authorizationStatus, user}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active" href="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href={authorizationStatus === AuthorizationStatus.NO_AUTH ? `/auth` : `#`}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {authorizationStatus === AuthorizationStatus.NO_AUTH ? <span className="header__login">Sign in</span> : <span className="header__user-name user__name">{user}</span>}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};
