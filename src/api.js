import axios from "axios";
import {MIN_ERROR_CODE, MAX_TIMEOUT} from "./const.js";

const MAIN_URL = `https://4.react.pages.academy/six-cities`;
const Error = {
  UNAUTHORIZED: 401
};

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: MAIN_URL,
    timeout: MAX_TIMEOUT,
    withCredentials: true,
  });
  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;
    if (response.status === Error.UNAUTHORIZED) {
      onUnauthorized();
      throw err;
    }
    if (response.status > MIN_ERROR_CODE) {
      throw err;
    }
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
