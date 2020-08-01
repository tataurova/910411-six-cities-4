import {mount} from "enzyme";
import React from "react";
import withCompletedComment from "./with-completed-comment.jsx";
import PropTypes from "prop-types";

const MockComponent = (props) => {
  const {state, isFetching, onChange, onSubmit} = props;
  return (
    <div>
      <form action="#" method="post" onSubmit={state.rating > 0 && state.comment.length > 49 ? onSubmit : null}>
        <input type="text" name="rating" onChange={onChange}></input>
        <textarea name="review" value={state.comment} onChange={onChange} disabled={isFetching}></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

MockComponent.propTypes = {
  state: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
  }),
  isFetching: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const MockComponentWrapped = withCompletedComment(MockComponent);

describe(`withCompletedComment`, () => {
  const onSubmitForm = jest.fn();
  const main = mount(
      <MockComponentWrapped
        onSubmitForm = {onSubmitForm}
        id = {`1`}
        isFetching = {false}
        error = {-1}
      />
  );
  const instance = main.instance();
  jest.spyOn(instance, `handleChange`);
  jest.spyOn(instance, `handleSubmit`);

  const ratingInput = main.find(`input`);
  const commentInput = main.find(`textarea`);
  const submitButton = main.find(`button`);

  it(`When a function is called in a component the state changes in HOC`, () => {

    submitButton.simulate(`submit`);
    expect(main.state()).toEqual({
      rating: 0,
      comment: ``,
    });

    ratingInput.simulate(`change`, {target: {name: `rating`, value: `1`}});
    commentInput.simulate(`change`, {target: {name: `review`, value: `test comment`}});

    expect(main.state()).toEqual({
      rating: 1,
      comment: `test comment`,
    });

    jest.clearAllMocks();

  });

  it(`After the submit valid form, the function passed to props is called`, () => {
    const testComment = `A quiet cozy and picturesque that hides behind a a river by the unique
    lightness of Amsterdam. The building is green and from 18th century.`;

    ratingInput.simulate(`change`, {target: {name: `rating`, value: `1`}});
    commentInput.simulate(`change`, {target: {name: `review`, value: testComment}});

    submitButton.simulate(`submit`);
    expect(instance.handleChange).toHaveBeenCalledTimes(2);
    expect(instance.handleSubmit).toHaveBeenCalledTimes(1);

    jest.clearAllMocks();

  });

  it(`After the submit not valid form, the function passed to props is not called`, () => {

    ratingInput.simulate(`change`, {target: {name: `rating`, value: ``}});
    commentInput.simulate(`change`, {target: {name: `review`, value: `test comment`}});
    submitButton.simulate(`submit`);
    expect(onSubmitForm).toHaveBeenCalledTimes(0);

  });
});
