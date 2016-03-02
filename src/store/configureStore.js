import {compose, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import DevTools from '../components/DevTools';
import trackState from '../trackState';

const logger = createLogger();

const enhancer = compose(
  applyMiddleware(thunk, logger),
  DevTools.instrument(),
  trackState()
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
