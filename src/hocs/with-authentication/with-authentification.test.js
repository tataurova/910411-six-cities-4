import React from "react";
import renderer from "react-test-renderer";
import withAuthentication from "./with-authentication.jsx";

const MockComponent = () => {
  return (
    <div></div>
  );
};

const MockComponentWrapped = withAuthentication(MockComponent);

it(`withAuthentication is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      onSubmitForm = {() => {}}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
