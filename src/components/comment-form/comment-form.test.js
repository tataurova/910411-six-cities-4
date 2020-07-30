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
        isFetching = {false}
        error = {-1}
        onChange = {() => {}}
        onSubmit = {() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render CommentForm with error message`, () => {
    const state = {
      rating: 0,
      comment: ``,
    };
    const tree = renderer
      .create(<CommentForm
        state = {state}
        isFetching = {false}
        error = {400}
        onChange = {() => {}}
        onSubmit = {() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render CommentForm with disabled submit button`, () => {
    const state = {
      rating: 1,
      comment: ``,
    };
    const tree = renderer
      .create(<CommentForm
        state = {state}
        isFetching = {false}
        error = {-1}
        onChange = {() => {}}
        onSubmit = {() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render CommentForm with active submit form handler`, () => {
    const testComment = `A quiet cozy and picturesque that hides behind a a river by the unique
    lightness of Amsterdam. The building is green and from 18th century.`;
    const state = {
      rating: 1,
      comment: testComment,
    };
    const tree = renderer
      .create(<CommentForm
        state = {state}
        isFetching = {false}
        error = {-1}
        onChange = {() => {}}
        onSubmit = {() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
