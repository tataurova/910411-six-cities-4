import * as React from "react";
import * as Adapter from "enzyme-adapter-react-16";
import {mount, configure} from "enzyme";
import withCompletedComment from "./with-completed-comment";
import {reviews} from "../../mocks/reviews";
import {CommentLength} from "../../const";

configure({adapter: new Adapter()});

interface Props {
  state: {
    rating: number;
    comment?: string;
  };
  isFetching: boolean;
  onChange: () => void;
  onSubmit: () => void;
}

const MockComponent: React.FunctionComponent<Props> = ({state, isFetching, onChange, onSubmit}: Props) => {
  return (
    <div>
      <form action="#" method="post" onSubmit={state.rating > 0 && state.comment.length >= CommentLength.MIN && state.comment.length <= CommentLength.MAX ? onSubmit : null}>
        <input type="text" name="rating" onChange={onChange}></input>
        <textarea name="review" value={state.comment} onChange={onChange} disabled={isFetching}></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const MockComponentWrapped = withCompletedComment(MockComponent);

describe(`withCompletedComment`, () => {
  const onSubmitForm = jest.fn(() => {
    return Promise.resolve(`test`);
  });
  const id = `1`;
  const main = mount(
      <MockComponentWrapped
        onSubmitForm = {onSubmitForm}
        id = {id}
        isFetching = {false}
        reviews = {reviews}
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

    ratingInput.simulate(`change`, {target: {name: `rating`, value: 1}});
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

    ratingInput.simulate(`change`, {target: {name: `rating`, value: 1}});
    commentInput.simulate(`change`, {target: {name: `review`, value: testComment}});

    submitButton.simulate(`submit`);
    expect(instance.handleChange).toHaveBeenCalledTimes(2);
    expect(instance.handleSubmit).toHaveBeenCalledTimes(1);
  });

  it(`After the submit not valid form, the function passed to props is not called`, () => {
    jest.clearAllMocks();
    ratingInput.simulate(`change`, {target: {name: `rating`, value: 0}});
    commentInput.simulate(`change`, {target: {name: `review`, value: `test comment`}});
    submitButton.simulate(`submit`);
    expect(onSubmitForm).toHaveBeenCalledTimes(0);
  });
});
