import {compose, createStore} from 'redux';
import rootReducer from '../reducers';
import DevTools from '../components/DevTools';
import trackState from '../trackState';

const enhancer = compose(
  trackState(),
  DevTools.instrument()
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers'));
    });
  }

  return store;
}
