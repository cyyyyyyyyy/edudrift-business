import { combineReducers } from "redux";

import accounts from "./accounts";
import program from "./program";

export default combineReducers({
  accounts,
  program
});
