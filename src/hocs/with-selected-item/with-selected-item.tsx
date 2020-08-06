import * as React from 'react';
import {placeCardType} from "../../types";

interface Props {
  offers?: placeCardType[];
  city?: string;
  activeSortType?: string;
  onSortTypeClick?: (sort: string) => void;
  onPlaceCardHover?: () => void;
}

interface State {
  item: string;
}

const withSelectedItem = (Component, defaultValue) => {
  return class WithSelectedItem extends React.PureComponent<Props, State> {
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
