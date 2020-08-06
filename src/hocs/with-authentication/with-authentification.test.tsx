import * as React from "react";
import * as renderer from "react-test-renderer";
import withAuthentication from "./with-authentication";
import {mockFunction} from "../../utils/common";
import {AuthorizationStatus} from "../../const";

const MockComponent = () => {
  return (
    <div></div>
  );
};

const MockComponentWrapped = withAuthentication(MockComponent);

it(`withAuthentication is rendered correctly`, () => {
  const onSubmitForm = (mockFunction);
  const tree = renderer.create((
    <MockComponentWrapped
      onSubmitForm = {onSubmitForm}
      authorizationStatus = {AuthorizationStatus.NO_AUTH}
      user = {``}
      error = {false}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
