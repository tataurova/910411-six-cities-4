import React from "react";
import {SORT_TYPES, SortType} from "../../const.js";
import PropTypes from "prop-types";
import {getSortTypeName} from "../../utils/sort.js";

const Sort = (props) => {
  const {state, activeSortType, onSortTypeClick, onChangeItem} = props;
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={() => onChangeItem(!state)}>
        {getSortTypeName(activeSortType)}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${state ? `places__options--opened` : ``}`}>
        {SORT_TYPES.map((sortType, index) => (
          <li
            key={sortType}
            className={`places__option ${sortType === activeSortType ? `places__option--active` : ``}`}
            tabIndex="0"
            data-sort={Object.values(SortType)[index]}
            onClick={(evt) => {
              onSortTypeClick(evt.target.dataset.sort);
              onChangeItem(!state);
            }}>
            {sortType}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default Sort;

Sort.propTypes = {
  state: PropTypes.bool.isRequired,
  activeSortType: PropTypes.string.isRequired,
  onSortTypeClick: PropTypes.func.isRequired,
  onChangeItem: PropTypes.func.isRequired,
};
