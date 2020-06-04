import * as types from "./actionTypes";
import * as contentApi from "../../Api/contentApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadContentSuccess(content) {
  return { type: types.LOAD_CONTENT_SUCCESS, content };
}

//Thunks:

export function loadContent() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return contentApi
      .getContent()
      .then((content) => {
        dispatch(loadContentSuccess(content));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
