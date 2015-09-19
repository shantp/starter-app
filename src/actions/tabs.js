import {NEW_TAB, UPDATE_TAB} from './actionTypes';

export function newTab(url) {
  return {
    type: NEW_TAB,
    url,
  };
}

export function updateTab(id, url) {
  return {
    type: UPDATE_TAB,
    id,
    url,
  };
}
