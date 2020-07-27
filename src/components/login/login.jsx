import React from "react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {LOGIN_MIN_LENGTH, PASSWORD_MIN_LENGTH} from "../../const.js";

const Login = ({state, onSubmit, onChange, loginRef, passwordRef}) => {
  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={state.loginValid && state.passwordValid ? onSubmit : null}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className={`login__input form__input ${state.loginValid === false ? `input-error` : ``}`}
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  minLength={LOGIN_MIN_LENGTH}
                  ref={loginRef}
                  onChange={onChange}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className={`login__input form__input ${state.passwordValid === false ? `input-error` : ``}`}
                  type="password"
                  name="password"
                  placeholder="Password"
                  minLength={PASSWORD_MIN_LENGTH}
                  ref={passwordRef}
                  onChange={onChange}
                />
              </div>
              <Link to='/'><button className="login__submit form__submit button" type="submit">Sign in</button></Link>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Login;

Login.propTypes = {
  state: PropTypes.shape({
    loginValid: PropTypes.bool,
    passwordValid: PropTypes.bool,
  }),
  loginRef: PropTypes.shape({current: PropTypes.instanceOf(HTMLInputElement)}).isRequired,
  passwordRef: PropTypes.shape({current: PropTypes.instanceOf(HTMLInputElement)}).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

Login.defaultProps = {
  state: PropTypes.shape({
    loginValid: null,
    passwordValid: null,
  }),
};