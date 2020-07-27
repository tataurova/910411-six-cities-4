import React from "react";
import renderer from "react-test-renderer";
import withCompletedComment from "./with-completed-comment.js";

const MockComponent = () => {
  return (
    <div></div>
  );
};

const MockComponentWrapped = withCompletedComment(MockComponent);

it(`withCompletedComment is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      onSubmitForm = {() => {}}
      isSending = {false}
      error = {-1}
      id = {1}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
