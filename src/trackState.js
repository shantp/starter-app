// import r from 'rethinkdb';
import packageJson from '../package.json';

// const dbConfig = {
//   host: 'localhost',
//   port: 28015,
//   db: 'test'
// }

export default function trackState() {
  // function deserialize(state) {
  //   return {
  //     ...state
  //   };
  // }

  return next => (reducer, initialState, enhancer) => {
    const store = next(reducer, initialState, enhancer);

    return {
      ...store,
      dispatch(action) {
        store.dispatch(action);
        const index = store.liftedStore.getState().currentStateIndex;
        const key = `${packageJson.version}_${'shant'}_${index}`;

        const state = JSON.stringify(store.getState());

        try {
          localStorage.setItem(key, state);

          // r.connect(dbConfig)
          // .then(conn => {
          //   return r
          //   .table('admin_state')
          //   .insert(state)
          //   .run(conn)
          //   .then(reponse => {
          //     console.log(response);
          //   })
          // });
        } catch (err) {
          console.warn('Error persisting state: ', err);
        }

        return action;
      }
    };
  }
}
