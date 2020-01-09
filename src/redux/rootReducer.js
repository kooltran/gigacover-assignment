import { combineReducers } from "redux";
import tripReducer from "./reducers/tripReducer";
import paginationReducer from "./reducers/paginationReducer";

export default combineReducers({
  tripReducer,
  paginationReducer
});
