import { combineReducers } from "redux";
import auth from "./auth";
import boards from "./boards";
//combine all reducer files and squish them into one object. this overall object is our Redux Store State
export default combineReducers({
  auth, //we now have auth and boards in our combined redux store state
  boards
});
