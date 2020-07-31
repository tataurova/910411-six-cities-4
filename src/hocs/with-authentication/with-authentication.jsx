import React, {createRef} from "react";
import PropTypes from "prop-types";
import {LoginInput} from "../../const.js";
import {extend} from "../../utils/common.js";
import {LOGIN_MIN_LENGTH, PASSWORD_MIN_LENGTH} from "../../const.js";
/* eslint-disable */

const isLoginValid = (input, evt) => {
  return input.current.validity.valid && evt.target.value.length >= LOGIN_MIN_LENGTH;
};

const isPasswordValid = (input, evt) => {
  return input.current.validity.valid && evt.target.value.length >= PASSWORD_MIN_LENGTH;
};

export const isFormValid = (state) => {
  return state.loginValid === true && state.passwordValid === true;
};

const isLoginEmpty = (state) => state.loginValid === null;

const isPasswordEmpty = (state) => state.passwordValid === null;

const withAuthentication = (Component) => {
  class WithAuthentication extends React.PureComponent {
    constructor(props) {
      super(props);

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      this.state = {
        loginValid: null,
        passwordValid: null,
      };

      this.loginRef = createRef();
      this.passwordRef = createRef();

    }

    handleChange(evt) {
      evt.preventDefault();
      const {name} = evt.target;
      if (name === LoginInput.EMAIL) {
        this.setState(extend(this.state, {loginValid: isLoginValid(this.loginRef, evt)}));
      }
      if (name === LoginInput.PASSWORD) {
        this.setState(extend(this.state, {passwordValid: isPasswordValid(this.passwordRef, evt)}));
      }
    }

    handleSubmit(evt) {
      evt.preventDefault();
      if (isLoginEmpty(this.state)) {
        this.setState(extend(this.state, {loginValid: false}));
      }
      if (isPasswordEmpty(this.state)) {
        this.setState(extend(this.state, {passwordValid: false}));
      }
      if (isFormValid(this.state)) {
        const {onSubmitForm} = this.props;
        onSubmitForm({
          login: this.loginRef.current.value,
          password: this.passwordRef.current.value,
        });
      }
    }

    render() {
      return <Component
        state = {this.state}
        onChange = {this.handleChange}
        onSubmit = {this.handleSubmit}
        loginRef = {this.loginRef}
        passwordRef = {this.passwordRef}
        {...this.props}
      />;
    }
  }
  WithAuthentication.propTypes = {
    onSubmitForm: PropTypes.func.isRequired,
  };
  return WithAuthentication;
};

export default withAuthentication;

withAuthentication.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
