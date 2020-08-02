import axios from "axios";
import {MIN_ERROR_CODE, MAX_TIMEOUT, AppRoute, Error} from "./const.js";

export const createAPI = (onUnauthorized, onNoResponse) => {
  const api = axios.create({
    baseURL: AppRoute.SERVER_URL,
    timeout: MAX_TIMEOUT,
    withCredentials: true,
  });
  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (response) {
      if (response.status === Error.UNAUTHORIZED) {
        onUnauthorized();
        throw err;
      }
      if (response.status > MIN_ERROR_CODE) {
        throw err;
      }
    } else {
      onNoResponse();
      throw err;
    }
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
