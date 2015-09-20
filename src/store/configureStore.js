import {compose, createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import {devTools} from 'redux-devtools';
import rootReducer from '../reducers';

const logger = createLogger();

const createStoreWithMiddleware = compose(
  applyMiddleware(logger),
  devTools()
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
