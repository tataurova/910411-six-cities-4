import * as React from 'react';

interface Props {
  activeCity: string;
  isFetching: boolean;
}

const NoPlaces: React.FunctionComponent<Props> = ({activeCity, isFetching}: Props) => {
  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">{isFetching || `No places to stay available`}</b>
          <p className="cities__status-description">{isFetching ? `Loading...` : `We could not find any property available at the moment ${activeCity ? `in ${activeCity}` : ``}`}
          </p>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </div>
  );
};

export default NoPlaces;
