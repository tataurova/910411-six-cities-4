import * as React from 'react';
import Header from "../header/header";
import Main from "../main/main";
import {Offer} from "../../types";

interface Props {
  cityOffers: Offer[];
  cities: string[];
  city: string;
  onMenuClick: () => void;
  isFetching: boolean;
  error: boolean;
  authorizationStatus: string;
  user: string;
}

const MainPage: React.FunctionComponent<Props> = ({cityOffers, cities, city, onMenuClick, isFetching, error, authorizationStatus, user}: Props) => {
  return (
    <>
      <div className="page page--gray page--main">
        <Header
          authorizationStatus = {authorizationStatus}
          user = {user}
          error = {error}
        />
        <Main
          offers = {cityOffers}
          cities = {cities}
          city = {city}
          onMenuClick = {onMenuClick}
          isFetching = {isFetching}
        />
      </div>
    </>
  );
};

export default MainPage;
