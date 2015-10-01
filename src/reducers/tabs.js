import {NEW_TAB, UPDATE_TAB} from '../actions/actionTypes';
import Immutable from 'immutable';

const initialState = Immutable.List([]);

export function tabs(state = initialState, action) {
  switch (action.type) {
    case NEW_TAB:
      return state.push(action.tab);
    case UPDATE_TAB:
      return state.set(action.id, action.tab);
    default:
      return state;
  }
}
