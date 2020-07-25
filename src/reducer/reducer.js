import {combineReducers} from "redux";
import {reducer as data} from "./data/data.js";
import {reducer as app} from "./app/app.js";
import {reducer as auth} from "./user/user.js";
import NameSpace from "./name-space";

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.APP]: app,
  [NameSpace.AUTH]: auth,
});
