import React from "react";
import PropTypes from 'prop-types';
import {LOGIN_MIN_LENGTH, PASSWORD_MIN_LENGTH} from "../../const.js";
import Header from "../header/header.jsx";

const Login = ({authorizationStatus, user, state, onSubmit, onChange, loginRef, passwordRef, error}) => {
  return (
    <div className="page page--gray page--login">
      <Header
        authorizationStatus = {authorizationStatus}
        user = {user}
        error = {error}
      />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={onSubmit}>
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
              <button className="login__submit form__submit button" type="submit">Sign in</button>
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
  authorizationStatus: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
};
