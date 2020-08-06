import * as React from "react";
import * as renderer from "react-test-renderer";
import withSelectedItem from "./with-selected-item";

const MockComponent = () => {
  return (
    <div></div>
  );
};

const MockComponentWrapped = withSelectedItem(MockComponent, 0);

it(`withSelectedItem is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
