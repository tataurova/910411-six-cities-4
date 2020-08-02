import React from "react";
import renderer from "react-test-renderer";
import CommentForm from "./comment-form.jsx";
import {DEFAULT_ERROR_STATUS, Error} from "../../const.js";

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
        error = {DEFAULT_ERROR_STATUS}
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
        error = {Error.BAD_REQUEST}
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
        error = {DEFAULT_ERROR_STATUS}
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
        error = {DEFAULT_ERROR_STATUS}
        onChange = {() => {}}
        onSubmit = {() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
