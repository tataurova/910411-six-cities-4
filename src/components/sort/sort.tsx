import * as React from 'react';
import {SORT_TYPES, SortType} from "../../const";
import {getSortTypeName} from "../../utils/sort";

interface Props {
  state: boolean;
  activeSortType: string;
  onSortTypeClick: (sort: string) => void;
  onChangeItem: (state: boolean) => void;
}

const Sort: React.FunctionComponent<Props> = (props: Props) => {
  const {state, activeSortType, onSortTypeClick, onChangeItem} = props;
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => onChangeItem(!state)}>
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
            tabIndex={0}
            data-sort={Object.values(SortType)[index]}
            onClick={(evt) => {
              onSortTypeClick((evt.target as HTMLElement).dataset.sort);
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
