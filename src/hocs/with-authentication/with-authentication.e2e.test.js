import {mount} from "enzyme";
import React from "react";
import withAuthentication from "./with-authentication.jsx";
import PropTypes from "prop-types";
/* eslint-disable */
const MockComponent = (props) => {
  const {state, loginRef, passwordRef, onChange, onSubmit} = props;
  return (
    <div>
      <form action="#" method="post" onSubmit={state.formValid ? onSubmit : null}>
        <input type="email" name="email" ref={loginRef} onChange={onChange}></input>
        <input type="password" name="password" ref={passwordRef} onChange={onChange}></input>
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

MockComponent.propTypes = {
  state: PropTypes.shape({
    formValid: PropTypes.bool,
    loginValid: PropTypes.bool,
    passwordValid: PropTypes.bool,
  }),
  loginRef: PropTypes.shape({current: PropTypes.instanceOf(HTMLInputElement)}).isRequired,
  passwordRef: PropTypes.shape({current: PropTypes.instanceOf(HTMLInputElement)}).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const MockComponentWrapped = withAuthentication(MockComponent);

describe(`withAuthentication`, () => {
  const login = jest.fn();
  const main = mount(
    <MockComponentWrapped
      onSubmitForm = {login}
    />
  );
  const instance = main.instance();
  jest.spyOn(instance, `handleChange`);
  jest.spyOn(instance, `handleSubmit`);

  const emailInput = main.find(`input`).at(0);
  const passwordInput = main.find(`input`).at(1);
  const submitButton = main.find(`button`);

  it(`When a function is called in a component the state changes in HOC`, () => {

    submitButton.simulate(`submit`);
    expect(main.state()).toEqual({
      loginValid: null,
      passwordValid: null,
      formValid: null,
    });

    emailInput.simulate(`change`, {target: {name: `email`, value: `test@test.ru`}});
    passwordInput.simulate(`change`, {target: {name: `password`, value: `123`}});

    expect(main.state()).toEqual({
      loginValid: true,
      passwordValid: true,
      formValid: true,
    });

    jest.clearAllMocks();

  });

  it(`After the submit valid form, the function passed to props is called`, () => {

    emailInput.simulate(`change`, {target: {name: `email`, value: `test@test.ru`}});
    passwordInput.simulate(`change`, {target: {name: `password`, value: `123`}});

    submitButton.simulate(`submit`);
    expect(instance.handleChange).toHaveBeenCalledTimes(2);
    expect(login).toHaveBeenCalledTimes(1);
    expect(instance.handleSubmit).toHaveBeenCalledTimes(1);

    jest.clearAllMocks();

  });

  // it(`After the submit not valid form, the function passed to props is not called`, () => {
  //
  //   emailInput.simulate(`change`, {target: {name: `email`, value: `test@@@@`}});
  //   passwordInput.simulate(`change`, {target: {name: `password`, value: ``}});
  //   main.setState({ loginValid: false, // validity does not change in jest
  //     passwordValid: true,
  //     formValid: false});
  //   submitButton.simulate(`submit`);
  //   expect(login).toHaveBeenCalledTimes(0);
  //
  // });
});
