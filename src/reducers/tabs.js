import {NEW_TAB, UPDATE_TAB} from '../actions/actionTypes';

const initialState = [];

export function tabs(state = initialState, action) {
  switch (action.type) {
    case NEW_TAB:
      return [...state, action.tab];
    case UPDATE_TAB:
      return state.map((item, i) => {
        if (i === action.id) {
          return action.tab;
        }
        return item;
      });
    default:
      return state;
  }
}
