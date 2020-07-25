import React, {createRef} from "react";
import PropTypes from "prop-types";
import {LoginInput} from "../../const.js";
import {extend} from "../../utils/common.js";

const isValid = (input) => {
  return input.current.validity.valid;
};

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
        this.setState(extend(this.state, {loginValid: isValid(this.loginRef)}));
      }
      if (name === LoginInput.PASSWORD) {
        this.setState(extend(this.state, {passwordValid: isValid(this.passwordRef)}));
      }
    }

    handleSubmit(evt) {
      evt.preventDefault();
      const {onSubmitForm} = this.props;
      onSubmitForm({
        login: this.loginRef.current.value,
        password: this.passwordRef.current.value,
      });
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
