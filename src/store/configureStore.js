import {compose, createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import DevTools from '../components/DevTools';

const enhancer = compose(
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
