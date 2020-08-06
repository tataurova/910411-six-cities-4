import React from "react";
import renderer from "react-test-renderer";
import withSelectedItem from "./with-selected-item.tsx";

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
