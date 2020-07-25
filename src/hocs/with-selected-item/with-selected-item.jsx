import React from "react";

const withSelectedItem = (Component, defaultValue) => {
  return class WithSelectedItem extends React.PureComponent {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        item: defaultValue,
      };
    }

    handleChange(value) {
      this.setState({
        item: value,
      });
    }

    render() {
      return <Component state = {this.state.item} onChangeItem = {this.handleChange} {...this.props}/>;
    }
  };
};

export default withSelectedItem;
