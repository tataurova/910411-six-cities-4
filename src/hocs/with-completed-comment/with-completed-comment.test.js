import React from "react";
import renderer from "react-test-renderer";
import withCompletedComment from "./with-completed-comment.jsx";
import {DEFAULT_ERROR_STATUS} from "../../const.js";

const MockComponent = () => {
  return (
    <div></div>
  );
};

const MockComponentWrapped = withCompletedComment(MockComponent);

it(`withCompletedComment is rendered correctly`, () => {
  const id = `1`;
  const tree = renderer.create((
    <MockComponentWrapped
      onSubmitForm = {() => {}}
      isFetching = {false}
      error = {DEFAULT_ERROR_STATUS}
      id = {id}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
