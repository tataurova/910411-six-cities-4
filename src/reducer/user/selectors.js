import NameSpace from "../name-space";

const NAME_SPACE = NameSpace.AUTH;

export const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};
