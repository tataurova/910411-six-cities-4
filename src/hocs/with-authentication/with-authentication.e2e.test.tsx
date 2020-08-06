import * as React from "react";
import * as Adapter from "enzyme-adapter-react-16";
import {mount, configure} from "enzyme";
import withAuthentication from "./with-authentication";
import {AuthorizationStatus} from "../../const";

configure({adapter: new Adapter()});

interface Props {
  loginRef: React.RefObject<HTMLInputElement>;
  passwordRef: React.RefObject<HTMLInputElement>;
  onChange: () => void;
  onSubmit: () => void;
}

const MockComponent: React.FunctionComponent<Props> = ({loginRef, passwordRef, onChange, onSubmit}: Props) => {

  return (
    <div>
      <form action="#" method="post" onSubmit={onSubmit}>
        <input type="email" name="email" ref={loginRef} onChange={onChange}></input>
        <input type="password" name="password" ref={passwordRef} onChange={onChange}></input>
        <button className="login__submit form__submit button" type="submit">Sign in</button>
      </form>
    </div>
  );
};

const MockComponentWrapped = withAuthentication(MockComponent);

describe(`withAuthentication`, () => {
  const mockLogin = jest.fn();
  const main = mount(
      <MockComponentWrapped
        onSubmitForm = {mockLogin}
        authorizationStatus = {AuthorizationStatus.NO_AUTH}
        user = {``}
        error = {false}
      />
  );
  const instance = main.instance();
  jest.spyOn(instance, `handleChange`);
  jest.spyOn(instance, `handleSubmit`);

  const emailInput = main.find(`input`).at(0);
  const passwordInput = main.find(`input`).at(1);
  const submitButton = main.find(`button`);

  it(`When a function is called in a component the state changes in HOC`, () => {

    expect(main.state()).toEqual({
      loginValid: null,
      passwordValid: null,
    });

    main.setState({loginValid: true,
      passwordValid: null});

    submitButton.simulate(`submit`);
    expect(main.state()).toEqual({
      loginValid: true,
      passwordValid: false,
    });

    main.setState({loginValid: null,
      passwordValid: true});

    submitButton.simulate(`submit`);
    expect(main.state()).toEqual({
      loginValid: false,
      passwordValid: true,
    });

    emailInput.simulate(`change`, {target: {name: `email`, value: `test@test.ru`}});
    passwordInput.simulate(`change`, {target: {name: `password`, value: `123`}});

    expect(main.state()).toEqual({
      loginValid: true,
      passwordValid: true,
    });

    jest.clearAllMocks();

  });

  it(`After the submit valid form, the function passed to props is called`, () => {

    emailInput.simulate(`change`, {target: {name: `email`, value: `test@test.ru`}});
    passwordInput.simulate(`change`, {target: {name: `password`, value: `123`}});
    main.setState({loginValid: true, // validity does not change in jest
      passwordValid: true});
    submitButton.simulate(`submit`);
    expect(instance.handleChange).toHaveBeenCalledTimes(2);
    expect(mockLogin).toHaveBeenCalledTimes(1);
    expect(instance.handleSubmit).toHaveBeenCalledTimes(1);

    jest.clearAllMocks();

  });

  it(`After the submit not valid form, the function passed to props is not called`, () => {

    emailInput.simulate(`change`, {target: {name: `email`, value: `test@@@@`}});
    passwordInput.simulate(`change`, {target: {name: `password`, value: ``}});
    main.setState({loginValid: false, // validity does not change in jest
      passwordValid: true});
    submitButton.simulate(`submit`);
    expect(mockLogin).toHaveBeenCalledTimes(0);

  });
});
