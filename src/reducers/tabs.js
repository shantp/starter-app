import {NEW_TAB, UPDATE_TAB} from '../actions/actionTypes';

const initialState = [];

export function tabs(state = initialState, action) {
  switch (action.type) {
  case NEW_TAB:
    state.push(action.url);
    return state;
  case UPDATE_TAB:
    state[action.id] = action.url;
    return state;
  default:
    return state;
  }
}
