import Firebase from 'firebase';
import packageJson from '../package.json';
import {mapValues, identity} from 'lodash';
import {REJUICE} from './actions/actionTypes';

const fire = new Firebase('https://torid-fire-2143.firebaseio.com/');

export default function trackState() {
  return next => (reducer, initialState, enhancer) => {
    const rejuiceReducer = rejuice(reducer);
    const store = next(rejuiceReducer, initialState, enhancer);

    return {
      ...store,
      dispatch(action) {
        store.dispatch(action);
        const key = 'shant';
        const state = JSON.stringify(store.getState());

        try {
          fire.set({[key]: state});
        } catch (err) {
          console.warn('Error persisting state: ', err);
        }

        return action;
      }
    };
  }

  function deserialize(state) {
    return {
      ...state,
      actionsById: mapValues(state.actionsById, liftedAction => ({
        ...liftedAction,
        action: identity(liftedAction.action)
      })),
      committedState: identity(state.committedState),
      computedStates: state.computedStates.map(computedState => ({
        ...computedState,
        state: identity(computedState.state)
      }))
    };
  }

  function rejuice(reducer) {
    return (state, action) => {
      let innerAction = action.action;
      if (!innerAction || innerAction.type !== REJUICE) {
        return reducer(state, action);
      } else {
        return deserialize(JSON.parse(innerAction.payload));
      }
    }
  }
}
