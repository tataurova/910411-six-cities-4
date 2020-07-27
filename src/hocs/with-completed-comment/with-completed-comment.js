import React from "react";
import {extend} from "../../utils/common.js";
import PropTypes from "prop-types";

export const withCompletedComment = (Component) => {
  class WithCompletedComment extends React.PureComponent {
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
      evt.preventDefault();
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
        isSending={this.props.isSending}
        error={this.props.error}
        onChange = {this.handleChange}
        onSubmit = {this.handleSubmit}
        {...this.props}
      />;
    }
  }
  WithCompletedComment.propTypes = {
    onSubmitForm: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    isSending: PropTypes.bool.isRequired,
    error: PropTypes.number.isRequired,
  };
  return WithCompletedComment;
};

export default withCompletedComment;
