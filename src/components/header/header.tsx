import * as React from 'react';
import {Link} from "react-router-dom";
import {AuthorizationStatus, AppRoute} from "../../const";

interface Props {
  authorizationStatus: string;
  user: string;
  error: boolean;
}

const Header: React.FunctionComponent<Props> = ({authorizationStatus, user, error}: Props) => {
  return (
    <header className="header">
      {error && <div className="block-error"><p className="error">Network error</p></div>}
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.MAIN}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {authorizationStatus === AuthorizationStatus.NO_AUTH ? <span className="header__login">Sign in</span> : <span className="header__user-name user__name">{user}</span>}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
