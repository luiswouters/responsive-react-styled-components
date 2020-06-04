import * as types from "../Actions/actionTypes";
import initialState from "./initialState";

export default function contentReducer(state = initialState.content, action) {
  switch (action.type) {
    case types.LOAD_CONTENT_SUCCESS:
      return action.content;
    default:
      return state;
  }
}
