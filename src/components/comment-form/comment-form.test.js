import React from "react";
import renderer from "react-test-renderer";
import CommentForm from "./comment-form.jsx";

describe(`<CommentForm />`, () => {
  it(`Render CommentForm`, () => {
    const state = {
      rating: 0,
      comment: ``,
    };
    const tree = renderer
      .create(<CommentForm
        state = {state}
        isSending = {false}
        error = {-1}
        onChange = {() => {}}
        onSubmit = {() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
