import {NEW_TAB, UPDATE_TAB} from './actionTypes';

export function newTab(tab) {
  return {
    type: NEW_TAB,
    tab,
  };
}

export function updateTab(id, tab) {
  return {
    type: UPDATE_TAB,
    id,
    tab,
  };
}
