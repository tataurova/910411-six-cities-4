import * as React from "react";
import * as renderer from "react-test-renderer";
import withCompletedComment from "./with-completed-comment";
import {mockFunction} from "../../utils/common";
import {reviews} from "../../mocks/reviews";

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
      onSubmitForm = {mockFunction}
      isFetching = {false}
      id = {id}
      reviews = {reviews}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
