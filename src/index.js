import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import DevTools from './components/DevTools';
import configureStore from './store/configureStore';

const store = configureStore();

render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
);
