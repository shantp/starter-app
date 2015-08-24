import {TOGGLE} from '../actions/actionTypes';

const initialState = true;

export function toggle(state = initialState, action) {
  switch (action.type) {
  case TOGGLE:
    return !state;
  default:
    return state;
  }
}
