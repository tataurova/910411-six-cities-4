import * as React from 'react';
import Header from "../header/header";

interface Props {
  authorizationStatus: string;
  user: string;
  error: boolean;
}

const NotFound: React.FunctionComponent<Props> = ({authorizationStatus, user, error}: Props) => {
  return (
    <div className="page page--gray page--main">
      <Header
        authorizationStatus = {authorizationStatus}
        user = {user}
        error = {error}
      />
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">Not Found</b>
                <p className="cities__status-description">This page does not exist</p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
