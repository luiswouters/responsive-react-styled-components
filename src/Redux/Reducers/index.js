import { combineReducers } from "redux";
import content from "./contentReducer";

const rootReducer = combineReducers({
  content,
});

export default rootReducer;
