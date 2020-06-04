import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/content/";

export function getContent() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
