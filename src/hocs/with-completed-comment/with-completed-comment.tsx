import * as React from 'react';
import {extend} from "../../utils/common.js";
import {Review} from "../../types";

interface Props {
  onSubmitForm: ({rating, comment}: {rating: number; comment: string}, id: string) => void;
  id: string;
  isFetching: boolean;
  reviews: Review[];
}

interface State {
  rating: number;
  comment: string;
}

export const withCompletedComment = (Component) => {
  class WithCompletedComment extends React.PureComponent<Props, State> {
    constructor(props) {
      super(props);

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      this.state = {
        rating: 0,
        comment: ``,
      };
    }

    handleChange(evt) {
      const {name} = evt.target;
      if (name === `rating`) {
        this.setState(extend(this.state, {rating: Number(evt.target.value)}));
      }
      if (name === `review`) {
        this.setState(extend(this.state, {comment: evt.target.value}));
      }
    }

    handleSubmit(evt) {
      evt.preventDefault();
      const {onSubmitForm, id} = this.props;
      onSubmitForm({
        rating: this.state.rating,
        comment: this.state.comment,
      }, id);
      this.setState({rating: 0, comment: ``});
    }

    render() {
      return <Component
        state = {this.state}
        isFetching={this.props.isFetching}
        onChange = {this.handleChange}
        onSubmit = {this.handleSubmit}
        {...this.props}
      />;
    }
  }
  return WithCompletedComment;
};

export default withCompletedComment;
