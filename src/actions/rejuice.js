import {REJUICE} from './actionTypes';
import Firebase from 'firebase';

const fire = new Firebase('https://torid-fire-2143.firebaseio.com/');

function rejuice(payload) {
  return {
    type: REJUICE,
    payload
  }
}

export function getInitialState(admin, session) {
  return (dispatch, getState) => {
    return fire.once('value', (data) => {
      console.log(data.val());
      dispatch(rejuice(data.val().shant));
    });
  };
}
