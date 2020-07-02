import React from "react";
import {SORT_TYPES, SortType} from "../../const.js";
import PropTypes from "prop-types";

class Sort extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleSortMenuClick = this.handleSortMenuClick.bind(this);
    this.state = {
      opened: false,
    };
  }

  handleSortMenuClick() {
    this.setState({opened: !this.state.opened});
  }

  render() {
    const activeSortType = this.props.activeSortType;
    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0" onClick={this.handleSortMenuClick}>
          {activeSortType}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${this.state.opened ? `places__options--opened` : ``}`}>
          {SORT_TYPES.map((sortType, index) => (
            <li
              key={sortType}
              className={`places__option ${sortType === activeSortType ? `places__option--active` : ``}`}
              tabIndex="0"
              data-sort={Object.values(SortType)[index]}
              onClick={(evt) => {
                this.props.onSortTypeClick(evt.target.dataset.sort);
              }}>
              {sortType}
            </li>
          ))}
        </ul>
      </form>
    );
  }

}

export default Sort;

Sort.propTypes = {
  activeSortType: PropTypes.string.isRequired,
  onSortTypeClick: PropTypes.func.isRequired,
};
