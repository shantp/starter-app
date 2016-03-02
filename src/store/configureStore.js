import {compose, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import DevTools from '../components/DevTools';
import trackState from '../trackState';

const createComposedStore = compose(
  applyMiddleware(thunk),
  DevTools.instrument(),
  trackState()
)(createStore);



export default function configureStore(initialState) {
  const store = createComposedStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers'));
    });
  }

  return store;
}
