import {NEW_TAB, UPDATE_TAB} from '../actions/actionTypes';

const initialState = [];

export function tabs(state = initialState, action) {
  switch (action.type) {
    case NEW_TAB:
      return [...state, action.tab];
    case UPDATE_TAB:
      const newState = [...state];
      newState[action.id] = action.tab;
      return newState;
    default:
      return state;
  }
}
