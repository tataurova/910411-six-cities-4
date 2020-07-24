import React, {createRef} from "react";
import PropTypes from "prop-types";

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
        formValid: null,
      };

      this.loginRef = createRef();
      this.passwordRef = createRef();

    }

    handleChange(evt) {
      evt.preventDefault();
      let {loginValid, passwordValid} = this.state;
      const {name} = evt.target;
      if (name === `email`) {
        loginValid = isValid(this.loginRef);
      }
      if (name === `password`) {
        passwordValid = isValid(this.passwordRef);
      }
      this.setState({loginValid, passwordValid, formValid: loginValid && passwordValid});
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
